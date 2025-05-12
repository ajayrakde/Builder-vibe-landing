import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock testimonial data
interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  location: string;
  memberSince: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Mother of 10-month-old",
    avatar: "/placeholder.svg",
    content:
      "Joining Kanhaa Moms was one of the best decisions I made as a new parent. The exclusive recipes and early product trials have been so helpful, and connecting with other moms facing the same challenges has been invaluable.",
    location: "Mumbai",
    memberSince: "April 2023",
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Father of twins",
    avatar: "/placeholder.svg",
    content:
      "As a father of twins, I appreciate how inclusive this community is. The parenting tips shared by other members have saved us on many difficult days. The early access to new products is also a huge benefit!",
    location: "Bangalore",
    memberSince: "January 2023",
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Mom of 16-month-old",
    avatar: "/placeholder.svg",
    content:
      "Kanhaa Moms has been my go-to resource for reliable nutrition information. I love how active the community is, with members sharing their real experiences and supporting each other through the parenting journey.",
    location: "Delhi",
    memberSince: "March 2023",
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Father of 8-month-old",
    avatar: "/placeholder.svg",
    content:
      "I was surprised to find so many other dads in this community! It's been great to get personalized advice about introducing solids and managing mealtime challenges. The exclusive recipes are a bonus!",
    location: "Hyderabad",
    memberSince: "May 2023",
  },
  {
    id: "5",
    name: "Meera Iyer",
    role: "Mom of 14-month-old",
    avatar: "/placeholder.svg",
    content:
      "Being part of the product testing group has been an amazing experience. I love giving feedback that actually shapes the development of new products, and my toddler enjoys trying new foods before they're officially released!",
    location: "Chennai",
    memberSince: "February 2023",
  },
];

// Mock recipe data
interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  prepTime: string;
  ageRange: string;
  authorName: string;
  authorAvatar: string;
  exclusive: boolean;
}

const recipes: Recipe[] = [
  {
    id: "1",
    title: "Sweet Potato & Apple Puree",
    description:
      "A nutrient-rich puree perfect for babies starting solid foods, with beta-carotene from sweet potatoes and vitamin C from apples.",
    image: "/placeholder.svg",
    difficulty: "Easy",
    prepTime: "15 mins",
    ageRange: "6+ months",
    authorName: "Dr. Anand Mehta",
    authorAvatar: "/placeholder.svg",
    exclusive: true,
  },
  {
    id: "2",
    title: "Ragi Banana Pancakes",
    description:
      "Wholesome pancakes made with nutritious ragi flour and naturally sweetened with ripe bananas.",
    image: "/placeholder.svg",
    difficulty: "Medium",
    prepTime: "20 mins",
    ageRange: "12+ months",
    authorName: "Meera Patel",
    authorAvatar: "/placeholder.svg",
    exclusive: true,
  },
  {
    id: "3",
    title: "Vegetable & Lentil Soup",
    description:
      "A protein-packed soup with soft vegetables and lentils, perfect for developing palates and providing essential nutrients.",
    image: "/placeholder.svg",
    difficulty: "Easy",
    prepTime: "30 mins",
    ageRange: "8+ months",
    authorName: "Priya Sharma",
    authorAvatar: "/placeholder.svg",
    exclusive: false,
  },
  {
    id: "4",
    title: "Spinach & Cheese Muffins",
    description:
      "Tasty finger food rich in iron and calcium, great for self-feeding toddlers developing their pincer grasp.",
    image: "/placeholder.svg",
    difficulty: "Medium",
    prepTime: "25 mins",
    ageRange: "12+ months",
    authorName: "Meera Patel",
    authorAvatar: "/placeholder.svg",
    exclusive: true,
  },
  {
    id: "5",
    title: "Mango Yogurt Popsicles",
    description:
      "Refreshing frozen treats perfect for teething babies, made with yogurt for calcium and mangoes for vitamins.",
    image: "/placeholder.svg",
    difficulty: "Easy",
    prepTime: "10 mins + freezing",
    ageRange: "10+ months",
    authorName: "Ananya Patel",
    authorAvatar: "/placeholder.svg",
    exclusive: true,
  },
  {
    id: "6",
    title: "Oats & Apple Porridge",
    description:
      "A fiber-rich breakfast option with gentle spices to introduce varied flavors to your baby.",
    image: "/placeholder.svg",
    difficulty: "Easy",
    prepTime: "15 mins",
    ageRange: "8+ months",
    authorName: "Dr. Anand Mehta",
    authorAvatar: "/placeholder.svg",
    exclusive: false,
  },
];

