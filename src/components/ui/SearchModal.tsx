import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Mock search results - in real app, this would come from an API
const mockSearchResults = [
  {
    id: 1,
    title: "Organic Ragi Banana Puree",
    price: "₹180",
    image: "/placeholder.svg",
    slug: "ragi-banana-puree",
  },
  {
    id: 2,
    title: "Sprouted Ragi Cookies",
    price: "₹220",
    image: "/placeholder.svg",
    slug: "ragi-cookies",
  },
  {
    id: 3,
    title: "Apple Spinach Puree",
    price: "₹160",
    image: "/placeholder.svg",
    slug: "apple-spinach-puree",
  },
];

export const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<typeof mockSearchResults>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      // Filter mock results based on query
      const filtered = mockSearchResults.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setResults([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-quicksand">Search Products</DialogTitle>
        </DialogHeader>

        <div className="px-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search for baby foods, purees, snacks..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-10 rounded-full font-quicksand"
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="px-6 pb-6">
          {searchQuery && results.length === 0 && (
            <div className="text-center py-8 text-gray-500 font-quicksand">
              No products found for "{searchQuery}"
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
              {results.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => onOpenChange(false)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-800 font-quicksand">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#1a5de6] font-quicksand">
                      {item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {searchQuery && results.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <Link
                to={`/shop?search=${encodeURIComponent(searchQuery)}`}
                className="text-[#1a5de6] hover:underline font-quicksand"
                onClick={() => onOpenChange(false)}
              >
                View all results for "{searchQuery}"
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
