from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail, ReplyTo


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email configuration
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'admin@latitude44.co.nz').strip()
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'admin@latitude44.co.nz').strip()

# Create the main app without a prefix
app = FastAPI(title="Latitude44 API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    email_sent: bool = False
    email_error: Optional[str] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactResponse(BaseModel):
    status: str
    message: str
    id: str


# ---------- Email sending helper ----------
def _build_admin_email_html(submission: ContactSubmission) -> str:
    safe_msg = (submission.message or "").replace("\n", "<br/>")
    return f"""
    <!doctype html>
    <html>
      <body style="margin:0;padding:24px;background:#0A1A2A;font-family:Arial,Helvetica,sans-serif;color:#FFFFFF;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#0A1A2A;border:1px solid rgba(230,230,230,0.14);border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:20px 24px;border-bottom:1px solid rgba(230,230,230,0.14);">
              <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.7);">Latitude44</div>
              <div style="margin-top:6px;font-size:20px;font-weight:600;color:#FFFFFF;">New contact form submission</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;color:#E6E6E6;">
              <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.65);">From</p>
              <p style="margin:0 0 16px 0;font-size:15px;color:#FFFFFF;">{submission.name} &lt;{submission.email}&gt;</p>

              <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.65);">Subject</p>
              <p style="margin:0 0 16px 0;font-size:15px;color:#FFFFFF;">{submission.subject}</p>

              <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.65);">Message</p>
              <div style="padding:14px 16px;background:rgba(255,255,255,0.04);border:1px solid rgba(230,230,230,0.12);border-radius:8px;color:#FFFFFF;line-height:1.6;">{safe_msg}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;border-top:1px solid rgba(230,230,230,0.14);color:rgba(255,255,255,0.6);font-size:12px;">
              Submitted {submission.timestamp.isoformat()} UTC &middot; ID {submission.id}
            </td>
          </tr>
        </table>
      </body>
    </html>
    """


def send_contact_email(submission: ContactSubmission) -> tuple[bool, Optional[str]]:
    """Send contact email via SendGrid. Returns (success, error)."""
    if not SENDGRID_API_KEY:
        msg = "SENDGRID_API_KEY not configured - email not sent (submission stored in DB)"
        logger.warning(msg)
        return False, msg

    try:
        mail = Mail(
            from_email=SENDER_EMAIL,
            to_emails=ADMIN_EMAIL,
            subject=f"[Latitude44] {submission.subject}",
            html_content=_build_admin_email_html(submission),
        )
        mail.reply_to = ReplyTo(email=submission.email, name=submission.name)

        sg = SendGridAPIClient(SENDGRID_API_KEY)
        resp = sg.send(mail)
        ok = 200 <= resp.status_code < 300
        if not ok:
            err = f"SendGrid returned status {resp.status_code}"
            logger.error(err)
            return False, err
        logger.info(f"Contact email sent for submission {submission.id} (status {resp.status_code})")
        return True, None
    except Exception as e:  # noqa: BLE001
        logger.exception("SendGrid send failed")
        return False, str(e)


async def _persist_and_notify(submission: ContactSubmission):
    doc = submission.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    try:
        await db.contact_submissions.insert_one(doc)
    except Exception:  # noqa: BLE001
        logger.exception("Failed to insert contact submission")


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Latitude44 API online", "status": "ok"}


@api_router.get("/health")
async def health():
    return {
        "status": "healthy",
        "sendgrid_configured": bool(SENDGRID_API_KEY),
        "sender_email": SENDER_EMAIL,
        "admin_email": ADMIN_EMAIL,
    }


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for c in status_checks:
        if isinstance(c.get('timestamp'), str):
            c['timestamp'] = datetime.fromisoformat(c['timestamp'])
    return status_checks


@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(payload: ContactSubmissionCreate, background_tasks: BackgroundTasks):
    # Build submission
    submission = ContactSubmission(
        name=payload.name.strip(),
        email=str(payload.email).strip(),
        subject=payload.subject.strip(),
        message=payload.message.strip(),
    )

    # Send email synchronously so we can capture delivery status; store in DB afterwards
    ok, err = send_contact_email(submission)
    submission.email_sent = ok
    submission.email_error = err

    # Persist (non-blocking best-effort)
    await _persist_and_notify(submission)

    if ok:
        msg = "Thanks — your message has been sent. We'll be in touch shortly."
    elif not SENDGRID_API_KEY:
        # Still a success from user POV: submission is stored; admin will see it.
        msg = "Thanks — your message has been received. We'll respond from admin@latitude44.co.nz."
    else:
        # Email failed but we stored the submission
        raise HTTPException(status_code=502, detail=f"Email delivery failed: {err}")

    return ContactResponse(status="success", message=msg, id=submission.id)


@api_router.get("/contact-submissions", response_model=List[ContactSubmission])
async def list_contact_submissions(limit: int = 100):
    subs = await db.contact_submissions.find({}, {"_id": 0}).sort("timestamp", -1).to_list(limit)
    for s in subs:
        if isinstance(s.get('timestamp'), str):
            s['timestamp'] = datetime.fromisoformat(s['timestamp'])
    return subs


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
