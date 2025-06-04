# Saleor Sample Backend

This folder contains a minimal Django project exposing a GraphQL API similar to Saleor.
It uses `graphene-django` to define a simple schema with two queries:

* `hello` – returns a greeting string
* `products` – returns a list of sample products

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

3. Run the development server:

   ```bash
   python manage.py runserver
   ```

4. Visit `http://localhost:8000/graphql/` in your browser and execute the following query:

   ```graphql
   query {
     hello
   }
   ```

You should receive the response:

```json
{
  "data": {
    "hello": "Hello from Saleor sample API!"
  }
}
```

You can also fetch the list of sample products:

```graphql
query {
  products {
    id
    title
    price
  }
}
```

This demonstrates a very basic API that mimics part of Saleor's GraphQL stack.
