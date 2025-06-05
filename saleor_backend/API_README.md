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

### `favorites`
Returns the currently authenticated user's favourite products.
*Used in:* the favourites view and ProductDetail heart icon.

### `cart`
Fetches the active cart for the logged-in user.
*Used in:* cart drawer and checkout pages.

### `paymentGateways`
Lists configured payment providers. Admin chooses one via the admin panel.

## Mutations

### `createOrder(paymentGatewayId: ID)`
Creates an order from the user's cart and records the selected payment gateway.
*Used in:* the checkout flow (`src/pages/Checkout.tsx`) when completing a purchase.

### `addToCart(productId, quantity)`
Adds an item to the cart or increases its quantity.

### `updateCartItem(itemId, quantity)`
Changes the quantity of an existing cart item.

### `removeCartItem(itemId)`
Removes an item from the cart.

### `favoriteProduct(productId)` / `unfavoriteProduct(productId)`
Mark or unmark a product as a favourite.

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
  createOrder(paymentGatewayId: 1) {
    order {
      id
      totalPrice
    }
  }
}
```

Example mutation to add an item to the cart:

```graphql
mutation {
  addToCart(productId: 2, quantity: 3) {
    cart {
      id
      items {
        product { title }
        quantity
      }
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
