from django.conf import settings
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.FloatField()
    product_type = models.CharField(max_length=100, blank=True, null=True)
    age_group = models.CharField(max_length=100, blank=True, null=True)
    ingredients = models.TextField(blank=True, null=True)
    category = models.ForeignKey(
        Category,
        related_name="products",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return self.title


class PaymentGateway(models.Model):
    PROVIDER_CHOICES = [
        ("stripe", "Stripe"),
        ("razorpay", "Razorpay"),
        ("phonepe", "PhonePe"),
        ("paytm", "Paytm"),
        ("cashfree", "Cashfree"),
    ]

    provider = models.CharField(max_length=50, choices=PROVIDER_CHOICES, unique=True)
    api_key = models.CharField(max_length=255, blank=True, null=True)
    api_secret = models.CharField(max_length=255, blank=True, null=True)
    active = models.BooleanField(default=False)

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return self.provider


class ShiprocketConfig(models.Model):
    email = models.CharField(max_length=255)
    token = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return self.email


class Favorite(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="favorites",
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="favorited_by",
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "product")

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return f"{self.user} - {self.product}"


class Cart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="carts",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return f"Cart {self.id}"


class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return f"{self.product} x {self.quantity}"


class Order(models.Model):
    products = models.ManyToManyField(Product)
    total_price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="orders",
    )
    payment_gateway = models.ForeignKey(
        "PaymentGateway",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="orders",
    )
    shiprocket_shipment_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return f"Order {self.id}"
