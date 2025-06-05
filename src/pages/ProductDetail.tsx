import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, ShoppingBag, ChevronLeft, Star, StarHalf } from "lucide-react";
import { Product, ProductVariant } from "@/types/product";
import { fetchProductBySlug } from "@/lib/saleor";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";

const ProductDetail = () => {
  const { productHandle } = useParams<{ productHandle: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    null,
  );
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const { addItem } = useCart();

  // Fetch product data
  useEffect(() => {
    if (!productHandle) return;
    fetchProductBySlug(productHandle)
      .then((data) => {
        if (data) {
          setProduct(data);
          if (data.variants.length > 0) {
            setSelectedVariant(data.variants[0]);
          }
        }
      })
      .catch((err) => console.error('Failed to load product', err));
  }, [productHandle]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-slate-800 mb-4">
              Product Not Found
            </h1>
            <Link to="/shop" className="text-primary hover:underline">
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleVariantChange = (variantId: string) => {
    const variant = product.variants.find((v) => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  const handleQuantityChange = (value: string) => {
    setQuantity(parseInt(value, 10));
  };

  const handlePurchaseTypeChange = (type: string) => {
    setIsSubscription(type === "subscription");
  };


  const handleAddToCart = () => {
    if (!selectedVariant || !product) return;

    addItem({
      product,
      variant: selectedVariant,
      quantity,
      isSubscription,
    });

    // Show a toast or alert to confirm
    alert(`Added ${quantity} ${product.title} to cart!`);
  };

  // Calculate rating breakdown
  const ratingBreakdown = [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundElements density="low" />
      <Header />

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center text-sm">
              <li className="flex items-center">
                <Link to="/" className="text-slate-500 hover:text-slate-700">
                  Home
                </Link>
                <span className="mx-2 text-slate-400">/</span>
              </li>
              <li className="flex items-center">
                <Link
                  to="/shop"
                  className="text-slate-500 hover:text-slate-700"
                >
                  Shop
                </Link>
                <span className="mx-2 text-slate-400">/</span>
              </li>
              <li className="flex items-center">
                <Link
                  to={`/shop?type=${product.productType}`}
                  className="text-slate-500 hover:text-slate-700"
                >
                  {product.productType
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Link>
                <span className="mx-2 text-slate-400">/</span>
              </li>
              <li className="text-slate-700 font-medium truncate">
                {product.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product images */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg overflow-hidden border border-slate-100 h-96 flex items-center justify-center p-4">
                <img
                  src={
                    product.images[currentImageIndex]?.url || "/placeholder.svg"
                  }
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={image.id}
                      className={cn(
                        "h-20 w-20 rounded-md overflow-hidden border-2 flex-shrink-0",
                        currentImageIndex === index
                          ? "border-primary"
                          : "border-transparent hover:border-slate-300",
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image.url}
                        alt={`${product.title} - view ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product info */}
            <div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {product.isNew && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded-full",
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
                </div>

                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                  {product.title}
                </h1>

                <div className="flex items-center mb-4">
                  {product.rating && (
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star}>
                            {star <= Math.floor(product.rating) ? (
                              <Star className="h-4 w-4 fill-current" />
                            ) : star === Math.ceil(product.rating) &&
                              !Number.isInteger(product.rating) ? (
                              <StarHalf className="h-4 w-4 fill-current" />
                            ) : (
                              <Star className="h-4 w-4 text-gray-300" />
                            )}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">
                        {product.rating} ({product.reviews?.length || 0}{" "}
                        reviews)
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  {product.priceRange.originalPrice ? (
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <p className="text-2xl font-semibold text-primary">
                        ₹
                        {selectedVariant?.price.amount ||
                          product.priceRange.minPrice.amount}
                      </p>
                      <p className="text-lg text-slate-500 line-through">
                        ₹{product.priceRange.originalPrice.amount}
                      </p>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        {Math.round(
                          ((Number(product.priceRange.originalPrice.amount) -
                            Number(product.priceRange.minPrice.amount)) /
                            Number(product.priceRange.originalPrice.amount)) *
                            100,
                        )}
                        % OFF
                      </span>
                    </div>
                  ) : (
                    <p className="text-2xl font-semibold text-slate-800">
                      ₹
                      {selectedVariant?.price.amount ||
                        product.priceRange.minPrice.amount}
                    </p>
                  )}
                </div>

                <p className="text-slate-600 mb-6">{product.description}</p>
              </div>

              {/* Variant selection */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium",
                          selectedVariant?.id === variant.id
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                        )}
                        onClick={() => handleVariantChange(variant.id)}
                      >
                        {variant.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Purchase type selection (one-time vs subscription) */}
              {product.hasSubscription && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Purchase Type
                  </label>
                  <div className="flex gap-4">
                    <button
                      className={cn(
                        "flex-1 px-4 py-3 rounded-lg text-sm font-medium border-2",
                        !isSubscription
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-slate-200 text-slate-700 hover:border-slate-300",
                      )}
                      onClick={() => handlePurchaseTypeChange("one-time")}
                    >
                      One-time purchase
                    </button>
                    <button
                      className={cn(
                        "flex-1 px-4 py-3 rounded-lg text-sm font-medium border-2",
                        isSubscription
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-slate-200 text-slate-700 hover:border-slate-300",
                      )}
                      onClick={() => handlePurchaseTypeChange("subscription")}
                    >
                      Subscribe & Save 10%
                    </button>
                  </div>
                </div>
              )}

              {/* Quantity and add to cart */}
              <div className="flex gap-4 mb-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Quantity
                  </label>
                  <Select
                    value={quantity.toString()}
                    onValueChange={handleQuantityChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-2/3">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    &nbsp;
                  </label>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 rounded-full"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Key points */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  100% Organic
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  No Added Sugar
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  No Preservatives
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  Age Appropriate
                </div>
              </div>

              {/* Product tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details">
              <TabsList className="w-full grid grid-cols-4 mb-8">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent
                value="details"
                className="p-6 bg-white rounded-lg border border-slate-100"
              >
                <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How to Prepare</AccordionTrigger>
                    <AccordionContent>
                      For infants: Mix 2 tablespoons with warm breast milk or
                      formula to form a smooth consistency.
                      <br />
                      <br />
                      For older babies: Mix with water or milk and serve as a
                      porridge.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Storage Instructions</AccordionTrigger>
                    <AccordionContent>
                      Store in a cool, dry place. Once opened, refrigerate and
                      use within 2 weeks.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Age Recommendation</AccordionTrigger>
                    <AccordionContent>
                      This product is specifically formulated for babies in the{" "}
                      {product.ageRange === "0-6"
                        ? "0-6 months"
                        : product.ageRange === "6-12"
                          ? "6-12 months"
                          : product.ageRange === "12-24"
                            ? "12-24 months"
                            : "24+ months"}{" "}
                      age range.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent
                value="nutrition"
                className="p-6 bg-white rounded-lg border border-slate-100"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Nutrition Information
                </h3>

                {product.nutritionFacts && product.nutritionFacts.length > 0 ? (
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left py-3 px-4 text-sm font-medium text-slate-700">
                            Nutrient
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-slate-700">
                            Amount
                          </th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-slate-700">
                            % Daily Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {product.nutritionFacts.map((fact, index) => (
                          <tr key={index} className="hover:bg-slate-50">
                            <td className="py-3 px-4 text-sm text-slate-700">
                              {fact.name}
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-700">
                              {fact.amount}
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-700">
                              {fact.dailyValue || "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-slate-600">
                    Nutrition information is being updated. Please check back
                    soon.
                  </p>
                )}
              </TabsContent>

              <TabsContent
                value="ingredients"
                className="p-6 bg-white rounded-lg border border-slate-100"
              >
                <h3 className="text-xl font-semibold mb-4">Ingredients</h3>

                <div className="mb-6">
                  <p className="text-slate-600">
                    {product.ingredients
                      .map(
                        (ingredient) =>
                          ingredient.charAt(0).toUpperCase() +
                          ingredient.slice(1),
                      )
                      .join(", ")}
                  </p>
                </div>

                <h4 className="font-medium text-lg mb-3">Key Ingredients</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.ingredients.map((ingredient) => (
                    <Card key={ingredient}>
                      <CardContent className="p-4 flex items-center">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                          <img
                            src="/placeholder.svg"
                            alt={ingredient}
                            className="w-6 h-6"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">
                            {ingredient.charAt(0).toUpperCase() +
                              ingredient.slice(1)}
                          </h5>
                          <p className="text-xs text-slate-500">
                            Rich in vitamins and minerals essential for your
                            baby's growth.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent
                value="reviews"
                className="p-6 bg-white rounded-lg border border-slate-100"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Rating summary */}
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">
                      Customer Reviews
                    </h3>

                    <div className="text-center p-4 bg-slate-50 rounded-lg mb-6">
                      <div className="text-4xl font-bold text-slate-800 mb-2">
                        {product.rating || 0}
                      </div>
                      <div className="flex justify-center text-yellow-400 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={cn(
                              "h-4 w-4",
                              star <= Math.floor(product.rating || 0)
                                ? "fill-current"
                                : "text-gray-300",
                            )}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-slate-500">
                        Based on {product.reviews?.length || 0} reviews
                      </div>
                    </div>

                    <div className="space-y-2">
                      {ratingBreakdown.map((item) => (
                        <div key={item.stars} className="flex items-center">
                          <span className="w-10 text-sm text-slate-600">
                            {item.stars} stars
                          </span>
                          <Progress
                            value={item.percentage}
                            className="h-2 flex-1 mx-2"
                          />
                          <span className="w-8 text-right text-sm text-slate-600">
                            {item.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews list */}
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-medium">All Reviews</h4>
                      <Button>Write a Review</Button>
                    </div>

                    {product.reviews && product.reviews.length > 0 ? (
                      <div className="space-y-6">
                        {product.reviews.map((review) => (
                          <div key={review.id} className="border-b pb-6">
                            <div className="flex justify-between mb-2">
                              <div className="font-medium">{review.author}</div>
                              <div className="text-slate-500 text-sm">
                                {review.date}
                              </div>
                            </div>

                            <div className="flex text-yellow-400 mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={cn(
                                    "h-4 w-4",
                                    star <= review.rating
                                      ? "fill-current"
                                      : "text-gray-300",
                                  )}
                                />
                              ))}
                            </div>

                            {review.title && (
                              <h5 className="font-medium mb-1">
                                {review.title}
                              </h5>
                            )}

                            <p className="text-slate-600">{review.content}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center p-8">
                        <p className="text-slate-500 mb-4">No reviews yet</p>
                        <Button>Be the First to Review</Button>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
