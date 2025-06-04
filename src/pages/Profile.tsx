import { useState } from "react";
import { Fragment } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Pencil,
  Home,
  Package,
  User,
  Check,
  MapPin,
  Clock,
  PlusCircle,
} from "lucide-react";

// Mock user data
const userData = {
  name: "Jane Smith",
  email: "jane.smith@example.com",
  phone: "+91 987-654-3210",
  avatar: "/placeholder.svg",
  addresses: [
    {
      id: 1,
      type: "Home",
      isDefault: true,
      name: "Jane Smith",
      line1: "742 Evergreen Terrace",
      line2: "Apartment 4B",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560001",
      country: "India",
      phone: "+91 987-654-3210",
    },
    {
      id: 2,
      type: "Office",
      isDefault: false,
      name: "Jane Smith",
      line1: "123 Work Street",
      line2: "Floor 7",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560002",
      country: "India",
      phone: "+91 987-654-3210",
    },
    {
      id: 3,
      type: "Parents",
      isDefault: false,
      name: "Robert & Mary Smith",
      line1: "456 Family Road",
      line2: "",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
      phone: "+91 876-543-2109",
    },
  ],
  orders: [
    {
      id: "ORD-12345",
      date: "May 15, 2023",
      total: "₹1,249",
      status: "Delivered",
      items: [
        {
          id: 1,
          name: "Organic Ragi Cereal",
          quantity: 2,
          price: "₹299",
          image: "/placeholder.svg",
        },
        {
          id: 2,
          name: "Apple & Banana Puree",
          quantity: 3,
          price: "₹149",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      id: "ORD-12346",
      date: "June 2, 2023",
      total: "₹799",
      status: "Processing",
      items: [
        {
          id: 3,
          name: "Millet & Spinach Khichdi",
          quantity: 4,
          price: "₹199",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      id: "ORD-12347",
      date: "June 28, 2023",
      total: "₹328",
      status: "Delivered",
      items: [
        {
          id: 4,
          name: "Carrot & Oats Cookies",
          quantity: 2,
          price: "₹149",
          image: "/placeholder.svg",
        },
      ],
    },
    {
      id: "ORD-12348",
      date: "July 10, 2023",
      total: "₹997",
      status: "Delivered",
      items: [
        {
          id: 5,
          name: "Rice & Apple Porridge",
          quantity: 1,
          price: "₹249",
          image: "/placeholder.svg",
        },
        {
          id: 6,
          name: "Ragi & Banana Cookies",
          quantity: 4,
          price: "₹199",
          image: "/placeholder.svg",
        },
      ],
    },
  ],
};

// Profile section components
const PersonalDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 font-quicksand">
          Personal Details
        </h2>
        <Button
          variant={isEditing ? "default" : "outline"}
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="rounded-full"
        >
          {isEditing ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Save
            </>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" /> Edit
            </>
          )}
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-slate-100 flex items-center justify-center">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-full h-full object-cover"
              />
            </div>
            {isEditing && (
              <Button variant="outline" size="sm" className="text-xs">
                Change Photo
              </Button>
            )}
          </div>

          <div className="md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                {isEditing ? (
                  <Input
                    defaultValue={userData.name}
                    className="font-quicksand"
                  />
                ) : (
                  <p className="text-slate-900 font-quicksand">
                    {userData.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                {isEditing ? (
                  <Input
                    type="email"
                    defaultValue={userData.email}
                    className="font-quicksand"
                  />
                ) : (
                  <p className="text-slate-900 font-quicksand">
                    {userData.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                {isEditing ? (
                  <div className="flex gap-2">
                    <Input
                      type="tel"
                      defaultValue={userData.phone}
                      className="font-quicksand"
                      disabled
                    />
                    <Button variant="outline" size="sm" className="font-quicksand">
                      Verify OTP
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="text-slate-900 font-quicksand">
                      {userData.phone}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                )}
                <p className="text-xs text-slate-500 mt-1 font-quicksand">
                  Phone number requires OTP verification to edit
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Account Created
                </label>
                <p className="text-slate-900 font-quicksand">April 15, 2022</p>
              </div>
            </div>

            {isEditing && (
              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setIsEditing(false)}>
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-slate-800 mb-4 font-quicksand">
          Account Settings
        </h3>

        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-slate-800 font-quicksand">
                  Password
                </h4>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs rounded-full"
                >
                  Change Password
                </Button>
              </div>
              <p className="text-sm text-slate-500 font-quicksand">
                Last updated 3 months ago
              </p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-slate-800 font-quicksand">
                  Notifications
                </h4>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs rounded-full"
                >
                  Manage
                </Button>
              </div>
              <p className="text-sm text-slate-500 font-quicksand">
                You're receiving order updates and promotional emails
              </p>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-slate-800 font-quicksand">
                  Connected Accounts
                </h4>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs rounded-full"
                >
                  Manage
                </Button>
              </div>
              <p className="text-sm text-slate-500 font-quicksand">
                Google account connected
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const DeliveryAddresses = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [addresses, setAddresses] = useState(userData.addresses);

  const handleSetDefault = (addressId: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === addressId
    })));
  };

  const handleAddAddress = () => {
    setShowAddForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 font-quicksand">
          Delivery Addresses
        </h2>
        <Button className="rounded-full font-quicksand" onClick={handleAddAddress}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Address
        </Button>
      </div>

      {showAddForm && (
        <Card className="mb-6 border-2 border-dashed border-[#1a5de6]">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 font-quicksand">Add New Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="font-quicksand">Full Name</Label>
                <Input placeholder="Enter full name" className="font-quicksand" />
              </div>
              <div>
                <Label className="font-quicksand">Phone Number</Label>
                <Input placeholder="Enter phone number" className="font-quicksand" />
              </div>
              <div className="md:col-span-2">
                <Label className="font-quicksand">Address Line 1</Label>
                <Input placeholder="House number, street name" className="font-quicksand" />
              </div>
              <div className="md:col-span-2">
                <Label className="font-quicksand">Address Line 2</Label>
                <Input placeholder="Apartment, suite, etc. (optional)" className="font-quicksand" />
              </div>
              <div>
                <Label className="font-quicksand">City</Label>
                <Input placeholder="Enter city" className="font-quicksand" />
              </div>
              <div>
                <Label className="font-quicksand">State</Label>
                <Input placeholder="Enter state" className="font-quicksand" />
              </div>
              <div>
                <Label className="font-quicksand">PIN Code</Label>
                <Input placeholder="Enter PIN code" className="font-quicksand" />
              </div>
              <div>
                <Label className="font-quicksand">Address Type</Label>
                <Input placeholder="Home, Office, etc." className="font-quicksand" />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="font-quicksand">Save Address</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)} className="font-quicksand">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {addresses
          .sort((a, b) =>
            a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1,
          )
          .map((address) => (
            <Card
              key={address.id}
              className={`p-6 border-2 ${address.isDefault ? "border-primary" : "border-slate-100"}`}
            >

      <div className="space-y-4">
        {userData.addresses
          .sort((a, b) =>
            a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1,
          )
          .map((address) => (
            <Card
              key={address.id}
              className={`p-6 border-2 ${address.isDefault ? "border-primary" : "border-slate-100"}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-full ${address.isDefault ? "bg-primary/10" : "bg-slate-100"}`}
                  >
                    {address.type === "Home" ? (
                      <Home
                        className={`h-5 w-5 ${address.isDefault ? "text-primary" : "text-slate-500"}`}
                      />
                    ) : (
                      <MapPin
                        className={`h-5 w-5 ${address.isDefault ? "text-primary" : "text-slate-500"}`}
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-800 font-quicksand">
                        {address.type}
                      </h3>
                      {address.isDefault && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          Default
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-1 font-quicksand">
                      {address.name}
                    </p>
                    <p className="text-sm text-slate-600 font-quicksand">
                      {address.line1}
                    </p>
                    {address.line2 && (
                      <p className="text-sm text-slate-600 font-quicksand">
                        {address.line2}
                      </p>
                    )}
                    <p className="text-sm text-slate-600 font-quicksand">
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                    <p className="text-sm text-slate-600 font-quicksand">
                      {address.country}
                    </p>
                    <p className="text-sm text-slate-600 font-quicksand">
                      {address.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs font-quicksand">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs font-quicksand">
                    Delete
                  </Button>
                  {!address.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs font-quicksand"
                      onClick={() => handleSetDefault(address.id)}
                    >
                      Set as Default
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

const Orders = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 font-quicksand">
          My Orders
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            All
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Processing
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Delivered
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {userData.orders.map((order) => (
          <Card key={order.id} className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <p className="text-sm text-slate-500 font-quicksand">
                  Order ID: {order.id}
                </p>
                <p className="text-sm text-slate-500 font-quicksand">
                  Placed on {order.date}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2 md:mt-0">
                <Badge
                  className={
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                  }
                >
                  {order.status === "Delivered" ? (
                    <Check className="mr-1 h-3 w-3" />
                  ) : (
                    <Clock className="mr-1 h-3 w-3" />
                  )}
                  {order.status}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs rounded-full"
                >
                  View Details
                </Button>
              </div>
            </div>

            <Separator className="mb-4" />

            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800 font-quicksand">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-500 font-quicksand">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-800 font-quicksand">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between">
              <p className="font-medium text-slate-500 font-quicksand">Total</p>
              <p className="font-semibold text-slate-800 font-quicksand">
                {order.total}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Main Profile component
const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal-details");

  const renderContent = () => {
    switch (activeTab) {
      case "personal-details":
        return <PersonalDetails />;
      case "delivery-addresses":
        return <DeliveryAddresses />;
      case "orders":
        return <Orders />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <Fragment>
      <BackgroundElements density="low" />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="md:w-1/4 lg:w-1/5">
                <Card className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-slate-100 flex items-center justify-center">
                      <img
                        src={userData.avatar}
                        alt={userData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-800 text-center font-quicksand">
                      {userData.name}
                    </h3>
                    <p className="text-sm text-slate-500 text-center font-quicksand">
                      {userData.email}
                    </p>
                  </div>

                  <nav className="space-y-1">
                    <Button
                      variant={
                        activeTab === "personal-details" ? "default" : "ghost"
                      }
                      className={`w-full justify-start ${activeTab === "personal-details" ? "" : "hover:bg-slate-100"}`}
                      onClick={() => setActiveTab("personal-details")}
                    >
                      <User className="mr-2 h-5 w-5" />
                      Personal Details
                    </Button>

                    <Button
                      variant={
                        activeTab === "delivery-addresses" ? "default" : "ghost"
                      }
                      className={`w-full justify-start ${activeTab === "delivery-addresses" ? "" : "hover:bg-slate-100"}`}
                      onClick={() => setActiveTab("delivery-addresses")}
                    >
                      <Home className="mr-2 h-5 w-5" />
                      Delivery Addresses
                    </Button>

                    <Button
                      variant={activeTab === "orders" ? "default" : "ghost"}
                      className={`w-full justify-start ${activeTab === "orders" ? "" : "hover:bg-slate-100"}`}
                      onClick={() => setActiveTab("orders")}
                    >
                      <Package className="mr-2 h-5 w-5" />
                      Orders
                    </Button>
                  </nav>
                </Card>
              </div>

              {/* Content */}
              <div className="md:w-3/4 lg:w-4/5">{renderContent()}</div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Profile;