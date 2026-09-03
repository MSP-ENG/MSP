# MSP Engineering Consultant - Backend API (`mspcon_backend`)

A production-ready Django & Django REST Framework (DRF) backend service powering the **Project Enquiry Form** for the **MSP Engineering Consultant** corporate platform.

Built for clean architecture, modularity, enterprise security, dynamic database switching (SQLite for local development / PostgreSQL for production), rate limiting, spam protection, and automated email notifications.

---

## 1. Architecture & Technology Stack

* **Language**: Python 3.11+ (Tested on Python 3.13)
* **Framework**: Django 5.1+ & Django REST Framework 3.15+
* **Database**:
  * **Development**: SQLite (`db.sqlite3`)
  * **Production**: PostgreSQL (via `psycopg` 3.x)
* **Security & Network**:
  * `django-cors-headers` (Configurable domain whitelisting)
  * `django-ratelimit` (IP-based throttling)
  * Honeypot anti-spam defense
* **Notifications**: Django SMTP `send_mail` with non-blocking error handling
* **Configuration**: `python-dotenv`

---

## 2. Project Directory Structure

```text
mspcon_backend/
│
├── manage.py                     # Django management utility
├── requirements.txt              # Pinned Python package dependencies
├── .env.example                  # Environment configuration template
├── .gitignore                    # Git ignore file for secrets and binaries
├── README.md                     # Comprehensive backend documentation
│
├── mspcon_backend/               # Core project configuration
│   ├── __init__.py
│   ├── settings.py               # Django & DRF settings, DB switcher, CORS, security
│   ├── urls.py                   # Root URL router (/admin/ and /api/enquiries/)
│   ├── asgi.py                   # ASGI entrypoint
│   └── wsgi.py                   # WSGI entrypoint for web servers (Gunicorn)
│
└── enquiries/                    # Project Enquiry Application
    ├── __init__.py
    ├── admin.py                  # Django Admin customization & filters
    ├── apps.py                   # App configuration
    ├── models.py                 # Enquiry data model
    ├── serializers.py            # DRF serializers (Public submit, staff detail, status update)
    ├── views.py                  # API views (Rate-limited POST, staff GET & PATCH)
    ├── emails.py                 # Robust, non-blocking SMTP notification helper
    ├── urls.py                   # Endpoint routing for /api/enquiries/
    ├── tests.py                  # 15 automated test suites covering all workflows
    └── migrations/               # Database schema migrations
        ├── 0001_initial.py
        └── __init__.py
```

---

## 3. Installation & Local Setup

### 3.1. Clone and Navigate
```bash
cd mspcon_backend
```

### 3.2. Create and Activate Virtual Environment

**On Windows (PowerShell / Command Prompt):**
```powershell
python -m venv venv
venv\Scripts\activate
```

**On Windows (Git Bash / MinGW) or Linux / macOS:**
```bash
python3 -m venv venv
source venv/Scripts/activate
```

### 3.3. Install Dependencies
```bash
pip install -r requirements.txt
```

---

## 4. Environment Variables Configuration

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

### 4.1. Local Development (`.env`)
To run locally without setting up PostgreSQL, configure `DB_ENGINE=sqlite`:

```env
SECRET_KEY=django-insecure-mspcon-dev-key-change-in-production
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

# Local SQLite Database
DB_ENGINE=sqlite

# CORS (Allow local Vite/React dev servers)
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# Email Notification Settings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
DEFAULT_FROM_EMAIL=MSP Engineering Consultant <no-reply@mspcon.in>
ENQUIRY_NOTIFICATION_EMAIL=marketing@mspcon.in

# Rate Limiting
RATELIMIT_ENABLE=True
```

### 4.2. Production Deployment (`.env`)
For production, set `DEBUG=False` and provide PostgreSQL credentials:

```env
SECRET_KEY=your-super-strong-random-django-secret-key
DEBUG=False
ALLOWED_HOSTS=api.mspcon.in,mspcon.in,127.0.0.1

# Production PostgreSQL Database
DB_ENGINE=postgres
DB_NAME=mspcon_db
DB_USER=mspcon_user
DB_PASSWORD=your_secure_postgres_password
DB_HOST=127.0.0.1
DB_PORT=5432

# Production CORS
CORS_ALLOWED_ORIGINS=https://mspcon.in,https://www.mspcon.in

# Production SMTP
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=apikey
EMAIL_HOST_PASSWORD=your_smtp_api_key
DEFAULT_FROM_EMAIL=MSP Engineering Consultant <no-reply@mspcon.in>
ENQUIRY_NOTIFICATION_EMAIL=marketing@mspcon.in

RATELIMIT_ENABLE=True
```

