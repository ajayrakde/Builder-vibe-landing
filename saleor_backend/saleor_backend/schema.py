import graphene
from graphene_django import DjangoObjectType
from catalog.models import Category, Order, Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = (
            "id",
            "title",
            "price",
            "category",
            "product_type",
            "age_group",
            "ingredients",
        )


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name")


class OrderType(DjangoObjectType):
    class Meta:
        model = Order
        fields = ("id", "products", "total_price", "created_at")


class ProductFilterOptions(graphene.ObjectType):
    types = graphene.List(graphene.String)
    ages = graphene.List(graphene.String)
    ingredients = graphene.List(graphene.String)


class Query(graphene.ObjectType):
    hello = graphene.String(description="A simple greeting")
    products = graphene.List(
        ProductType,
        description="List of products",
        type=graphene.String(required=False),
        age=graphene.String(required=False),
        search=graphene.String(required=False),
    )
    product_filters = graphene.Field(
        ProductFilterOptions, description="Available product filter options"
    )
    categories = graphene.List(CategoryType, description="List of categories")
    orders = graphene.List(OrderType, description="List of orders")

    def resolve_hello(root, info):
        return "Hello from Saleor sample API!"

    def resolve_products(root, info, type=None, age=None, search=None):
        qs = Product.objects.all()
        if type:
            qs = qs.filter(product_type__iexact=type)
        if age:
            qs = qs.filter(age_group__iexact=age)
        if search:
            qs = qs.filter(title__icontains=search)
        return qs

    def resolve_product_filters(root, info):
        return {
            "types": list(Product.objects.values_list("product_type", flat=True).distinct()),
            "ages": list(Product.objects.values_list("age_group", flat=True).distinct()),
            "ingredients": list(Product.objects.values_list("ingredients", flat=True).distinct()),
        }

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
