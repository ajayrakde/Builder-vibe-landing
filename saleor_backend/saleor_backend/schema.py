import graphene
from graphene_django import DjangoObjectType
from catalog.models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ("id", "title", "price")


class Query(graphene.ObjectType):
    hello = graphene.String(description="A simple greeting")
    products = graphene.List(ProductType, description="List of products")

    def resolve_hello(root, info):
        return "Hello from Saleor sample API!"

    def resolve_products(root, info):
        return Product.objects.all()


schema = graphene.Schema(query=Query)
