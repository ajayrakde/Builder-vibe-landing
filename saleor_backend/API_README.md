# API Integration Guide

This document outlines the GraphQL API endpoints provided by the `saleor_backend` project and how they connect to the React front‑end.

## Queries

### `hello`
Returns a simple greeting string.
*Used in:* none – can be used to test connectivity.

### `products(type, age, search)`
Fetches products filtered by optional `type` or `age` arguments. A `search`
string performs a case-insensitive match on the title. Returned fields include
`id`, `title`, `price`, `category`, `productType`, `ageGroup` and
`ingredients`.
*Used in:* `Shop` page (`src/pages/Shop.tsx`) and product detail view
(`src/pages/ProductDetail.tsx`).

### `productFilters`
Returns lists of all available product types, age groups and ingredients. This
is useful for building filter UIs on the shop page.

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
