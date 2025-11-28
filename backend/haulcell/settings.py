# /backend/haulcell/settings.py
import os
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", "dev-secret")
DEBUG = os.environ.get("DEBUG", "1") == "1"
ALLOWED_HOSTS = ["*"]
INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.staticfiles",
    "rest_framework",
    "api"
]
MIDDLEWARE = [
    "django.middleware.common.CommonMiddleware",
]
ROOT_URLCONF = "haulcell.urls"
TEMPLATES = []
WSGI_APPLICATION = "haulcell.wsgi.application"
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3"
    }
}
STATIC_URL = "/static/"