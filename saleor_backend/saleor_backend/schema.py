import graphene
from graphene_django import DjangoObjectType
from catalog.models import Category, Order, Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ("id", "title", "price", "category")


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name")


class OrderType(DjangoObjectType):
    class Meta:
        model = Order
        fields = ("id", "products", "total_price", "created_at")


class Query(graphene.ObjectType):
    hello = graphene.String(description="A simple greeting")
    products = graphene.List(ProductType, description="List of products")
    categories = graphene.List(CategoryType, description="List of categories")
    orders = graphene.List(OrderType, description="List of orders")

    def resolve_hello(root, info):
        return "Hello from Saleor sample API!"

    def resolve_products(root, info):
        return Product.objects.all()

    def resolve_categories(root, info):
        return Category.objects.all()

    def resolve_orders(root, info):
        return Order.objects.all()


class CreateOrder(graphene.Mutation):
    order = graphene.Field(OrderType)

    class Arguments:
        product_ids = graphene.List(graphene.ID, required=True)

    def mutate(root, info, product_ids):
        products = Product.objects.filter(id__in=product_ids)
        total_price = sum(p.price for p in products)
        order = Order.objects.create(total_price=total_price)
        order.products.set(products)
        return CreateOrder(order=order)


class Mutation(graphene.ObjectType):
    create_order = CreateOrder.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
