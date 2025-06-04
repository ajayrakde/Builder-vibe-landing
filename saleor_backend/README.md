# Saleor Sample Backend

This folder contains a minimal Django project exposing a GraphQL API and admin interface.
It uses `graphene-django` to define a simple schema with two queries:

* `hello` – returns a greeting string
* `products` – returns all `Product` records stored in the database

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
