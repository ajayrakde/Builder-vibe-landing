import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X, CloudSun } from "lucide-react";
import {
  getMockProducts,
  Product,
  AgeRange,
  ProductType,
  IngredientType,
} from "@/types/product";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkyBackground from "@/components/decorative/SkyBackground";
import KidFriendlyElements from "@/components/decorative/KidFriendlyElements";

type FilterOption = {
  value: string;
  label: string;
};

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

const sortOptions: FilterOption[] = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "What's New" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "best-selling", label: "Best Selling" },
];

const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

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

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort(
          (a, b) =>
            Number(a.priceRange.minPrice.amount) -
            Number(b.priceRange.minPrice.amount),
        );
        break;
      case "price-high":
        result.sort(
          (a, b) =>
            Number(b.priceRange.minPrice.amount) -
            Number(a.priceRange.minPrice.amount),
        );
        break;
      case "new":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "best-selling":
        result.sort(
          (a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0),
        );
        break;
      case "featured":
      default:
        // Keep the original order or implement featured logic
        break;
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

  return (
    <div className="min-h-screen flex flex-col">
      <SkyBackground />
      <KidFriendlyElements />
      <Header />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 pb-16">
          {/* Search and sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              {isMobile && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
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
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar */}
            {isFilterOpen && (
              <div
                className={cn(
                  "w-full md:w-[188px] bg-white p-5 rounded-lg shadow-sm",
                  isMobile
                    ? "fixed inset-0 z-50 overflow-auto"
                    : "sticky top-24 h-fit",
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
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <>
                  <p className="text-sm text-slate-500 mb-6">
                    Showing {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
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

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.handle}`);
  };

  return (
    <Card
      className="kid-friendly-card border-neutral-cream bg-neutral-white/90 backdrop-blur-sm cursor-pointer hover:bg-white"
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
        {product.kidFriendly && (
          <span className="absolute bottom-2 right-2 bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full flex items-center">
            <span className="mr-1">🧒</span> Kid Friendly
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
        <Button
          className="kid-button-primary w-full text-base"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when button is clicked
            if (product.variants.length > 0) {
              try {
                addItem({
                  product,
                  variant: product.variants[0],
                  quantity: 1,
                });
                alert(`Added ${product.title} to cart!`);
              } catch (error) {
                console.error("Failed to add to cart:", error);
                alert("Could not add to cart. Please try again.");
              }
            }
          }}
        >
          Add to Cart 🧸
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Shop;
