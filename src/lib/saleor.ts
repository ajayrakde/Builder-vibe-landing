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

const API_URL = import.meta.env.VITE_SALEOR_API_URL || 'https://demo.saleor.io/graphql/';

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
