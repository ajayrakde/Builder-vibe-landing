import graphene
from graphene_django import DjangoObjectType
from catalog.models import (
    Category,
    Order,
    Product,
    Favorite,
    Cart,
    CartItem,
    PaymentGateway,
    ShiprocketConfig,
    BlogConfig,
    GoogleMapConfig,
)
from django.db import models
import graphql_jwt
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


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
        fields = (
            "id",
            "products",
            "total_price",
            "created_at",
            "user",
            "payment_gateway",
            "shiprocket_shipment_id",
        )


class PaymentGatewayType(DjangoObjectType):
    class Meta:
        model = PaymentGateway
        fields = ("id", "provider", "active")


class TrackingInfo(graphene.ObjectType):
    status = graphene.String()
    eta = graphene.String()
    location = graphene.String()


class ShiprocketConfigType(DjangoObjectType):
    class Meta:
        model = ShiprocketConfig
        fields = ("id", "email", "token")


class BlogConfigType(DjangoObjectType):
    class Meta:
        model = BlogConfig
        fields = ("id", "api_url", "api_token")


class GoogleMapConfigType(DjangoObjectType):
    class Meta:
        model = GoogleMapConfig
        fields = ("id", "api_key")


class CartItemType(DjangoObjectType):
    class Meta:
        model = CartItem
        fields = ("id", "product", "quantity")


class CartType(DjangoObjectType):
    class Meta:
        model = Cart
        fields = ("id", "items", "active")


class FavoriteType(DjangoObjectType):
    class Meta:
        model = Favorite
        fields = ("id", "product", "created_at")


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
    payment_gateways = graphene.List(PaymentGatewayType, description="Payment gateways")
    shiprocket_config = graphene.Field(ShiprocketConfigType, description="Shiprocket settings")
    blog_config = graphene.Field(BlogConfigType, description="Strapi settings")
    google_map_config = graphene.Field(GoogleMapConfigType, description="Google Map settings")
    track_order = graphene.Field(TrackingInfo, order_id=graphene.ID(required=True), description="Track order status")
    favorites = graphene.List(FavoriteType, description="User favorite products")
    cart = graphene.Field(CartType, description="Current cart")
    most_bought_products = graphene.List(ProductType, description="Most purchased products for user")

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

    def resolve_payment_gateways(root, info):
        return PaymentGateway.objects.all()

    def resolve_shiprocket_config(root, info):
        return ShiprocketConfig.objects.first()

    def resolve_blog_config(root, info):
        return BlogConfig.objects.first()

    def resolve_google_map_config(root, info):
        return GoogleMapConfig.objects.first()

    def resolve_track_order(root, info, order_id):
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return None
        # In a real implementation, call Shiprocket API using order.shiprocket_shipment_id
        # and credentials stored in ShiprocketConfig. This sample returns placeholder data.
        return {
            "status": "Processing",
            "eta": "N/A",
            "location": "Warehouse",
        }

    def resolve_favorites(root, info):
        user = info.context.user
        if user.is_anonymous:
            return Favorite.objects.none()
        return Favorite.objects.filter(user=user)

    def resolve_cart(root, info):
        user = info.context.user
        if user.is_anonymous:
            return None
        cart, _created = Cart.objects.get_or_create(user=user, active=True)
        return cart

    def resolve_most_bought_products(root, info):
        user = info.context.user
        if user.is_anonymous:
            return Product.objects.none()
        product_counts = (
            Order.objects.filter(user=user)
            .values("products")
            .annotate(count=models.Count("products"))
            .order_by("-count")
        )
        product_ids = [pc["products"] for pc in product_counts]
        return Product.objects.filter(id__in=product_ids)


class FavoriteProduct(graphene.Mutation):
    favorite = graphene.Field(FavoriteType)

    class Arguments:
        product_id = graphene.ID(required=True)

    def mutate(root, info, product_id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Authentication required")
        product = Product.objects.get(id=product_id)
        favorite, _ = Favorite.objects.get_or_create(user=user, product=product)
        return FavoriteProduct(favorite=favorite)


class UnfavoriteProduct(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        product_id = graphene.ID(required=True)

    def mutate(root, info, product_id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Authentication required")
        Favorite.objects.filter(user=user, product_id=product_id).delete()
        return UnfavoriteProduct(ok=True)


class AddToCart(graphene.Mutation):
    cart = graphene.Field(CartType)

    class Arguments:
        product_id = graphene.ID(required=True)
        quantity = graphene.Int(required=False)

    def mutate(root, info, product_id, quantity=1):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Authentication required")
        cart, _ = Cart.objects.get_or_create(user=user, active=True)
        item, created = CartItem.objects.get_or_create(cart=cart, product_id=product_id)
        if not created:
            item.quantity += quantity
        else:
            item.quantity = quantity
        item.save()
        return AddToCart(cart=cart)


class UpdateCartItem(graphene.Mutation):
    cart = graphene.Field(CartType)

    class Arguments:
        item_id = graphene.ID(required=True)
        quantity = graphene.Int(required=True)

    def mutate(root, info, item_id, quantity):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Authentication required")
        item = CartItem.objects.get(id=item_id, cart__user=user, cart__active=True)
        item.quantity = quantity
        item.save()
        return UpdateCartItem(cart=item.cart)


class RemoveCartItem(graphene.Mutation):
    cart = graphene.Field(CartType)

    class Arguments:
        item_id = graphene.ID(required=True)

    def mutate(root, info, item_id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Authentication required")
        item = CartItem.objects.get(id=item_id, cart__user=user, cart__active=True)
        cart = item.cart
        item.delete()
        return RemoveCartItem(cart=cart)


class CreateOrder(graphene.Mutation):
    order = graphene.Field(OrderType)

    class Arguments:
        payment_gateway_id = graphene.ID(required=False)

    def mutate(root, info, payment_gateway_id=None):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Authentication required")
        cart, _ = Cart.objects.get_or_create(user=user, active=True)
        products = [item.product for item in cart.items.all()]
        total_price = sum(item.product.price * item.quantity for item in cart.items.all())
        order = Order.objects.create(total_price=total_price, user=user)
        if payment_gateway_id:
            gateway = PaymentGateway.objects.get(id=payment_gateway_id)
            order.payment_gateway = gateway
        order.save()
        order.products.set(products)
        cart.active = False
        cart.save()
        return CreateOrder(order=order)


class RegisterUser(graphene.Mutation):
    user = graphene.Field(lambda: graphene.String)

    class Arguments:
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(root, info, username, email, password):
        user_model = get_user_model()
        if user_model.objects.filter(username=username).exists():
            raise Exception("Username already exists")
        user = user_model.objects.create_user(
            username=username, email=email, password=password
        )
        return RegisterUser(user=user.username)


class Mutation(graphene.ObjectType):
    favorite_product = FavoriteProduct.Field()
    unfavorite_product = UnfavoriteProduct.Field()
    add_to_cart = AddToCart.Field()
    update_cart_item = UpdateCartItem.Field()
    remove_cart_item = RemoveCartItem.Field()
    create_order = CreateOrder.Field()
    register_user = RegisterUser.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
