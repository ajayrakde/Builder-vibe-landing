export interface SaleorProduct {
  id: string;
  name: string;
  slug: string;
  description?: string;
  thumbnail?: {
    url: string;
  };
}

export type Product = import("@/types/product").Product;

export function toProduct(item: SaleorProduct): Product {
  return {
    id: item.id,
    handle: item.slug,
    title: item.name,
    description: item.description || "",
    priceRange: {
      minPrice: { amount: "0", currencyCode: "USD" },
      maxPrice: { amount: "0", currencyCode: "USD" },
    },
    images: item.thumbnail
      ? [
          {
            id: "thumb",
            url: item.thumbnail.url,
            altText: item.name,
            width: 300,
            height: 300,
          },
        ]
      : [],
    variants: [],
    ageRange: "0-6",
    productType: "cereals",
    ingredients: [],
    tags: [],
  } as Product;
}

import { SALEOR_API_URL } from './features';

const API_URL = SALEOR_API_URL;

async function graphqlRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) {
    throw new Error(`Saleor API error: ${response.status}`);
  }
  const json = await response.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Saleor API returned errors');
  }
  return json.data;
}

export async function fetchProducts() {
  const query = `
    query Products {
      products(first: 20) {
        edges {
          node {
            id
            name
            slug
            description
            thumbnail {
              url
            }
          }
        }
      }
    }
  `;
  type Resp = { products: { edges: { node: SaleorProduct }[] } };
  const data = await graphqlRequest<Resp>(query);
  return data.products.edges.map(edge => toProduct(edge.node));
}

export async function fetchProductBySlug(slug: string) {
  const query = `
    query ProductBySlug($slug: String!) {
      product(slug: $slug) {
        id
        name
        slug
        description
        thumbnail {
          url
        }
      }
    }
  `;
  type Resp = { product: SaleorProduct | null };
  const data = await graphqlRequest<Resp>(query, { slug });
  return data.product ? toProduct(data.product) : null;
}

export async function createOrder(paymentGatewayId?: string) {
  const mutation = `
    mutation CreateOrder($pg: ID) {
      createOrder(paymentGatewayId: $pg) {
        order {
          id
          totalPrice
        }
      }
    }
  `;
  type Resp = { createOrder: { order: { id: string; totalPrice: number } } };
  const data = await graphqlRequest<Resp>(mutation, { pg: paymentGatewayId });
  return data.createOrder.order;
}

export async function trackOrder(orderId: string) {
  const query = `
    query Track($id: ID!) {
      trackOrder(orderId: $id) {
        status
        eta
        location
      }
    }
  `;
  type Resp = { trackOrder: { status: string; eta: string; location: string } | null };
  const data = await graphqlRequest<Resp>(query, { id: orderId });
  return data.trackOrder;
}