---

## 5. Database Migrations & Superuser

### 5.1. Apply Database Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5.2. Create an Administrator / Staff Account
```bash
python manage.py createsuperuser
```
Follow the interactive prompt to set a username, email, and password.

---

## 6. Running the Development Server

Start the local server:
```bash
python manage.py runserver
```
The backend will be available at: `http://127.0.0.1:8000/`

---

## 7. Django Admin Portal

Access the administration dashboard at:
```text
http://127.0.0.1:8000/admin/
```

Features provided in Django Admin:
* **List View**: Displays Full Name, Company, Corporate Email, Status (editable in list), and Submission Date.
* **Filters**: Filter by Status (`new`, `contacted`, `closed`) and Creation Date.
* **Search**: Search across Name, Company, Email, and Phone number.
* **Read-only Audit**: Creation Timestamp and Client IP Address are protected from manual modification.
* **Ordering**: Newest submissions always appear at the top.

---

## 8. API Endpoints Reference

### Base URL
* Local: `http://127.0.0.1:8000`
* Production: `https://api.mspcon.in` (or your production domain)

---

### 8.1. Submit Project Enquiry (Public)
* **Endpoint**: `POST /api/enquiries/`
* **Authentication**: None (Public)
* **Rate Limit**: 5 submissions per minute per IP address (`HTTP 429` on excess)
* **Spam Protection**: Invisible Honeypot field (`website`). If populated, returns `HTTP 400`.

#### Request Body (`application/json`)
```json
{
  "full_name": "John Smith",
  "company": "ABC Pharma Ltd",
  "corporate_email": "john.smith@abcpharma.com",
  "phone": "+91 9876543210",
  "discipline": "HVAC & Cleanroom Engineering",
  "project_scope": "We require HVAC and cleanroom engineering for a new sterile injectable pharmaceutical manufacturing facility.",
  "website": ""
}
```

#### Field Specifications:
| Field | Type | Required | Notes |
| :--- | :--- | :--- | :--- |
| `full_name` | string | **Yes** | Client full name (whitespace trimmed) |
| `company` | string | No | Organization name (default `""`) |
| `corporate_email` | email | **Yes** | Valid business email (lowercased) |
| `phone` | string | No | Contact number with country code |
| `discipline` | string | No | Target discipline (e.g. *Process Engineering*, *Validation*) |
| `project_scope` | string | **Yes** | Project scope, facility specs, cleanroom grade, timeline |
| `website` | string | No | **Honeypot**. Must be blank `""` |

#### Successful Response (`HTTP 201 Created`):
```json
{
  "id": 1,
  "full_name": "John Smith",
  "company": "ABC Pharma Ltd",
  "corporate_email": "john.smith@abcpharma.com",
  "phone": "+91 9876543210",
  "discipline": "HVAC & Cleanroom Engineering",
  "project_scope": "We require HVAC and cleanroom engineering for a new sterile injectable pharmaceutical manufacturing facility.",
  "status": "new",
  "created_at": "2026-08-17T10:30:00.000000Z",
  "ip_address": "127.0.0.1"
}
```

#### Validation Error Response (`HTTP 400 Bad Request`):
```json
{
  "full_name": ["Full name is required."],
  "corporate_email": ["Enter a valid email address."]
}
```

#### Rate Limit Response (`HTTP 429 Too Many Requests`):
```json
{
  "detail": "Rate limit exceeded. Maximum 5 submissions per minute per IP address."
}
```

---

### 8.2. List All Enquiries (Staff Only)
* **Endpoint**: `GET /api/enquiries/`
* **Authentication**: Staff user session or Basic Auth (`is_staff = True`)
* **Response (`HTTP 200 OK`)**:
```json
[
  {
    "id": 1,
    "full_name": "John Smith",
    "company": "ABC Pharma Ltd",
    "corporate_email": "john.smith@abcpharma.com",
    "phone": "+91 9876543210",
    "discipline": "HVAC & Cleanroom Engineering",
    "project_scope": "We require HVAC and cleanroom engineering...",
    "status": "new",
    "created_at": "2026-08-17T10:30:00.000000Z",
    "ip_address": "127.0.0.1"
  }
]
```

---

### 8.3. Get Single Enquiry Details (Staff Only)
* **Endpoint**: `GET /api/enquiries/{id}/`
* **Authentication**: Staff user session or Basic Auth (`is_staff = True`)
* **Response (`HTTP 200 OK`)**: Single enquiry JSON object.
* **Response on missing ID**: `HTTP 404 Not Found`.

---

