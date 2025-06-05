import { Fragment, useState } from "react";
import { ENABLE_MOCKS } from "@/lib/features";
import { trackOrder as trackOrderApi } from "@/lib/saleor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber) return;

    if (!ENABLE_MOCKS) {
      const data = await trackOrderApi(orderNumber);
      if (data) {
        setTrackingData({
          orderNumber,
          status: data.status,
          estimatedDelivery: data.eta,
          currentLocation: data.location,
          timeline: [],
        });
        return;
      }

    }

    // Mock tracking data
    setTrackingData({
      orderNumber: orderNumber,
      status: "In Transit",
      estimatedDelivery: "Dec 28, 2023",
      currentLocation: "Delhi Distribution Center",
      timeline: [
        {
          status: "Order Confirmed",
          date: "Dec 20, 2023 - 2:30 PM",
          completed: true,
        },
          {
            status: "Processing",
            date: "Dec 21, 2023 - 10:15 AM",
            completed: true,
          },
          {
            status: "Shipped",
            date: "Dec 22, 2023 - 9:45 AM",
            completed: true,
          },
          {
            status: "In Transit",
            date: "Dec 25, 2023 - 11:20 AM",
            completed: true,
          },
          {
            status: "Out for Delivery",
            date: "Expected Dec 28, 2023",
            completed: false,
          },
          {
            status: "Delivered",
            date: "Expected Dec 28, 2023",
            completed: false,
          },
        ],
      });
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">
                Track Your Order
              </h1>
              <p className="text-slate-600 font-quicksand">
                Enter your order number to see the latest updates
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-quicksand">
                  Enter Order Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="space-y-4">
                  <div>
                    <Label htmlFor="orderNumber" className="font-quicksand">
                      Order Number
                    </Label>
                    <Input
                      id="orderNumber"
                      type="text"
                      placeholder="e.g., ORD-12345"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      className="font-quicksand"
                      required
                    />
                  </div>
                  <Button type="submit" className="font-quicksand">
                    Track Order
                  </Button>
                </form>
              </CardContent>
            </Card>

            {trackingData && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-quicksand">Order Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-lg font-quicksand">
                        Order #{trackingData.orderNumber}
                      </h3>
                      <p className="text-slate-600 font-quicksand">
                        Current Status:{" "}
                        <Badge className="ml-2">{trackingData.status}</Badge>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-600 font-quicksand">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        {trackingData.currentLocation}
                      </p>
                      <p className="text-slate-600 font-quicksand">
                        <Truck className="inline h-4 w-4 mr-1" />
                        Expected: {trackingData.estimatedDelivery}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold font-quicksand">
                      Tracking Timeline
                    </h4>
                    {trackingData.timeline.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              step.completed ? "bg-green-500" : "bg-gray-300"
                            }`}
                          >
                            {step.completed ? (
                              <CheckCircle className="w-4 h-4 text-white" />
                            ) : (
                              <Clock className="w-4 h-4 text-gray-600" />
                            )}
                          </div>
                          {index < trackingData.timeline.length - 1 && (
                            <div
                              className={`w-0.5 h-8 ${
                                step.completed ? "bg-green-500" : "bg-gray-300"
                              }`}
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <h5
                            className={`font-medium font-quicksand ${
                              step.completed
                                ? "text-green-700"
                                : "text-gray-600"
                            }`}
                          >
                            {step.status}
                          </h5>
                          <p
                            className={`text-sm font-quicksand ${
                              step.completed
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                          >
                            {step.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default TrackOrder;
