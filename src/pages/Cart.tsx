import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = items.reduce(
    (total, item) => total + Number(item.variant.price.amount) * item.quantity,
    0,
  );

  // Calculate discount (10% if promo code is applied)
  const discount = promoApplied ? subtotal * 0.1 : 0;

  // Calculate shipping (free over ₹1000)
  const shipping = subtotal > 1000 ? 0 : 99;

  // Calculate final total
  const total = subtotal - discount + shipping;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleApplyPromo = () => {
    // In a real application, you would validate the promo code against a backend service
    if (promoCode.toLowerCase() === "kanhaa10") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl font-bold text-slate-800 mb-8 font-quicksand">
              Your Cart
            </h1>

            {items.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <ShoppingBag className="h-16 w-16 text-slate-300" />
                </div>
                <h2 className="text-xl font-semibold text-slate-800 mb-4 font-quicksand">
                  Your cart is empty
                </h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto font-quicksand">
                  Looks like you haven't added any products to your cart yet.
                  Browse our products and find something nutritious for your
                  little one.
                </p>
                <Button asChild className="rounded-full px-6">
                  <Link to="/shop">Browse Products</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-semibold text-slate-800 font-quicksand">
                        Cart Items ({items.length})
                      </h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-600 hover:text-red-500"
                        onClick={() => clearCart()}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear Cart
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 py-4 border-b border-slate-100"
                        >
                          <div className="w-20 h-20 bg-slate-50 rounded-lg overflow-hidden">
                            <img
                              src={item.product.images[0].url}
                              alt={item.product.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-semibold text-slate-800 mb-1 font-quicksand">
                                  {item.product.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-2 font-quicksand">
                                  {item.variant.title}
                                </p>

                                <div className="flex items-center mt-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-7 w-7 rounded-full"
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.quantity - 1,
                                      )
                                    }
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="mx-3 text-sm font-medium">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-7 w-7 rounded-full"
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.quantity + 1,
                                      )
                                    }
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="font-semibold text-[#1a5de6] font-quicksand">
                                  ₹
                                  {Number(item.variant.price.amount) *
                                    item.quantity}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-slate-500 p-0 h-auto hover:text-red-500"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                    <h2 className="text-lg font-semibold text-slate-800 mb-6 font-quicksand">
                      Order Summary
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-slate-600 font-quicksand">
                          Subtotal
                        </span>
                        <span className="font-semibold font-quicksand">
                          ₹{subtotal.toFixed(2)}
                        </span>
                      </div>

                      {promoApplied && (
                        <div className="flex justify-between text-green-600">
                          <span className="font-quicksand">Discount (10%)</span>
                          <span className="font-semibold font-quicksand">
                            -₹{discount.toFixed(2)}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-slate-600 font-quicksand">
                          Shipping
                        </span>
                        <span className="font-semibold font-quicksand">
                          {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                        </span>
                      </div>

                      <Separator className="my-2" />

                      <div className="flex justify-between">
                        <span className="text-slate-800 font-medium font-quicksand">
                          Total
                        </span>
                        <span className="text-lg font-bold text-[#1a5de6] font-quicksand">
                          ₹{total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mt-6 mb-8">
                      <label
                        htmlFor="promo"
                        className="block text-sm font-medium text-slate-700 mb-2 font-quicksand"
                      >
                        Promo Code
                      </label>
                      <div className="flex gap-2">
                        <Input
                          id="promo"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter promo code"
                          className="rounded-full font-quicksand"
                          disabled={promoApplied}
                        />
                        <Button
                          variant={promoApplied ? "outline" : "default"}
                          className="rounded-full"
                          onClick={handleApplyPromo}
                          disabled={promoApplied || !promoCode}
                        >
                          {promoApplied ? "Applied" : "Apply"}
                        </Button>
                      </div>
                      {promoApplied && (
                        <p className="text-green-600 text-sm mt-2 font-quicksand">
                          Promo code applied successfully!
                        </p>
                      )}
                    </div>

                    <Button
                      className="w-full rounded-full bg-[#1a5de6] hover:bg-[#1a5de6]/90 font-quicksand"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>

                    <div className="mt-4 text-center">
                      <Link
                        to="/shop"
                        className="text-[#1a5de6] text-sm hover:underline font-quicksand"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Cart;
