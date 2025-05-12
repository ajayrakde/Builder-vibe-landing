// Product type definitions for Shopify integration

export interface ProductPrice {
  amount: string;
  currencyCode: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: ProductPrice;
  isAvailable: boolean;
  sku: string;
  weight?: number;
  weightUnit?: string;
}

export interface ProductImage {
  id: string;
  url: string;
  altText?: string;
  width: number;
  height: number;
}

export interface NutritionFact {
  name: string;
  amount: string;
  dailyValue?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  title?: string;
  content: string;
  date: string;
}

export type AgeRange = "0-6" | "6-12" | "12-24" | "24+";

export type ProductType =
  | "cereals"
  | "purees"
  | "finger-foods"
  | "snacks"
  | "drinks"
  | "meal-kits";

export type IngredientType =
  | "ragi"
  | "banana"
  | "apple"
  | "spinach"
  | "carrot"
  | "millet"
  | "rice"
  | "oats";

export interface ProductTag {
  id: string;
  title: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  priceRange: {
    minPrice: ProductPrice;
    maxPrice: ProductPrice;
    originalPrice?: ProductPrice; // Original price before discount
  };
  images: ProductImage[];
  variants: ProductVariant[];
  ageRange: AgeRange;
  productType: ProductType;
  ingredients: IngredientType[];
  tags: ProductTag[];
  nutritionFacts?: NutritionFact[];
  reviews?: ProductReview[];
  rating?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  hasSubscription?: boolean;
  kidFriendly?: boolean; // Indicates if this product is specially designed for kids
}

