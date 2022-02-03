from tortoise.models import Model
from tortoise import fields

class CatProduct(Model):
    id              = fields.IntField(pk=True)
    product_type    = fields.CharField(max_length=256)
    product_title   = fields.CharField(max_length=256)
    position        = fields.IntField()

    class Meta:
        table='cat_bank'
    
    def __str__(self):
        return f"CatProduct {self.id} {self.product_title}"