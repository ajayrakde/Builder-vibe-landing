# Sample GraphQL Backend

This folder contains a minimal Django project exposing a GraphQL API and admin interface.
It mimics a few Saleor endpoints for local testing. For full functionality, use a real Saleor instance instead.
It uses `graphene-django` to expose a few queries and a mutation:

* `hello` – returns a greeting string
* `products` – list products with optional filtering by type, age or search term
* `categories` – list all categories
* `orders` – list existing orders
* `productFilters` – list all available product types, age groups and ingredients
* `createOrder` – create a new order given product IDs

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

Visit `http://localhost:8000/admin/` to log in and manage `Product` entries.
GraphQL queries can be executed at `http://localhost:8000/graphql/`.
