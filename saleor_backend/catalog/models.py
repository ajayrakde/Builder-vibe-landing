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


class Order(models.Model):
    products = models.ManyToManyField(Product)
    total_price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:  # pragma: no cover - simple string repr
        return f"Order {self.id}"
