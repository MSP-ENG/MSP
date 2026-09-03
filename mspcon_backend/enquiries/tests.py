from unittest.mock import patch
from django.contrib.auth.models import User
from django.core.cache import cache
from django.test import override_settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

# pyrefly: ignore [missing-import]
from .models import Enquiry


class EnquiryAPITests(APITestCase):
    def setUp(self):
        # Clear cache before each test to ensure clean rate-limiting state
        cache.clear()

        # Create normal user and staff user
        self.staff_user = User.objects.create_user(
            username='staff_member',
            email='staff@mspcon.in',
            password='Password123!',
            is_staff=True
        )
        self.regular_user = User.objects.create_user(
            username='regular_user',
            email='regular@mspcon.in',
            password='Password123!',
            is_staff=False
        )

        self.valid_payload = {
            "full_name": "Dr. Sarah Jenkins",
            "company": "BioPharma Innovations Ltd",
            "corporate_email": "sarah.jenkins@biopharmainnovations.com",
            "phone": "+44 20 7946 0912",
            "discipline": "HVAC & Cleanroom Engineering",
            "project_scope": "Design and engineering for Grade B/C cleanroom suite for sterile injectable manufacturing facility.",
            "website": ""
        }

        self.list_create_url = reverse('enquiries:enquiry-list-create')

    # 1. Successful public enquiry submission
    @patch('enquiries.views.send_enquiry_notification_email')
    def test_01_successful_public_enquiry_submission(self, mock_send_email):
        response = self.client.post(self.list_create_url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Enquiry.objects.count(), 1)
        enquiry = Enquiry.objects.first()
        self.assertEqual(enquiry.full_name, "Dr. Sarah Jenkins")
        self.assertEqual(enquiry.company, "BioPharma Innovations Ltd")
        self.assertEqual(enquiry.corporate_email, "sarah.jenkins@biopharmainnovations.com")
        self.assertEqual(enquiry.status, "new")
        self.assertTrue(mock_send_email.called)
        self.assertEqual(response.data["full_name"], "Dr. Sarah Jenkins")
        self.assertEqual(response.data["status"], "new")

    # 2. Missing full_name
    def test_02_missing_full_name(self):
        payload = self.valid_payload.copy()
        del payload["full_name"]
        response = self.client.post(self.list_create_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("full_name", response.data)

    # 3. Missing project_scope
    def test_03_missing_project_scope(self):
        payload = self.valid_payload.copy()
        del payload["project_scope"]
        response = self.client.post(self.list_create_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("project_scope", response.data)

    # 4. Invalid email
    def test_04_invalid_email(self):
        payload = self.valid_payload.copy()
        payload["corporate_email"] = "not-a-valid-email"
        response = self.client.post(self.list_create_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("corporate_email", response.data)

    # 5. Blank full_name
    def test_05_blank_full_name(self):
        payload = self.valid_payload.copy()
        payload["full_name"] = "   "
        response = self.client.post(self.list_create_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("full_name", response.data)

    # 6. Blank project_scope
    def test_06_blank_project_scope(self):
        payload = self.valid_payload.copy()
        payload["project_scope"] = "   "
        response = self.client.post(self.list_create_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("project_scope", response.data)

    # 7. Public user cannot GET enquiries
    def test_07_public_user_cannot_get_enquiries(self):
        # Unauthenticated request
        response = self.client.get(self.list_create_url)
        self.assertIn(response.status_code, [status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN])

        # Authenticated as non-staff user
        self.client.force_authenticate(user=self.regular_user)
        response = self.client.get(self.list_create_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # 8. Staff user can GET enquiries
    def test_08_staff_user_can_get_enquiries(self):
        Enquiry.objects.create(
            full_name="Client A",
            corporate_email="client.a@example.com",
            project_scope="Scope A"
        )
        Enquiry.objects.create(
            full_name="Client B",
            corporate_email="client.b@example.com",
            project_scope="Scope B"
        )

        self.client.force_authenticate(user=self.staff_user)
        response = self.client.get(self.list_create_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    # 9. Staff user can GET a single enquiry
    def test_09_staff_user_can_get_single_enquiry(self):
        enquiry = Enquiry.objects.create(
            full_name="Client X",
            company="Pharma X",
            corporate_email="client.x@pharmax.com",
            phone="+1 555 0199",
            discipline="Validation",
            project_scope="Facility qualification and cleaning validation"
        )
        detail_url = reverse('enquiries:enquiry-detail', kwargs={'pk': enquiry.pk})

        # Unauthenticated check
        response = self.client.get(detail_url)
        self.assertIn(response.status_code, [status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN])

        # Staff access
        self.client.force_authenticate(user=self.staff_user)
        response = self.client.get(detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["full_name"], "Client X")
        self.assertEqual(response.data["company"], "Pharma X")

    # 10. Staff user can update status
    def test_10_staff_user_can_update_status(self):
        enquiry = Enquiry.objects.create(
            full_name="Client Y",
            corporate_email="client.y@example.com",
            project_scope="Scope Y",
            status="new"
        )
        detail_url = reverse('enquiries:enquiry-detail', kwargs={'pk': enquiry.pk})

        self.client.force_authenticate(user=self.staff_user)
        response = self.client.patch(detail_url, {"status": "contacted"}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.status, "contacted")
        self.assertEqual(response.data["status"], "contacted")

    # 11. Staff user cannot update fields other than status
    def test_11_staff_user_cannot_update_fields_other_than_status(self):
        enquiry = Enquiry.objects.create(
            full_name="Original Name",
            corporate_email="original@example.com",
            project_scope="Original Scope",
            company="Original Co",
            status="new"
        )
        detail_url = reverse('enquiries:enquiry-detail', kwargs={'pk': enquiry.pk})

        self.client.force_authenticate(user=self.staff_user)
        payload = {
            "status": "closed",
            "full_name": "Tampered Name",
            "corporate_email": "tampered@example.com",
            "project_scope": "Tampered Scope",
            "company": "Tampered Co"
        }
        response = self.client.patch(detail_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.status, "closed")
        self.assertEqual(enquiry.full_name, "Original Name")
        self.assertEqual(enquiry.corporate_email, "original@example.com")
        self.assertEqual(enquiry.project_scope, "Original Scope")
        self.assertEqual(enquiry.company, "Original Co")

    # 12. Invalid status is rejected
    def test_12_invalid_status_is_rejected(self):
        enquiry = Enquiry.objects.create(
            full_name="Client Z",
            corporate_email="client.z@example.com",
            project_scope="Scope Z",
            status="new"
        )
        detail_url = reverse('enquiries:enquiry-detail', kwargs={'pk': enquiry.pk})

        self.client.force_authenticate(user=self.staff_user)
        response = self.client.patch(detail_url, {"status": "invalid_status_value"}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("status", response.data)
        enquiry.refresh_from_db()
        self.assertEqual(enquiry.status, "new")

    # 13. Honeypot submission is rejected
    def test_13_honeypot_submission_is_rejected(self):
        payload = self.valid_payload.copy()
        payload["website"] = "http://spam-link.com"
        response = self.client.post(self.list_create_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Enquiry.objects.count(), 0)

    # 14. Email failure does not prevent enquiry creation
    @patch('enquiries.emails.send_mail', side_effect=Exception("SMTP Connection Timeout"))
    def test_14_email_failure_does_not_prevent_enquiry_creation(self, mock_send_mail):
        response = self.client.post(self.list_create_url, self.valid_payload, format='json')
        # Submissions should still succeed with 201 Created even if email fails
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Enquiry.objects.count(), 1)
        enquiry = Enquiry.objects.first()
        self.assertEqual(enquiry.full_name, "Dr. Sarah Jenkins")

    # 15. Rate limiting is applied to POST requests
    @override_settings(
        RATELIMIT_ENABLE=True,
        CACHES={
            'default': {
                'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
                'LOCATION': 'ratelimit-test-cache',
            }
        }
    )
    @patch('enquiries.views.send_enquiry_notification_email')
    def test_15_rate_limiting_is_applied_to_post_requests(self, mock_send_email):
        cache.clear()
        client_ip = "198.51.100.42"

        # Submit 5 allowed requests within the 1-minute window
        for i in range(5):
            payload = self.valid_payload.copy()
            payload["full_name"] = f"Client {i}"
            res = self.client.post(
                self.list_create_url,
                payload,
                format='json',
                REMOTE_ADDR=client_ip
            )
            self.assertEqual(res.status_code, status.HTTP_201_CREATED)

        # The 6th request from the same IP within the same minute should be blocked
        sixth_payload = self.valid_payload.copy()
        sixth_payload["full_name"] = "Blocked Client"
        res_blocked = self.client.post(
            self.list_create_url,
            sixth_payload,
            format='json',
            REMOTE_ADDR=client_ip
        )
        self.assertEqual(res_blocked.status_code, status.HTTP_429_TOO_MANY_REQUESTS)
