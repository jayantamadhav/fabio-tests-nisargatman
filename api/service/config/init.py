from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from tortoise import Tortoise
from tortoise.contrib.fastapi import register_tortoise

from .config import settings
from service.core.controller import preload_static_data


SERVER_PREFIX = '/v1'


def register_views(app: FastAPI):
    from service.core.router import core

    app.include_router(core, prefix=SERVER_PREFIX, tags=['API Endpoint'])

def create_app() -> FastAPI:

    app = FastAPI(
        title=settings.APP_NAME, 
        version=settings.APP_VERSION,
        openapi_url = SERVER_PREFIX + '/openapi.json',
        docs_url = SERVER_PREFIX + '/docs',
        redoc_url = SERVER_PREFIX + '/redoc'
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    register_tortoise(
        app,
        db_url=settings.DATABASE_URL,
        modules={"models": ["aerich.models", "service.core.models"]},
        generate_schemas=True,
        add_exception_handlers=True,
    )
    Tortoise.init_models(['service.core.models', ], 'models') 

    register_views(app=app)

    # Preload the given JSON data in to database
    # preload_static_data()
    
    return app


