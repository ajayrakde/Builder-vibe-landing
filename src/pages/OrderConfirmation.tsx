import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Clock } from "lucide-react";

const OrderConfirmation = () => {
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">
                Order Confirmed!
              </h1>
              <p className="text-slate-600 font-quicksand">
                Thank you for your order. We've received it and will start processing it soon.
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="text-left space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800 mb-2 font-quicksand">
                      Order Details
                    </h2>
                    <p className="text-slate-600 font-quicksand">
                      Order ID: <span className="font-medium">#ORD-12349</span>
                    </p>
                    <p className="text-slate-600 font-quicksand">
                      Order Date: <span className="font-medium">December 20, 2023</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Package className="h-8 w-8 text-[#1a5de6] mx-auto mb-2" />
                      <h3 className="font-medium text-slate-800 font-quicksand">Processing</h3>
                      <p className="text-sm text-slate-600 font-quicksand">1-2 business days</p>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <Truck className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                      <h3 className="font-medium text-slate-800 font-quicksand">Shipping</h3>
                      <p className="text-sm text-slate-600 font-quicksand">3-5 business days</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-medium text-slate-800 font-quicksand">Delivery</h3>
                      <p className="text-sm text-slate-600 font-quicksand">Expected by Dec 28</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="font-quicksand">
                  <Link to="/profile?tab=orders">Track Your Order</Link>
                </Button>
                <Button variant="outline" asChild className="font-quicksand">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>

              <p className="text-sm text-slate-600 font-quicksand">
                We've sent a confirmation email to your registered email address.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default OrderConfirmation;