// Mock events data
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  virtual: boolean;
}

const events: Event[] = [
  {
    id: "1",
    title: "Introducing Solids Workshop",
    date: "June 15, 2023",
    time: "10:00 AM - 11:30 AM",
    location: "Virtual",
    description:
      "A comprehensive workshop for parents ready to introduce solid foods to their babies, covering nutrition basics, safe preparation, and addressing common concerns.",
    image: "/placeholder.svg",
    virtual: true,
  },
  {
    id: "2",
    title: "Cooking Demo: Toddler-Friendly Meals",
    date: "June 22, 2023",
    time: "3:00 PM - 4:30 PM",
    location: "Kanhaa Kitchen Studio, Mumbai",
    description:
      "Join our nutritionist for a live cooking demonstration of nutritious, delicious meals that even the pickiest toddlers will enjoy.",
    image: "/placeholder.svg",
    virtual: false,
  },
  {
    id: "3",
    title: "Meet & Greet: Pediatric Nutritionist Q&A",
    date: "July 5, 2023",
    time: "11:00 AM - 12:30 PM",
    location: "Virtual",
    description:
      "Bring your nutrition questions to this virtual session with Dr. Anand Mehta, our pediatric nutrition expert.",
    image: "/placeholder.svg",
    virtual: true,
  },
  {
    id: "4",
    title: "New Product Testing: Summer Foods",
    date: "July 12, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Kanhaa Experience Center, Bangalore",
    description:
      "Exclusive opportunity for community members to try our upcoming summer products and provide feedback before official launch.",
    image: "/placeholder.svg",
    virtual: false,
  },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert(`Thank you for subscribing with: ${subscribeEmail}`);
    setSubscribeEmail("");
  };

  return (
    <Fragment>
      <BackgroundElements density="medium" />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero section */}
          <section className="bg-gradient-to-b from-[#F8D7DA] to-white pt-16 pb-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-white/80 text-primary border-0 py-1 px-4 text-sm">
                  Join Our Community
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
                  Welcome to <span className="text-primary">Kanhaa Moms</span>
                </h1>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8">
                  Connect with other parents, get exclusive recipes, early
                  product access, and expert nutrition advice for your little
                  one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="rounded-full px-8">
                    Join Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Main content with tabs */}
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="w-full md:w-auto mb-8 grid grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="recipes">Exclusive Recipes</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="stories">Member Stories</TabsTrigger>
                </TabsList>

                {/* Overview tab */}
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                        Why Join Kanhaa Moms?
                      </h2>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-[#E2D9F3] rounded-full p-2 mr-4 mt-1">
                            <svg
                              className="h-5 w-5 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                              Exclusive Recipes
                            </h3>
                            <p className="text-slate-600">
                              Access special recipes developed by our
                              nutritionists, specifically for each stage of baby
                              development.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-[#E2D9F3] rounded-full p-2 mr-4 mt-1">
                            <svg
                              className="h-5 w-5 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                              Early Product Access
                            </h3>
                            <p className="text-slate-600">
                              Try new products before they're released and
                              provide feedback to shape our development.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-[#E2D9F3] rounded-full p-2 mr-4 mt-1">
                            <svg
                              className="h-5 w-5 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                              Expert Guidance
                            </h3>
                            <p className="text-slate-600">
                              Direct access to pediatric nutritionists and child
                              development experts through events and Q&A
                              sessions.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-[#E2D9F3] rounded-full p-2 mr-4 mt-1">
                            <svg
                              className="h-5 w-5 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                              Community Support
                            </h3>
                            <p className="text-slate-600">
                              Connect with other parents facing similar
                              challenges and share experiences in a supportive
                              environment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden h-80 bg-slate-100">
                      <img
                        src="/placeholder.svg"
                        alt="Kanhaa Moms Community"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Featured testimonials */}
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                      What Our Members Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {testimonials.slice(0, 3).map((testimonial) => (
                        <Card
                          key={testimonial.id}
                          className="bg-white border-none shadow-sm"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                />
                                <AvatarFallback>
                                  {testimonial.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-semibold text-slate-800">
                                  {testimonial.name}
                                </h4>
                                <p className="text-slate-500 text-sm">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>

                            <p className="text-slate-600 mb-4">
                              "{testimonial.content}"
                            </p>

                            <div className="text-sm text-slate-500">
                              Member since {testimonial.memberSince}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Join form */}
                  <div className="bg-[#E2D9F3] rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                          Join Our Community Today
                        </h2>
                        <p className="text-slate-600 mb-6">
                          Membership is free and gives you immediate access to
                          exclusive content, events, and a supportive community
                          of parents.
                        </p>
                        <div className="flex gap-3">
                          <Button className="rounded-full">Sign Up Now</Button>
                          <Button
                            variant="outline"
                            className="rounded-full bg-white"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-slate-800 mb-6">
                          Subscribe to Our Newsletter
                        </h3>
                        <form onSubmit={handleEmailSubmit}>
                          <div className="space-y-4">
                            <div>
                              <Input
                                type="text"
                                placeholder="Your Name"
                                className="rounded-lg"
                              />
                            </div>
                            <div>
                              <Input
                                type="email"
                                placeholder="Your Email"
                                className="rounded-lg"
                                value={subscribeEmail}
                                onChange={(e) =>
                                  setSubscribeEmail(e.target.value)
                                }
                                required
                              />
                            </div>
                            <div>
                              <Button
                                type="submit"
                                className="w-full rounded-lg"
                              >
                                Subscribe
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Exclusive Recipes tab */}
                <TabsContent value="recipes">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                      Exclusive Recipes
                    </h2>
                    <p className="text-slate-600 max-w-3xl">
                      Browse our collection of nutrition-optimized recipes
                      developed specifically for each stage of your baby's
                      growth journey. Many recipes are exclusive to Kanhaa Moms
                      members.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {recipes.map((recipe) => (
                      <Card
                        key={recipe.id}
                        className="overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative">
                          {recipe.exclusive && (
                            <Badge className="absolute top-2 right-2 bg-primary border-0">
                              Member Exclusive
                            </Badge>
                          )}
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <Badge
                              variant="outline"
                              className="bg-[#F8D7DA]/50 border-0 text-slate-700"
                            >
                              {recipe.ageRange}
                            </Badge>
                            <div className="flex items-center text-sm text-slate-500">
                              <svg
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {recipe.prepTime}
                            </div>
                          </div>

                          <h3 className="font-semibold text-lg mb-2 text-slate-800">
                            {recipe.title}
                          </h3>

                          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                            {recipe.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarImage
                                  src={recipe.authorAvatar}
                                  alt={recipe.authorName}
                                />
                                <AvatarFallback>
                                  {recipe.authorName.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-slate-500">
                                By {recipe.authorName}
                              </span>
                            </div>

                            <Badge
                              variant="outline"
                              className={`
                              ${
                                recipe.difficulty === "Easy"
                                  ? "bg-green-100 text-green-800"
                                  : recipe.difficulty === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-orange-100 text-orange-800"
                              } border-0
                            `}
                            >
                              {recipe.difficulty}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button variant="outline" className="rounded-full px-8">
                      View All Recipes
                    </Button>
                  </div>
                </TabsContent>

                {/* Events tab */}
                <TabsContent value="events">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                      Upcoming Events
                    </h2>
                    <p className="text-slate-600 max-w-3xl">
                      Join our exclusive events designed to support your
                      parenting journey, including workshops, Q&A sessions with
                      experts, and product testing opportunities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {events.map((event) => (
                      <Card
                        key={event.id}
                        className="overflow-hidden border-none shadow-sm"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-7 h-full">
                          <div className="md:col-span-3 h-48 md:h-auto">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:col-span-4 p-6">
                            <div className="flex justify-between items-start mb-3">
                              <Badge
                                variant="outline"
                                className={`
                                ${event.virtual ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"} border-0
                              `}
                              >
                                {event.virtual ? "Virtual" : "In Person"}
                              </Badge>
                            </div>

                            <h3 className="font-semibold text-lg mb-2 text-slate-800">
                              {event.title}
                            </h3>

                            <div className="flex flex-col space-y-2 mb-4">
                              <div className="flex items-center text-sm text-slate-600">
                                <svg
                                  className="h-4 w-4 mr-2 text-primary"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {event.date}
                              </div>

                              <div className="flex items-center text-sm text-slate-600">
                                <svg
                                  className="h-4 w-4 mr-2 text-primary"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {event.time}
                              </div>

                              <div className="flex items-center text-sm text-slate-600">
                                <svg
                                  className="h-4 w-4 mr-2 text-primary"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                {event.location}
                              </div>
                            </div>

                            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                              {event.description}
                            </p>

                            <Button className="w-full rounded-lg">
                              Register
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button variant="outline" className="rounded-full px-8">
                      View All Events
                    </Button>
                  </div>
                </TabsContent>

                {/* Member Stories tab */}
                <TabsContent value="stories">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                      Member Stories
                    </h2>
                    <p className="text-slate-600 max-w-3xl">
                      Read inspiring stories from our community members and
                      learn from their experiences. Want to share your own
                      story? Submit it below!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {testimonials.map((testimonial) => (
                      <Card
                        key={testimonial.id}
                        className="bg-white border-none shadow-sm"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Avatar className="h-16 w-16 mr-4">
                              <AvatarImage
                                src={testimonial.avatar}
                                alt={testimonial.name}
                              />
                              <AvatarFallback>
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold text-slate-800">
                                {testimonial.name}
                              </h4>
                              <p className="text-slate-500 text-sm">
                                {testimonial.role}
                              </p>
                              <p className="text-slate-500 text-sm">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>

                          <p className="text-slate-600 mb-4">
                            "{testimonial.content}"
                          </p>

                          <div className="text-sm text-slate-500">
                            Member since {testimonial.memberSince}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Story submission form */}
                  <div className="bg-[#FEF6E4] rounded-2xl p-8 md:p-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                      Share Your Story
                    </h3>

                    <form className="max-w-3xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Name
                          </label>
                          <Input className="rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                          </label>
                          <Input type="email" className="rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Role (e.g., "Mother of 6-month-old")
                          </label>
                          <Input className="rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Location
                          </label>
                          <Input className="rounded-lg" />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Your Story
                        </label>
                        <Textarea
                          className="rounded-lg min-h-[150px]"
                          placeholder="Share your experience with Kanhaa products or as part of our community..."
                        />
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Upload a Photo (Optional)
                        </label>
                        <Input type="file" className="rounded-lg" />
                      </div>

                      <div className="text-center">
                        <Button className="rounded-full px-8" type="submit">
                          Submit Your Story
                        </Button>
                      </div>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Community partners */}
          <section className="py-12 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">
                Our Community Partners
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((partner) => (
                  <div
                    key={partner}
                    className="flex items-center justify-center bg-white p-6 rounded-lg"
                  >
                    <img
                      src="/placeholder.svg"
                      alt={`Partner ${partner}`}
                      className="h-12"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Community;
