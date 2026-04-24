#!/usr/bin/env python3
"""
Backend API Testing for Latitude44 Landing Page
Tests all endpoints with various scenarios including SendGrid graceful fallback
"""

import requests
import sys
import json
from datetime import datetime
from typing import Dict, Any

class Latitude44APITester:
    def __init__(self, base_url="https://tech-consulting-nz.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
        
        result = {
            "test_name": name,
            "success": success,
            "details": details,
            "response_data": response_data,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} - {name}")
        if details:
            print(f"    {details}")
        if not success and response_data:
            print(f"    Response: {response_data}")
        print()

    def test_health_endpoint(self):
        """Test GET /api/health endpoint"""
        try:
            response = requests.get(f"{self.api_url}/health", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                expected_keys = ["status", "sendgrid_configured", "sender_email", "admin_email"]
                
                if all(key in data for key in expected_keys):
                    if data["status"] == "healthy" and data["sendgrid_configured"] == False:
                        self.log_test(
                            "Health endpoint structure and SendGrid status",
                            True,
                            f"Status: {data['status']}, SendGrid configured: {data['sendgrid_configured']}"
                        )
                        return True
                    else:
                        self.log_test(
                            "Health endpoint values",
                            False,
                            f"Unexpected values - Status: {data.get('status')}, SendGrid: {data.get('sendgrid_configured')}"
                        )
                else:
                    self.log_test(
                        "Health endpoint structure",
                        False,
                        f"Missing keys. Expected: {expected_keys}, Got: {list(data.keys())}"
                    )
            else:
                self.log_test(
                    "Health endpoint status code",
                    False,
                    f"Expected 200, got {response.status_code}",
                    response.text
                )
        except Exception as e:
            self.log_test("Health endpoint", False, f"Request failed: {str(e)}")
        
        return False

    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "status" in data:
                    self.log_test(
                        "Root endpoint",
                        True,
                        f"Message: {data['message']}, Status: {data['status']}"
                    )
                    return True
                else:
                    self.log_test(
                        "Root endpoint structure",
                        False,
                        f"Missing expected keys in response: {data}"
                    )
            else:
                self.log_test(
                    "Root endpoint status code",
                    False,
                    f"Expected 200, got {response.status_code}",
                    response.text
                )
        except Exception as e:
            self.log_test("Root endpoint", False, f"Request failed: {str(e)}")
        
        return False

    def test_contact_valid_submission(self):
        """Test POST /api/contact with valid data"""
        valid_payload = {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "Test Subject",
            "message": "This is a test message with more than 10 characters."
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=valid_payload,
                headers={"Content-Type": "application/json"},
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                expected_keys = ["status", "message", "id"]
                
                if all(key in data for key in expected_keys):
                    if data["status"] == "success":
                        self.log_test(
                            "Contact form valid submission",
                            True,
                            f"Submission successful with ID: {data['id']}"
                        )
                        return data["id"]  # Return ID for further testing
                    else:
                        self.log_test(
                            "Contact form response status",
                            False,
                            f"Expected status 'success', got '{data.get('status')}'"
                        )
                else:
                    self.log_test(
                        "Contact form response structure",
                        False,
                        f"Missing keys. Expected: {expected_keys}, Got: {list(data.keys())}"
                    )
            else:
                self.log_test(
                    "Contact form status code",
                    False,
                    f"Expected 200, got {response.status_code}",
                    response.text
                )
        except Exception as e:
            self.log_test("Contact form valid submission", False, f"Request failed: {str(e)}")
        
        return None

    def test_contact_invalid_email(self):
        """Test POST /api/contact with invalid email"""
        invalid_payload = {
            "name": "Test User",
            "email": "invalid-email",
            "subject": "Test Subject",
            "message": "This is a test message."
        }
        
        try:
            response = requests.post(
                f"{self.api_url}/contact",
                json=invalid_payload,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 422:
                self.log_test(
                    "Contact form invalid email validation",
                    True,
                    "Correctly rejected invalid email with 422 status"
                )
                return True
            else:
                self.log_test(
                    "Contact form invalid email validation",
                    False,
                    f"Expected 422, got {response.status_code}",
                    response.text
                )
        except Exception as e:
            self.log_test("Contact form invalid email", False, f"Request failed: {str(e)}")
        
        return False

    def test_contact_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        test_cases = [
            ({"email": "test@example.com", "subject": "Test", "message": "Test message"}, "missing name"),
            ({"name": "Test", "subject": "Test", "message": "Test message"}, "missing email"),
            ({"name": "Test", "email": "test@example.com", "message": "Test message"}, "missing subject"),
            ({"name": "Test", "email": "test@example.com", "subject": "Test"}, "missing message"),
            ({"name": "", "email": "test@example.com", "subject": "Test", "message": "Test message"}, "empty name"),
        ]
        
        all_passed = True
        for payload, description in test_cases:
            try:
                response = requests.post(
                    f"{self.api_url}/contact",
                    json=payload,
                    headers={"Content-Type": "application/json"},
                    timeout=10
                )
                
                if response.status_code == 422:
                    self.log_test(
                        f"Contact form validation - {description}",
                        True,
                        "Correctly rejected with 422 status"
                    )
                else:
                    self.log_test(
                        f"Contact form validation - {description}",
                        False,
                        f"Expected 422, got {response.status_code}"
                    )
                    all_passed = False
            except Exception as e:
                self.log_test(f"Contact form validation - {description}", False, f"Request failed: {str(e)}")
                all_passed = False
        
        return all_passed

    def test_contact_submissions_list(self):
        """Test GET /api/contact-submissions endpoint"""
        try:
            response = requests.get(f"{self.api_url}/contact-submissions", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test(
                        "Contact submissions list",
                        True,
                        f"Retrieved {len(data)} submissions"
                    )
                    
                    # Check structure of submissions if any exist
                    if data:
                        submission = data[0]
                        expected_keys = ["id", "name", "email", "subject", "message", "email_sent", "timestamp"]
                        if all(key in submission for key in expected_keys):
                            self.log_test(
                                "Contact submission structure",
                                True,
                                f"Submission has all required fields. Email sent: {submission.get('email_sent')}"
                            )
                        else:
                            self.log_test(
                                "Contact submission structure",
                                False,
                                f"Missing keys in submission. Expected: {expected_keys}, Got: {list(submission.keys())}"
                            )
                    
                    return True
                else:
                    self.log_test(
                        "Contact submissions list format",
                        False,
                        f"Expected list, got {type(data)}"
                    )
            else:
                self.log_test(
                    "Contact submissions list status",
                    False,
                    f"Expected 200, got {response.status_code}",
                    response.text
                )
        except Exception as e:
            self.log_test("Contact submissions list", False, f"Request failed: {str(e)}")
        
        return False

    def test_mongodb_persistence(self, submission_id):
        """Test that submissions are persisted in MongoDB by checking if we can retrieve them"""
        if not submission_id:
            self.log_test("MongoDB persistence", False, "No submission ID to verify")
            return False
        
        try:
            response = requests.get(f"{self.api_url}/contact-submissions", timeout=10)
            
            if response.status_code == 200:
                submissions = response.json()
                found_submission = None
                
                for submission in submissions:
                    if submission.get("id") == submission_id:
                        found_submission = submission
                        break
                
                if found_submission:
                    self.log_test(
                        "MongoDB persistence verification",
                        True,
                        f"Found submitted data in database with ID: {submission_id}"
                    )
                    return True
                else:
                    self.log_test(
                        "MongoDB persistence verification",
                        False,
                        f"Submission with ID {submission_id} not found in database"
                    )
            else:
                self.log_test(
                    "MongoDB persistence check",
                    False,
                    f"Could not retrieve submissions to verify persistence. Status: {response.status_code}"
                )
        except Exception as e:
            self.log_test("MongoDB persistence verification", False, f"Request failed: {str(e)}")
        
        return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Latitude44 Backend API Tests")
        print("=" * 50)
        
        # Test basic endpoints
        self.test_root_endpoint()
        self.test_health_endpoint()
        
        # Test contact form with various scenarios
        submission_id = self.test_contact_valid_submission()
        self.test_contact_invalid_email()
        self.test_contact_missing_fields()
        
        # Test submissions retrieval and persistence
        self.test_contact_submissions_list()
        if submission_id:
            self.test_mongodb_persistence(submission_id)
        
        # Print summary
        print("=" * 50)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All backend tests passed!")
            return True
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} tests failed")
            return False

    def get_test_results(self):
        """Return detailed test results"""
        return {
            "summary": {
                "total_tests": self.tests_run,
                "passed_tests": self.tests_passed,
                "failed_tests": self.tests_run - self.tests_passed,
                "success_rate": (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
            },
            "detailed_results": self.test_results
        }

def main():
    """Main test execution"""
    tester = Latitude44APITester()
    success = tester.run_all_tests()
    
    # Save detailed results
    results = tester.get_test_results()
    with open("/tmp/backend_test_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())