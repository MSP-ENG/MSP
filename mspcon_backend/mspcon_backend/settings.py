"""
Django settings for mspcon_backend project.

Generated for MSP Engineering Consultant.
Configured for production-ready deployment and local development.
"""

from pathlib import Path
import os
from dotenv import load_dotenv
import dj_database_url


# ============================================================
# BASE DIRECTORY
# ============================================================

BASE_DIR = Path(__file__).resolve().parent.parent


# ============================================================
# ENVIRONMENT VARIABLES
# ============================================================

# Load .env file for local development
load_dotenv(BASE_DIR / '.env')


# ============================================================
# SECURITY
# ============================================================

SECRET_KEY = os.getenv(
    'SECRET_KEY',
    'django-insecure-mspcon-dev-key-change-in-production'
)


# Local development:
# DEBUG=True
#
# Production/Vercel:
# DEBUG=False in Vercel Environment Variables

DEBUG = os.getenv(
    'DEBUG',
    'True'
).lower() in (
    'true',
    '1',
    't',
    'yes'
)


# ============================================================
# ALLOWED HOSTS
# ============================================================

ALLOWED_HOSTS = [
    host.strip()
    for host in os.getenv(
        'ALLOWED_HOSTS',
        '127.0.0.1,localhost'
    ).split(',')
    if host.strip()
]


# ============================================================
# APPLICATION DEFINITION
# ============================================================

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third-party apps
    'rest_framework',
    'corsheaders',

    # Local apps
    'enquiries.apps.EnquiriesConfig',
]


# ============================================================
# MIDDLEWARE
# ============================================================

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',

    'django.middleware.common.CommonMiddleware',

    'django.middleware.csrf.CsrfViewMiddleware',

    'django.contrib.auth.middleware.AuthenticationMiddleware',

    'django.contrib.messages.middleware.MessageMiddleware',

    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# ============================================================
# URL CONFIGURATION
# ============================================================

ROOT_URLCONF = 'mspcon_backend.urls'


# ============================================================
# TEMPLATES
# ============================================================

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',

        'DIRS': [],

        'APP_DIRS': True,

        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',

                'django.template.context_processors.request',

                'django.contrib.auth.context_processors.auth',

                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# ============================================================
# WSGI / ASGI
# ============================================================

WSGI_APPLICATION = 'mspcon_backend.wsgi.application'

ASGI_APPLICATION = 'mspcon_backend.asgi.application'


# ============================================================
# DATABASE
# ============================================================

# Production/Vercel:
# Uses Neon PostgreSQL through DATABASE_URL.
#
# Local development:
# If DATABASE_URL is not present, uses SQLite.

DATABASE_URL = os.getenv('DATABASE_URL')


if DATABASE_URL:

    # --------------------------------------------------------
    # PRODUCTION: NEON POSTGRESQL
    # --------------------------------------------------------

    DATABASES = {
        'default': dj_database_url.parse(
            DATABASE_URL,
            conn_max_age=600,
            ssl_require=True,
        )
    }


else:

    # --------------------------------------------------------
    # LOCAL DEVELOPMENT: SQLITE
    # --------------------------------------------------------

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',

            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }


# ============================================================
# PASSWORD VALIDATION
# ============================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME':
        'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },

    {
        'NAME':
        'django.contrib.auth.password_validation.MinimumLengthValidator',
    },

    {
        'NAME':
        'django.contrib.auth.password_validation.CommonPasswordValidator',
    },

    {
        'NAME':
        'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# ============================================================
# INTERNATIONALIZATION
# ============================================================

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# ============================================================
# STATIC FILES
# ============================================================

STATIC_URL = 'static/'

STATIC_ROOT = BASE_DIR / 'staticfiles'


# ============================================================
# DEFAULT PRIMARY KEY FIELD
# ============================================================

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# ============================================================
# DJANGO REST FRAMEWORK
# ============================================================

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',

        'rest_framework.renderers.BrowsableAPIRenderer',
    ],

    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',

        'rest_framework.parsers.FormParser',

        'rest_framework.parsers.MultiPartParser',
    ],

    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',

        'rest_framework.authentication.BasicAuthentication',
    ],
}


# ============================================================
# CORS CONFIGURATION
# ============================================================

CORS_ALLOW_ALL_ORIGINS = False

CORS_ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.getenv(
        'CORS_ALLOWED_ORIGINS',
        'http://localhost:5173,http://localhost:3000'
    ).split(',')
    if origin.strip()
]


# ============================================================
# EMAIL / SMTP CONFIGURATION
# ============================================================

EMAIL_BACKEND = (
    'django.core.mail.backends.smtp.EmailBackend'
)

EMAIL_HOST = os.getenv(
    'EMAIL_HOST',
    'smtp.gmail.com'
)

EMAIL_PORT = int(
    os.getenv(
        'EMAIL_PORT',
        '587'
    )
)

EMAIL_USE_TLS = os.getenv(
    'EMAIL_USE_TLS',
    'True'
).lower() in (
    'true',
    '1',
    't',
    'yes'
)

EMAIL_HOST_USER = os.getenv(
    'EMAIL_HOST_USER',
    ''
)

EMAIL_HOST_PASSWORD = os.getenv(
    'EMAIL_HOST_PASSWORD',
    ''
)

DEFAULT_FROM_EMAIL = os.getenv(
    'DEFAULT_FROM_EMAIL',
    'MSP Engineering Consultant <no-reply@mspcon.in>'
)

ENQUIRY_NOTIFICATION_EMAIL = os.getenv(
    'ENQUIRY_NOTIFICATION_EMAIL',
    'marketing@mspcon.in'
)


# ============================================================
# RATE LIMITING
# ============================================================

RATELIMIT_ENABLE = os.getenv(
    'RATELIMIT_ENABLE',
    'True'
).lower() in (
    'true',
    '1',
    't',
    'yes'
)


# ============================================================
# LOGGING
# ============================================================

LOGGING = {
    'version': 1,

    'disable_existing_loggers': False,

    'formatters': {
        'standard': {
            'format':
            '[{asctime}] {levelname} [{name}:{lineno}] {message}',

            'style': '{',
        },
    },

    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',

            'formatter': 'standard',
        },
    },

    'loggers': {
        'django': {
            'handlers': ['console'],

            'level': 'INFO',
        },

        'enquiries': {
            'handlers': ['console'],

            'level': 'INFO',

            'propagate': False,
        },
    },
}


# ============================================================
# PRODUCTION SECURITY
# ============================================================

if not DEBUG:

    # Redirect HTTP to HTTPS
    SECURE_SSL_REDIRECT = True

    # Secure cookies
    SESSION_COOKIE_SECURE = True

    CSRF_COOKIE_SECURE = True

    # HSTS
    SECURE_HSTS_SECONDS = 31536000

    SECURE_HSTS_INCLUDE_SUBDOMAINS = True

    SECURE_HSTS_PRELOAD = True

    # Security headers
    SECURE_CONTENT_TYPE_NOSNIFF = True

    X_FRAME_OPTIONS = 'DENY'