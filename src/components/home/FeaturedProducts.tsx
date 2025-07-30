import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product, getMockProducts } from "@/types/product";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const FeaturedProducts = () => {
  const allProducts = getMockProducts();
  // Select bestsellers or featured products
  const featuredProducts = allProducts.filter(
    (product) => product.isBestSeller || product.isNew,
  );

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Loved by Little Ones
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Discover our most popular organic baby foods, carefully crafted with
          natural ingredients and zero additives or preservatives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/shop">View All Products</Link>
        </Button>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow border-slate-100">
      <div className="relative">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            Bestseller
          </span>
        )}
        <img
          src={product.images[0].url}
          alt={product.title}
          className="h-48 w-full object-cover"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <span
            className={cn(
              "text-xs px-2 py-0.5 rounded-full mr-2",
              product.ageRange === "0-6"
                ? "bg-blue-100 text-blue-800"
                : product.ageRange === "6-12"
                  ? "bg-green-100 text-green-800"
                  : product.ageRange === "12-24"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-orange-100 text-orange-800",
            )}
          >
            {product.ageRange === "0-6"
              ? "0-6 months"
              : product.ageRange === "6-12"
                ? "6-12 months"
                : product.ageRange === "12-24"
                  ? "12-24 months"
                  : "24+ months"}
          </span>
          <span
            className={cn(
              "text-xs px-2 py-0.5 rounded-full",
              product.productType === "cereals"
                ? "bg-yellow-100 text-yellow-800"
                : product.productType === "purees"
                  ? "bg-pink-100 text-pink-800"
                  : product.productType === "finger-foods"
                    ? "bg-indigo-100 text-indigo-800"
                    : product.productType === "snacks"
                      ? "bg-red-100 text-red-800"
                      : "bg-teal-100 text-teal-800",
            )}
          >
            {product.productType
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
        </div>

        <h3 className="font-semibold text-slate-800 text-lg mb-1">
          {product.title}
        </h3>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-baseline justify-between">
          <span className="text-lg font-semibold text-slate-800">
            ₹{product.priceRange.minPrice.amount}
          </span>
          {product.rating && (
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-sm text-slate-600">
                {product.rating}
              </span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full rounded-full">
          <Link to={`/product/${product.handle}`}>View Product</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeaturedProducts;
