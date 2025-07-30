import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  getMockProducts,
  Product,
  AgeRange,
  ProductType,
  IngredientType,
} from "@/types/product";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Type definition for filter options
type FilterOption = {
  value: string;
  label: string;
};

// Filter options data
const ageRanges: FilterOption[] = [
  { value: "0-6", label: "0-6 months" },
  { value: "6-12", label: "6-12 months" },
  { value: "12-24", label: "12-24 months" },
  { value: "24+", label: "24+ months" },
];

const productTypes: FilterOption[] = [
  { value: "cereals", label: "Cereals" },
  { value: "purees", label: "Purees" },
  { value: "finger-foods", label: "Finger Foods" },
  { value: "snacks", label: "Snacks" },
  { value: "drinks", label: "Drinks" },
  { value: "meal-kits", label: "Meal Kits" },
];

const ingredientTypes: FilterOption[] = [
  { value: "ragi", label: "Ragi" },
  { value: "banana", label: "Banana" },
  { value: "apple", label: "Apple" },
  { value: "spinach", label: "Spinach" },
  { value: "carrot", label: "Carrot" },
  { value: "millet", label: "Millet" },
  { value: "rice", label: "Rice" },
  { value: "oats", label: "Oats" },
];

const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { items, addItem, removeItem, updateQuantity } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(!isMobile);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAges, setSelectedAges] = useState<AgeRange[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ProductType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientType[]
  >([]);
  const [sortBy, setSortBy] = useState("featured");

  // Initialize products
  useEffect(() => {
    setProducts(getMockProducts());
  }, []);

  // Parse URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    // Extract and set filters from URL
    if (searchParams.has("age")) {
      const ageParam = searchParams.get("age");
      if (ageParam) {
        setSelectedAges([ageParam as AgeRange]);
      }
    }

    if (searchParams.has("type")) {
      const typeParam = searchParams.get("type");
      if (typeParam) {
        setSelectedTypes([typeParam as ProductType]);
      }
    }

    if (searchParams.has("ingredient")) {
      const ingredientParam = searchParams.get("ingredient");
      if (ingredientParam) {
        setSelectedIngredients([ingredientParam as IngredientType]);
      }
    }

    if (searchParams.has("search")) {
      const searchParam = searchParams.get("search");
      if (searchParam) {
        setSearchTerm(searchParam);
      }
    }

    if (searchParams.has("sort")) {
      const sortParam = searchParams.get("sort");
      if (sortParam) {
        setSortBy(sortParam);
      }
    }
  }, [location.search]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Apply age filters
    if (selectedAges.length > 0) {
      result = result.filter((p) => selectedAges.includes(p.ageRange));
    }

    // Apply product type filters
    if (selectedTypes.length > 0) {
      result = result.filter((p) => selectedTypes.includes(p.productType));
    }

    // Apply ingredient filters
    if (selectedIngredients.length > 0) {
      result = result.filter((p) =>
        p.ingredients.some((ingredient) =>
          selectedIngredients.includes(ingredient),
        ),
      );
    }

    setFilteredProducts(result);

    // Update URL with current filters
    const searchParams = new URLSearchParams();

    if (searchTerm) searchParams.set("search", searchTerm);
    if (selectedAges.length > 0)
      searchParams.set("age", selectedAges.join(","));
    if (selectedTypes.length > 0)
      searchParams.set("type", selectedTypes.join(","));
    if (selectedIngredients.length > 0)
      searchParams.set("ingredient", selectedIngredients.join(","));
    if (sortBy !== "featured") searchParams.set("sort", sortBy);

    const newUrl = searchParams.toString()
      ? `${location.pathname}?${searchParams.toString()}`
      : location.pathname;

    navigate(newUrl, { replace: true });
  }, [
    products,
    searchTerm,
    selectedAges,
    selectedTypes,
    selectedIngredients,
    sortBy,
    navigate,
    location.pathname,
  ]);

  // Filter toggle for mobile
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Add/remove age filter
  const toggleAgeFilter = (age: AgeRange) => {
    setSelectedAges((prev) =>
      prev.includes(age) ? prev.filter((a) => a !== age) : [...prev, age],
    );
  };

  // Add/remove product type filter
  const toggleTypeFilter = (type: ProductType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  // Add/remove ingredient filter
  const toggleIngredientFilter = (ingredient: IngredientType) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient],
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedAges([]);
    setSelectedTypes([]);
    setSelectedIngredients([]);
    setSortBy("featured");
  };

  // Calculate active filter count
  const activeFilterCount =
    selectedAges.length +
    selectedTypes.length +
    selectedIngredients.length +
    (searchTerm ? 1 : 0);

  // Render product card
  const renderProductCard = (product: Product) => {
    const handleCardClick = () => {
      navigate(`/product/${product.handle}`);
    };

    // Check if product is already in cart
    const cartItem = items.find(item => item.product.id === product.id);
    const isInCart = !!cartItem;

    const handleAddToCart = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (product.variants.length > 0) {
        try {
          addItem({
            product,
            variant: product.variants[0],
            quantity: 1,
          });
        } catch (error) {
          console.error("Failed to add to cart:", error);
        }
      }
    };

    const handleIncreaseQuantity = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (cartItem) {
        updateQuantity(cartItem.id, cartItem.quantity + 1);
      }
    };

    const handleDecreaseQuantity = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (cartItem) {
        if (cartItem.quantity > 1) {
          updateQuantity(cartItem.id, cartItem.quantity - 1);
        } else {
          removeItem(cartItem.id);
        }
      }
    };

    const handleRemoveFromCart = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (cartItem) {
        removeItem(cartItem.id);
      }
    };

    return (
      <Card
        key={product.id}
        className="rounded-xl border-2 border-neutral-cream bg-white cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
        onClick={handleCardClick}
      >
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
          <h3 className="font-semibold text-slate-800 text-lg mb-4">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              {product.priceRange.originalPrice ? (
                <>
                  <span className="text-lg font-semibold text-primary">
                    ₹{product.priceRange.minPrice.amount}
                  </span>
                  <span className="text-sm text-slate-500 line-through">
                    ₹{product.priceRange.originalPrice.amount}
                  </span>
                </>
              ) : (
                <span className="text-lg font-semibold text-slate-800">
                  ₹{product.priceRange.minPrice.amount}
                </span>
              )}
            </div>
            {!isInCart ? (
              <Button
                className="bg-[#1a5de6] hover:bg-[#1a5de6]/90 text-white font-medium rounded-full px-4 py-1 h-8 font-quicksand"
                onClick={handleAddToCart}
              >
                Add
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 rounded-full"
                  onClick={handleDecreaseQuantity}
                >
                  <span className="text-sm">���</span>
                </Button>
                <span className="text-sm font-medium font-quicksand min-w-[20px] text-center">
                  {cartItem?.quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 rounded-full"
                  onClick={handleIncreaseQuantity}
                >
                  <span className="text-sm">+</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={handleRemoveFromCart}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="flex-grow">
        <div className="flex flex-col md:flex-row gap-8 mt-8 pb-16">
            {/* Filters sidebar */}
            {isFilterOpen && (
              <div
                className={cn(
                  "bg-gray-100 p-5 shadow-lg border-r border-gray-200",
                  isMobile
                    ? "fixed inset-0 z-50 overflow-auto bg-white"
                    : "sticky top-24 h-fit w-full md:w-[250px]",
                )}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  {isMobile && (
                    <Button variant="ghost" size="icon" onClick={toggleFilters}>
                      <X className="h-5 w-5" />
                    </Button>
                  )}
                </div>

                {/* Active filters */}
                {activeFilterCount > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium">Active Filters</h3>
                      <Button
                        variant="ghost"
                        className="text-xs h-auto p-1"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {searchTerm && (
                        <Badge
                          variant="secondary"
                          className="flex gap-1 items-center"
                        >
                          Search: {searchTerm}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => setSearchTerm("")}
                          />
                        </Badge>
                      )}

                      {selectedAges.map((age) => (
                        <Badge
                          key={age}
                          variant="secondary"
                          className="flex gap-1 items-center"
                        >
                          {ageRanges.find((a) => a.value === age)?.label}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => toggleAgeFilter(age)}
                          />
                        </Badge>
                      ))}

                      {selectedTypes.map((type) => (
                        <Badge
                          key={type}
                          variant="secondary"
                          className="flex gap-1 items-center"
                        >
                          {productTypes.find((t) => t.value === type)?.label}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => toggleTypeFilter(type)}
                          />
                        </Badge>
                      ))}

                      {selectedIngredients.map((ingredient) => (
                        <Badge
                          key={ingredient}
                          variant="secondary"
                          className="flex gap-1 items-center"
                        >
                          {
                            ingredientTypes.find((i) => i.value === ingredient)
                              ?.label
                          }
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => toggleIngredientFilter(ingredient)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Age filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Age</h3>
                  <div className="space-y-2">
                    {ageRanges.map((age) => (
                      <div key={age.value} className="flex items-center">
                        <Checkbox
                          id={`age-${age.value}`}
                          checked={selectedAges.includes(age.value as AgeRange)}
                          onCheckedChange={() =>
                            toggleAgeFilter(age.value as AgeRange)
                          }
                        />
                        <label
                          htmlFor={`age-${age.value}`}
                          className="ml-2 text-sm text-slate-600 cursor-pointer"
                        >
                          {age.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product type filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Product Type</h3>
                  <div className="space-y-2">
                    {productTypes.map((type) => (
                      <div key={type.value} className="flex items-center">
                        <Checkbox
                          id={`type-${type.value}`}
                          checked={selectedTypes.includes(
                            type.value as ProductType,
                          )}
                          onCheckedChange={() =>
                            toggleTypeFilter(type.value as ProductType)
                          }
                        />
                        <label
                          htmlFor={`type-${type.value}`}
                          className="ml-2 text-sm text-slate-600 cursor-pointer"
                        >
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ingredients filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Ingredients</h3>
                  <div className="space-y-2">
                    {ingredientTypes.map((ingredient) => (
                      <div key={ingredient.value} className="flex items-center">
                        <Checkbox
                          id={`ingredient-${ingredient.value}`}
                          checked={selectedIngredients.includes(
                            ingredient.value as IngredientType,
                          )}
                          onCheckedChange={() =>
                            toggleIngredientFilter(
                              ingredient.value as IngredientType,
                            )
                          }
                        />
                        <label
                          htmlFor={`ingredient-${ingredient.value}`}
                          className="ml-2 text-sm text-slate-600 cursor-pointer"
                        >
                          {ingredient.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {isMobile && (
                  <div className="sticky bottom-0 bg-white pt-4 pb-4 border-t mt-4">
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="w-1/2"
                        onClick={clearAllFilters}
                      >
                        Clear All
                      </Button>
                      <Button className="w-1/2" onClick={toggleFilters}>
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Product grid */}
            <div className="flex-1 max-w-screen-lg mx-auto bg-white shadow-lg px-4 sm:px-6 lg:px-8">
              {/* Search and filters aligned with main content */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 rounded-full font-quicksand w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 font-quicksand"
                    onClick={toggleFilters}
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFilterCount > 0 && (
                      <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <>
                  <p className="text-sm text-slate-500 mb-6 font-quicksand">
                    Showing {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(renderProductCard)}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-slate-800 mb-2">
                    No products found
                  </h3>
                  <p className="text-slate-500 mb-6">
                    Try adjusting your filters or search criteria
                  </p>
                  <Button onClick={clearAllFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;