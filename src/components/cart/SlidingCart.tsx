import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SlidingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlidingCart = ({ isOpen, onClose }: SlidingCartProps) => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  // Calculate subtotal
  const subtotal = items.reduce(
    (total, item) => total + Number(item.variant.price.amount) * item.quantity,
    0,
  );

  // Calculate shipping (free over ₹1000)
  const shipping = subtotal > 1000 ? 0 : 99;

  // Calculate final total
  const total = subtotal + shipping;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    onClose();
    // Navigation will be handled by the Link component
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sliding Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-slate-800 font-quicksand">
              Your Cart ({items.length})
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <ShoppingBag className="h-16 w-16 text-slate-300 mb-4" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2 font-quicksand">
                  Your cart is empty
                </h3>
                <p className="text-slate-600 mb-6 font-quicksand">
                  Add some products to get started
                </p>
                <Button onClick={onClose} className="font-quicksand">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {/* Clear Cart Button */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 font-quicksand">
                    {items.length} item{items.length !== 1 ? 's' : ''} in cart
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-600 hover:text-red-500 font-quicksand"
                    onClick={clearCart}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                </div>

                {/* Cart Items */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="w-16 h-16 bg-white rounded overflow-hidden">
                        <img
                          src={item.product.images[0].url}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-medium text-slate-800 text-sm font-quicksand">
                          {item.product.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-quicksand">
                          {item.variant.title}
                        </p>
                        <p className="text-sm font-semibold text-[#1a5de6] font-quicksand">
                          ₹{Number(item.variant.price.amount) * item.quantity}
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 rounded-full"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 rounded-full"
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer with totals and checkout */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4 bg-white">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-quicksand">Subtotal</span>
                  <span className="font-quicksand">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-quicksand">Shipping</span>
                  <span className="font-quicksand">
                    {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span className="font-quicksand">Total</span>
                  <span className="font-quicksand">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full font-quicksand"
                  size="lg"
                  asChild
                  onClick={handleCheckout}
                >
                  <Link to="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-quicksand"
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SlidingCart;
