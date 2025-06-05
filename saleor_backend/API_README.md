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

### `registerUser(username, email, password)`
Creates a new user account and returns the username. *Used in:* sign-up forms.

### `tokenAuth(username, password)`
Returns a JWT token for the authenticated user. *Used in:* login forms via a custom hook.

### `verifyToken(token)` and `refreshToken(token)`
Verify or refresh an existing JWT token. *Used in:* persisting logged-in sessions.

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

Example mutation to register a user:

```graphql
mutation {
  registerUser(username: "demo", email: "demo@example.com", password: "pass") {
    user
  }
}
```

Example mutation to obtain a token:

```graphql
mutation {
  tokenAuth(username: "demo", password: "pass") {
    token
  }
}
```

All operations can be executed at `http://localhost:8000/graphql/` once the backend server is running.
