# API Integration Guide

This document outlines the GraphQL API endpoints provided by the `saleor_backend` project and how they connect to the React front‑end.

## Queries

### `hello`
Returns a simple greeting string.
*Used in:* none – can be used to test connectivity.

### `products`
Fetches all products with their ID, title, price and category.
*Used in:* `Shop` page (`src/pages/Shop.tsx`) and product detail view (`src/pages/ProductDetail.tsx`).

### `categories`
Fetches all product categories.
*Used in:* potential category filters or navigation components.

### `orders`
Retrieves existing orders.
*Used in:* order history pages like `OrderDetails.tsx` or `TrackOrder.tsx`.

## Mutations

### `createOrder(productIds: [ID!]!)`
Creates an order using the provided list of product IDs. Returns the created order with its total price.
*Used in:* the checkout flow (`src/pages/Checkout.tsx`) when completing a purchase.

## Usage Examples

Example query to list products:

```graphql
query {
  products {
    id
    title
    price
    category {
      name
    }
  }
}
```

Example mutation to create an order:

```graphql
mutation {
  createOrder(productIds: [1, 2]) {
    order {
      id
      totalPrice
    }
  }
}
```

All operations can be executed at `http://localhost:8000/graphql/` once the backend server is running.