// Mock data function to generate sample products
export const getMockProducts = (): Product[] => {
  return [
    {
      id: "prod-001",
      handle: "organic-ragi-cereal",
      title: "Organic Ragi Cereal",
      description:
        "Nutrient-rich organic ragi cereal perfect for babies 6+ months. Zero sugar, zero preservatives.",
      priceRange: {
        minPrice: { amount: "299", currencyCode: "INR" },
        maxPrice: { amount: "299", currencyCode: "INR" },
      },
      images: [
        {
          id: "img-001",
          url: "/placeholder.svg",
          altText: "Organic Ragi Cereal Package",
          width: 800,
          height: 800,
        },
      ],
      variants: [
        {
          id: "var-001",
          title: "200g Pack",
          price: { amount: "299", currencyCode: "INR" },
          isAvailable: true,
          sku: "KH-RC-200",
        },
      ],
      ageRange: "6-12",
      productType: "cereals",
      ingredients: ["ragi"],
      tags: [
        { id: "tag-001", title: "Organic" },
        { id: "tag-002", title: "No Sugar" },
      ],
      nutritionFacts: [
        { name: "Protein", amount: "10g" },
        { name: "Iron", amount: "8mg", dailyValue: "40%" },
      ],
      rating: 4.8,
      isNew: false,
      isBestSeller: true,
      hasSubscription: true,
      kidFriendly: true,
    },
    {
      id: "prod-002",
      handle: "apple-banana-puree",
      title: "Apple & Banana Puree",
      description:
        "Smooth and delicious apple and banana puree for babies 6+ months. Made with 100% organic fruits.",
      priceRange: {
        minPrice: { amount: "149", currencyCode: "INR" },
        maxPrice: { amount: "149", currencyCode: "INR" },
      },
      images: [
        {
          id: "img-002",
          url: "/placeholder.svg",
          altText: "Apple & Banana Puree Jar",
          width: 800,
          height: 800,
        },
      ],
      variants: [
        {
          id: "var-002",
          title: "100g Jar",
          price: { amount: "149", currencyCode: "INR" },
          isAvailable: true,
          sku: "KH-PU-AB",
        },
      ],
      ageRange: "6-12",
      productType: "purees",
      ingredients: ["apple", "banana"],
      tags: [
        { id: "tag-001", title: "Organic" },
        { id: "tag-003", title: "No Preservatives" },
      ],
      nutritionFacts: [
        { name: "Fiber", amount: "3g" },
        { name: "Vitamin C", amount: "15mg", dailyValue: "30%" },
      ],
      rating: 4.9,
      isNew: true,
      hasSubscription: false,
      kidFriendly: true,
    },
    {
      id: "prod-003",
      handle: "millet-spinach-khichdi",
      title: "Millet & Spinach Khichdi",
      description:
        "Nutritious ready-to-eat khichdi made with millets and spinach for toddlers 12+ months.",
      priceRange: {
        minPrice: { amount: "199", currencyCode: "INR" },
        maxPrice: { amount: "199", currencyCode: "INR" },
      },
      images: [
        {
          id: "img-003",
          url: "/placeholder.svg",
          altText: "Millet & Spinach Khichdi Package",
          width: 800,
          height: 800,
        },
      ],
      variants: [
        {
          id: "var-003",
          title: "150g Pack",
          price: { amount: "199", currencyCode: "INR" },
          isAvailable: true,
          sku: "KH-KH-MS",
        },
      ],
      ageRange: "12-24",
      productType: "meal-kits",
      ingredients: ["millet", "spinach"],
      tags: [
        { id: "tag-001", title: "Organic" },
        { id: "tag-004", title: "High Protein" },
      ],
      nutritionFacts: [
        { name: "Protein", amount: "8g" },
        { name: "Iron", amount: "6mg", dailyValue: "30%" },
        { name: "Calcium", amount: "120mg", dailyValue: "15%" },
      ],
      rating: 4.7,
      isNew: false,
      isBestSeller: false,
      hasSubscription: true,
    },
    {
      id: "prod-004",
      handle: "carrot-oats-cookies",
      title: "Carrot & Oats Cookies",
      description:
        "Crunchy yet soft cookies made with carrots and oats, perfect for toddlers learning to self-feed.",
      priceRange: {
        minPrice: { amount: "149", currencyCode: "INR" },
        maxPrice: { amount: "149", currencyCode: "INR" },
        originalPrice: { amount: "179", currencyCode: "INR" },
      },
      images: [
        {
          id: "img-004",
          url: "/placeholder.svg",
          altText: "Carrot & Oats Cookies Package",
          width: 800,
          height: 800,
        },
      ],
      variants: [
        {
          id: "var-004",
          title: "120g Pack",
          price: { amount: "179", currencyCode: "INR" },
          isAvailable: true,
          sku: "KH-CO-CK",
        },
      ],
      ageRange: "12-24",
      productType: "finger-foods",
      ingredients: ["carrot", "oats"],
      tags: [
        { id: "tag-001", title: "Organic" },
        { id: "tag-005", title: "Finger Food" },
      ],
      nutritionFacts: [
        { name: "Fiber", amount: "4g" },
        { name: "Vitamin A", amount: "300mcg", dailyValue: "40%" },
      ],
      rating: 4.6,
      isNew: false,
      isBestSeller: true,
      isOnSale: true,
      hasSubscription: false,
    },
    {
      id: "prod-005",
      handle: "rice-apple-porridge",
      title: "Rice & Apple Porridge",
      description:
        "Easy-to-digest rice and apple porridge, ideal for babies starting their solid food journey.",
      priceRange: {
        minPrice: { amount: "249", currencyCode: "INR" },
        maxPrice: { amount: "249", currencyCode: "INR" },
      },
      images: [
        {
          id: "img-005",
          url: "/placeholder.svg",
          altText: "Rice & Apple Porridge Package",
          width: 800,
          height: 800,
        },
      ],
      variants: [
        {
          id: "var-005",
          title: "200g Pack",
          price: { amount: "249", currencyCode: "INR" },
          isAvailable: true,
          sku: "KH-RP-AP",
        },
      ],
      ageRange: "6-12",
      productType: "cereals",
      ingredients: ["rice", "apple"],
      tags: [
        { id: "tag-001", title: "Organic" },
        { id: "tag-006", title: "Easy Digestion" },
      ],
      nutritionFacts: [
        { name: "Carbohydrates", amount: "18g" },
        { name: "Vitamin B1", amount: "0.5mg", dailyValue: "25%" },
      ],
      rating: 4.5,
      isNew: true,
      isBestSeller: false,
      hasSubscription: true,
    },
    {
      id: "prod-006",
      handle: "ragi-banana-cookies",
      title: "Ragi & Banana Cookies",
      description:
        "Wholesome cookies made with nutritious ragi and sweet bananas for toddlers.",
      priceRange: {
        minPrice: { amount: "159", currencyCode: "INR" },
        maxPrice: { amount: "159", currencyCode: "INR" },
        originalPrice: { amount: "199", currencyCode: "INR" },
      },
      images: [
        {
          id: "img-006",
          url: "/placeholder.svg",
          altText: "Ragi & Banana Cookies Package",
          width: 800,
          height: 800,
        },
      ],
      variants: [
        {
          id: "var-006",
          title: "150g Pack",
          price: { amount: "199", currencyCode: "INR" },
          isAvailable: true,
          sku: "KH-RB-CK",
        },
      ],
      ageRange: "12-24",
      productType: "finger-foods",
      ingredients: ["ragi", "banana"],
      tags: [
        { id: "tag-001", title: "Organic" },
        { id: "tag-005", title: "Finger Food" },
      ],
      nutritionFacts: [
        { name: "Calcium", amount: "80mg", dailyValue: "10%" },
        { name: "Iron", amount: "4mg", dailyValue: "20%" },
      ],
      rating: 4.7,
      isNew: false,
      isBestSeller: false,
      isOnSale: true,
      hasSubscription: false,
    },
  ];
};
