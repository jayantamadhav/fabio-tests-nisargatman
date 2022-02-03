from .models import CatProduct


async def preload_static_data():
    static_data = [
        { "type": "bank-draft", "title": "Bank Draft", "position": 0 }, 
        { "type": "bill-of-lading", "title": "Bill of Lading", "position": 1 }, 
        { "type": "invoice", "title": "Invoice", "position": 2} , 
        { "type": "bank-draft-2", "title": "Bank Draft 2", "position": 3 }, 
        { "type": "bill-of-lading-2", "title": "Bill of Lading 2", "position": 4 }
    ]

    for d in static_data:
        await CatProduct.create(
            product_type=d["type"],
            product_title=d["title"],
            position=d["position"],
        )
    return

async def list_data():
    return await CatProduct.all().order_by('-id')