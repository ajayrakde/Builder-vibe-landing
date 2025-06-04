import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  User,
  CloudSun,
  LogIn,
  UserCircle,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCart } from "@/hooks/use-cart";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Community", href: "/community" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();
  const { itemCount = 0 } = useCart() || {};

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-1">
              <CloudSun className="h-7 w-7 text-[#1a5de6] animate-pulse" />
              <span className="font-quicksand text-[#1a5de6] font-bold text-[30px] leading-9">
                Kanhaa
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with Always Visible Search */}
          <div className="hidden md:flex items-center flex-1 justify-center max-w-4xl mx-4">
            <div className="flex items-center gap-6">
              {/* Navigation Menu */}
              <nav className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-quicksand font-medium transition rounded-full px-3 py-1 hover:bg-skyBlue-light/30 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Always Visible Search Box */}
              <form onSubmit={handleSearchSubmit} className="flex-shrink-0">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 lg:w-56 pl-10 pr-4 rounded-full font-quicksand"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </form>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Account"
                  className="text-primary hover:bg-skyBlue-light/30 rounded-full"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/auth" className="flex items-center font-quicksand">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In / Sign Up
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex items-center font-quicksand"
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile?tab=addresses"
                    className="flex items-center font-quicksand"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Addresses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile?tab=orders"
                    className="flex items-center font-quicksand"
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Order History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/track-order"
                    className="flex items-center font-quicksand"
                  >
                    <Truck className="mr-2 h-4 w-4" />
                    Track Order
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Shopping cart"
              className="text-primary hover:bg-skyBlue-light/30 rounded-full"
              asChild
            >
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 bg-primary text-[10px] flex items-center justify-center text-white rounded-full">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Shopping cart"
              className="text-primary hover:bg-skyBlue-light/30 rounded-full"
              asChild
            >
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 h-5 w-5 bg-vibrant-teal text-[10px] flex items-center justify-center text-white rounded-full animate-pulse">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 flex z-50">
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="ml-1 text-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4 mb-4">
                <span className="font-quicksand text-[#1a5de6] font-bold text-[30px] leading-9">
                  Kanhaa
                </span>
              </div>

              {/* Mobile Search */}
              <div className="px-4 mb-4">
                <form onSubmit={handleSearchSubmit}>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 rounded-full font-quicksand"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </form>
              </div>

              <nav className="px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block px-3 py-3 rounded-md text-base font-medium font-quicksand",
                      "text-neutral-black hover:bg-skyBlue-light/30 hover:text-neutral-charcoal",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex items-center space-x-4 w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Account"
                  asChild
                >
                  <Link to="/profile">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="default"
                  className="ml-auto font-quicksand"
                  asChild
                >
                  <Link to="/auth">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
