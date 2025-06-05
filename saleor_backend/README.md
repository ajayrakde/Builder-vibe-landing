# Sample GraphQL Backend

This folder contains a minimal Django project exposing a GraphQL API and admin interface.
It mimics a few Saleor endpoints for local testing. For full functionality, use a real Saleor instance instead.
It uses `graphene-django` and `django-graphql-jwt` to expose a few queries and mutations:

* `hello` – returns a greeting string
* `products` – list products with optional filtering by type, age or search term
* `categories` – list all categories
* `orders` – list existing orders
* `productFilters` – list all available product types, age groups and ingredients
* `favorites` – current user's favourite products
* `cart` – current user's active cart
* `paymentGateways` – configured payment providers
* `createOrder` – create a new order from the user's cart
* `addToCart`, `updateCartItem`, `removeCartItem` – manage cart contents
* `favoriteProduct`, `unfavoriteProduct` – mark or unmark a product as favourite
* `registerUser` – create a new user account
* `tokenAuth` – obtain a JWT token for login
* `verifyToken` – validate a JWT token
* `refreshToken` – refresh an existing token

## Setup

1. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
2. Apply migrations (uses SQLite by default):
   ```bash
   python manage.py migrate
   ```
3. Create an admin user:
   ```bash
   python manage.py createsuperuser
   ```
4. Run the development server:
   ```bash
   python manage.py runserver
   ```

Visit `http://localhost:8000/admin/` to log in and manage the catalogue,
payment gateways and shipping settings. Under **Payment Gateways** you can
create entries for Stripe, Razorpay, PhonePe, Paytm or Cashfree and mark one as
active. The **Shiprocket Config** section lets you store the email/token used
to communicate with Shiprocket's API.

GraphQL queries can be executed at `http://localhost:8000/graphql/`.

## Community Backend (Strapi)

This repository also expects a Strapi instance to power community features such as posts and comments. You can quickly start a local Strapi server with Docker:

```bash
docker run -p 1337:1337 strapi/strapi
```

The admin panel will be available at `http://localhost:1337/admin/` on first run. Configure the frontend to call this API via an environment variable, e.g. `VITE_STRAPI_URL`.
