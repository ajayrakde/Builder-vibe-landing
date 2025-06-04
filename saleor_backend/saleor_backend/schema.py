import graphene


class Product(graphene.ObjectType):
    """Simple product type used for mocking a product catalogue."""

    id = graphene.ID(required=True)
    title = graphene.String(required=True)
    price = graphene.Float(required=True)


def get_mock_products():
    """Return a list of mock products."""

    return [
        {"id": "prod-1", "title": "Sample Product 1", "price": 9.99},
        {"id": "prod-2", "title": "Sample Product 2", "price": 19.99},
    ]


class Query(graphene.ObjectType):
    hello = graphene.String(description="A simple greeting")
    products = graphene.List(Product, description="List of sample products")

    def resolve_hello(root, info):
        return "Hello from Saleor sample API!"

    def resolve_products(root, info):
        return get_mock_products()


schema = graphene.Schema(query=Query)
