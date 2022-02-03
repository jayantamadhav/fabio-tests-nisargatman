import os
from typing import Set
from pydantic import BaseSettings
from decouple import config

class Settings(BaseSettings):
    APP_NAME: str = "CatBank API Service"
    APP_VERSION: str = "1.0.1"
    DATABASE_URL: str = f"{config('DB_DIALECT')}://{config('DB_USER')}:{config('DB_PASSWORD')}@{config('DB_HOST')}/{config('DB_NAME')}"

settings = Settings()

TORTOISE_ORM_CONFIG = {
    # "connections": {"default": os.getenv('DATABASE_URL')},
    "connections": {
        "default": {
            "engine": 'tortoise.backends.asyncpg',
            "credentials": {
                "host": config('DB_HOST'),
                "port": config('DB_PORT'),
                "user": config('DB_USER'),
                "password": config('DB_PASSWORD'),
                "database": config('DB_NAME'),
            },
        },
    },
    "apps": {
        "models": {
            "models": [
                "aerich.models",
                "service.core.models",
            ],
            "default_connection": "default",
        },
    },
    'use_tz': True,
    'timezone': 'Asia/Kolkata'
}