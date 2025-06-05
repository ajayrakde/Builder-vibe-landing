from django.contrib import admin
from .models import (
    Category,
    Order,
    Product,
    PaymentGateway,
    ShiprocketConfig,
    BlogConfig,
    GoogleMapConfig,
)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "category")


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "created_at", "total_price")
    filter_horizontal = ("products",)


@admin.register(PaymentGateway)
class PaymentGatewayAdmin(admin.ModelAdmin):
    list_display = ("provider", "active")
    list_editable = ("active",)


@admin.register(ShiprocketConfig)
class ShiprocketConfigAdmin(admin.ModelAdmin):
    list_display = ("email", "token")


@admin.register(BlogConfig)
class BlogConfigAdmin(admin.ModelAdmin):
    list_display = ("api_url",)


@admin.register(GoogleMapConfig)
class GoogleMapConfigAdmin(admin.ModelAdmin):
    list_display = ("api_key",)
