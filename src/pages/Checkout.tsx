import { Fragment, useState } from "react";
import { ENABLE_MOCKS } from "@/lib/features";
import { createOrder } from "@/lib/saleor";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, CreditCard, Truck, MapPin, Clock } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Mock addresses
  const addresses = [
    {
      id: "1",
      type: "Home",
      name: "Jane Smith",
      line1: "742 Evergreen Terrace",
      line2: "Apartment 4B",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560001",
      phone: "+91 987-654-3210",
    },
    {
      id: "2",
      type: "Office",
      name: "Jane Smith",
      line1: "123 Work Street",
      line2: "Floor 7",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560002",
      phone: "+91 987-654-3210",
    },
  ];

  // Calculate totals
  const subtotal = items.reduce(
    (total, item) => total + Number(item.variant.price.amount) * item.quantity,
    0,
  );
  const shipping = subtotal > 1000 ? 0 : 99;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = async () => {
    if (!ENABLE_MOCKS) {
      try {
        await createOrder();
      } catch (err) {
        console.error("Order creation failed", err);
      }
    } else {
      console.log("Order placed (mock)");
    }
    clearCart();
    navigate("/order-confirmation");
  };

  if (items.length === 0) {
    return (
      <Fragment>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-800 mb-4 font-quicksand">
                Your cart is empty
              </h1>
              <p className="text-slate-600 mb-6 font-quicksand">
                Add some products to your cart before checking out.
              </p>
              <Button
                onClick={() => navigate("/shop")}
                className="font-quicksand"
              >
                Continue Shopping
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/cart")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-slate-800 font-quicksand">
                Checkout
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Delivery Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-quicksand">
                      <MapPin className="h-5 w-5" />
                      Delivery Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedAddress}
                      onValueChange={setSelectedAddress}
                    >
                      <div className="space-y-4">
                        {addresses.map((address) => (
                          <div
                            key={address.id}
                            className="flex items-start space-x-3"
                          >
                            <RadioGroupItem
                              value={address.id}
                              id={address.id}
                              className="mt-1"
                            />
                            <Label
                              htmlFor={address.id}
                              className="flex-1 cursor-pointer"
                            >
                              <div className="p-4 border rounded-lg hover:bg-gray-50">
                                <div className="font-medium font-quicksand">
                                  {address.type}
                                </div>
                                <div className="text-sm text-gray-600 font-quicksand">
                                  {address.name}
                                </div>
                                <div className="text-sm text-gray-600 font-quicksand">
                                  {address.line1}, {address.line2}
                                </div>
                                <div className="text-sm text-gray-600 font-quicksand">
                                  {address.city}, {address.state}{" "}
                                  {address.postalCode}
                                </div>
                                <div className="text-sm text-gray-600 font-quicksand">
                                  {address.phone}
                                </div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>

                    <Button variant="outline" className="mt-4 font-quicksand">
                      Add New Address
                    </Button>
                  </CardContent>
                </Card>

                {/* Delivery Options */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-quicksand">
                      <Truck className="h-5 w-5" />
                      Delivery Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="standard">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label
                            htmlFor="standard"
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium font-quicksand">
                                  Standard Delivery
                                </div>
                                <div className="text-sm text-gray-600 font-quicksand">
                                  3-5 business days
                                </div>
                              </div>
                              <div className="font-medium font-quicksand">
                                {shipping === 0 ? "Free" : `₹${shipping}`}
                              </div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="express" id="express" />
                          <Label
                            htmlFor="express"
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium font-quicksand">
                                  Express Delivery
                                </div>
                                <div className="text-sm text-gray-600 font-quicksand">
                                  1-2 business days
                                </div>
                              </div>
                              <div className="font-medium font-quicksand">
                                ₹199
                              </div>
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-quicksand">
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="font-quicksand">
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="font-quicksand">
                            UPI
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="netbanking" id="netbanking" />
                          <Label
                            htmlFor="netbanking"
                            className="font-quicksand"
                          >
                            Net Banking
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="font-quicksand">
                            Cash on Delivery
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="mt-6 space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label
                              htmlFor="cardNumber"
                              className="font-quicksand"
                            >
                              Card Number
                            </Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              className="font-quicksand"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label
                                htmlFor="expiry"
                                className="font-quicksand"
                              >
                                Expiry Date
                              </Label>
                              <Input
                                id="expiry"
                                placeholder="MM/YY"
                                className="font-quicksand"
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv" className="font-quicksand">
                                CVV
                              </Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                className="font-quicksand"
                              />
                            </div>
                          </div>
                          <div>
                            <Label
                              htmlFor="cardName"
                              className="font-quicksand"
                            >
                              Name on Card
                            </Label>
                            <Input
                              id="cardName"
                              placeholder="John Doe"
                              className="font-quicksand"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Special Instructions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-quicksand">
                      Special Instructions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Any special delivery instructions..."
                      className="font-quicksand"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="font-quicksand">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Items */}
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <img
                            src={item.product.images[0].url}
                            alt={item.product.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium font-quicksand">
                              {item.product.title}
                            </h4>
                            <p className="text-xs text-gray-600 font-quicksand">
                              {item.variant.title} × {item.quantity}
                            </p>
                          </div>
                          <div className="text-sm font-medium font-quicksand">
                            ₹{Number(item.variant.price.amount) * item.quantity}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-quicksand">Subtotal</span>
                        <span className="font-quicksand">
                          ₹{subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-quicksand">Shipping</span>
                        <span className="font-quicksand">
                          {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-quicksand">Tax (GST)</span>
                        <span className="font-quicksand">
                          ₹{tax.toFixed(2)}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span className="font-quicksand">Total</span>
                        <span className="font-quicksand">
                          ���{total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start space-x-2 text-xs text-gray-600">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="font-quicksand">
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className="text-[#1a5de6] hover:underline"
                        >
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy"
                          className="text-[#1a5de6] hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    {/* Place Order Button */}
                    <Button
                      className="w-full font-quicksand"
                      size="lg"
                      onClick={handlePlaceOrder}
                    >
                      Place Order - ₹{total.toFixed(2)}
                    </Button>

                    {/* Security Note */}
                    <div className="text-xs text-gray-500 text-center font-quicksand">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="h-3 w-3" />
                        Secure checkout powered by SSL encryption
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Checkout;
