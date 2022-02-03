from fastapi import APIRouter

from service.core import controller
from service.config.utils import Response


core = APIRouter()



@core.get('/')
async def list_data():
    data = await controller.list_data()
    return Response(data, 200)

@core.get('/preload')
async def preload():
    await controller.preload_static_data()
    return Response({ "message" : "ok" }, 200)