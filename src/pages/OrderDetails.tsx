import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Package, Truck, MapPin, Phone, Mail } from "lucide-react";

const OrderDetails = () => {
  const { orderId } = useParams();

  // Mock order data
  const orderData = {
    id: orderId || "ORD-12345",
    date: "May 15, 2023",
    status: "Delivered",
    total: "₹1,249",
    deliveryDate: "May 18, 2023",
    trackingNumber: "TRK123456789",
    items: [
      {
        id: 1,
        name: "Organic Ragi Cereal",
        variant: "200g Pack",
        quantity: 2,
        price: "₹299",
        image: "/placeholder.svg",
      },
      {
        id: 2,
        name: "Apple & Banana Puree",
        variant: "120g Pouch",
        quantity: 3,
        price: "₹149",
        image: "/placeholder.svg",
      },
    ],
    shippingAddress: {
      name: "Jane Smith",
      line1: "742 Evergreen Terrace",
      line2: "Apartment 4B",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560001",
      phone: "+91 987-654-3210",
    },
    billing: {
      subtotal: "₹1,045",
      shipping: "₹99",
      tax: "₹105",
      total: "₹1,249",
    }
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/profile?tab=orders">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 font-quicksand">
                  Order Details
                </h1>
                <p className="text-slate-600 font-quicksand">
                  Order #{orderData.id} • Placed on {orderData.date}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Order Status */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between font-quicksand">
                      <span>Order Status</span>
                      <Badge
                        className={
                          orderData.status === "Delivered"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                        }
                      >
                        {orderData.status}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Package className="h-8 w-8 text-[#1a5de6]" />
                      <div>
                        <p className="font-medium font-quicksand">
                          {orderData.status === "Delivered" ? "Delivered" : "In Progress"}
                        </p>
                        <p className="text-sm text-slate-600 font-quicksand">
                          {orderData.status === "Delivered"
                            ? `Delivered on ${orderData.deliveryDate}`
                            : `Expected delivery: ${orderData.deliveryDate}`
                          }
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" asChild className="font-quicksand">
                        <Link to={`/track-order?order=${orderData.id}`}>
                          <Truck className="mr-2 h-4 w-4" />
                          Track Package
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Items */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-quicksand">Items Ordered</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orderData.items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded object-cover bg-gray-100"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800 font-quicksand">
                            {item.name}
                          </h4>
                          <p className="text-sm text-slate-600 font-quicksand">
                            {item.variant}
                          </p>
                          <p className="text-sm text-slate-600 font-quicksand">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-[#1a5de6] font-quicksand">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-quicksand">
                      <MapPin className="h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="font-medium font-quicksand">{orderData.shippingAddress.name}</p>
                      <p className="text-slate-600 font-quicksand">{orderData.shippingAddress.line1}</p>
                      <p className="text-slate-600 font-quicksand">{orderData.shippingAddress.line2}</p>
                      <p className="text-slate-600 font-quicksand">
                        {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.postalCode}
                      </p>
                      <p className="text-slate-600 font-quicksand flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {orderData.shippingAddress.phone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-quicksand">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-quicksand">Subtotal</span>
                        <span className="font-quicksand">{orderData.billing.subtotal}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-quicksand">Shipping</span>
                        <span className="font-quicksand">{orderData.billing.shipping}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-quicksand">Tax</span>
                        <span className="font-quicksand">{orderData.billing.tax}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span className="font-quicksand">Total</span>
                        <span className="font-quicksand">{orderData.billing.total}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      <Button variant="outline" className="w-full font-quicksand">
                        Download Invoice
                      </Button>
                      <Button variant="outline" className="w-full font-quicksand">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Support
                      </Button>
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

export default OrderDetails;