### 8.4. Update Enquiry Status (Staff Only)
* **Endpoint**: `PATCH /api/enquiries/{id}/`
* **Authentication**: Staff user session or Basic Auth (`is_staff = True`)
* **Description**: Allows updating **only** the `status` field (`new`, `contacted`, `closed`). All other fields are protected against modification.

#### Request Body (`application/json`)
```json
{
  "status": "contacted"
}
```

#### Successful Response (`HTTP 200 OK`):
```json
{
  "id": 1,
  "full_name": "John Smith",
  "company": "ABC Pharma Ltd",
  "corporate_email": "john.smith@abcpharma.com",
  "phone": "+91 9876543210",
  "discipline": "HVAC & Cleanroom Engineering",
  "project_scope": "We require HVAC and cleanroom engineering...",
  "status": "contacted",
  "created_at": "2026-08-17T10:30:00.000000Z",
  "ip_address": "127.0.0.1"
}
```

---

## 9. Frontend Integration Example (React / Vite)

Here is the exact code to connect your existing React / Vite MSP Engineering Consultant frontend form to this backend:

```javascript
/**
 * Submits the Project Enquiry Form to the backend API.
 * 
 * In development: uses 'http://127.0.0.1:8000/api/enquiries/'
 * In production:  uses 'https://YOUR-BACKEND-DOMAIN.com/api/enquiries/'
 */
async function submitProjectEnquiry(formData) {
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/enquiries/";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: formData.fullName,
        company: formData.company || "",
        corporate_email: formData.email,
        phone: formData.phone || "",
        discipline: formData.discipline || "",
        project_scope: formData.projectScope,
        website: "", // Honeypot spam defense field (must remain empty)
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Extract detailed validation message if available
      const errorMsg = data.detail || Object.values(data).flat().join(" ") || "Failed to submit enquiry";
      throw new Error(errorMsg);
    }

    return { success: true, data };
  } catch (error) {
    console.error("Enquiry Submission Error:", error);
    return { success: false, error: error.message };
  }
}
```

---

## 10. Automated Test Suite

The test suite in `enquiries/tests.py` verifies all 15 core behaviors and security boundaries:

1. `test_01_successful_public_enquiry_submission`: Validates creation of enquiry and mock email dispatch.
2. `test_02_missing_full_name`: Ensures `full_name` is mandatory.
3. `test_03_missing_project_scope`: Ensures `project_scope` is mandatory.
4. `test_04_invalid_email`: Rejects malformed email inputs.
5. `test_05_blank_full_name`: Rejects whitespace-only name strings.
6. `test_06_blank_project_scope`: Rejects whitespace-only scope strings.
7. `test_07_public_user_cannot_get_enquiries`: Verifies unauthenticated/regular users receive 401/403.
8. `test_08_staff_user_can_get_enquiries`: Verifies staff users can list enquiries.
9. `test_09_staff_user_can_get_single_enquiry`: Verifies staff users can view single enquiry details.
10. `test_10_staff_user_can_update_status`: Verifies staff can change status (`new` -> `contacted`).
11. `test_11_staff_user_cannot_update_fields_other_than_status`: Ensures other fields remain untampered.
12. `test_12_invalid_status_is_rejected`: Rejects unauthorized status choices.
13. `test_13_honeypot_submission_is_rejected`: Drops bot submissions with populated `website`.
14. `test_14_email_failure_does_not_prevent_enquiry_creation`: Ensures SMTP downtime does not drop leads.
15. `test_15_rate_limiting_is_applied_to_post_requests`: Confirms 429 response upon exceeding 5 req/min.

### Run the Tests
```bash
python manage.py test
```

---

## 11. Production Deployment Checklist

When deploying to production:

1. **Environment Variables**:
   * Set `DEBUG=False`.
   * Set a strong, randomly generated `SECRET_KEY`.
   * Set `ALLOWED_HOSTS` to your production domain(s).
   * Set `DB_ENGINE=postgres` and provide valid PostgreSQL credentials.
   * Whitelist your frontend domain in `CORS_ALLOWED_ORIGINS` (e.g. `https://mspcon.in,https://www.mspcon.in`).
2. **Collect Static Files**:
   ```bash
   python manage.py collectstatic --noinput
   ```
3. **Database Migration**:
   ```bash
   python manage.py migrate
   ```
4. **WSGI Server**:
   Run with Gunicorn behind Nginx/Caddy:
   ```bash
   gunicorn mspcon_backend.wsgi:application --bind 0.0.0.0:8000 --workers 3
   ```
5. **HTTPS & Security**:
   * With `DEBUG=False`, Django automatically activates HSTS, SSL redirect, and secure cookies.
