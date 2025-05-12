import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Mock blog post data
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  date: string;
  slug: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Importance of Iron in Your Baby's Diet",
    excerpt:
      "Learn why iron is crucial for your baby's development and the best food sources to include in their diet.",
    category: "Nutrition",
    coverImage: "/placeholder.svg",
    author: "Dr. Anand Mehta",
    date: "April 15, 2023",
    slug: "iron-in-baby-diet",
    tags: ["nutrition", "iron", "baby-development"],
    featured: true,
  },
  {
    id: "2",
    title: "5 Easy Homemade Finger Foods for Toddlers",
    excerpt:
      "Simple, nutritious finger food recipes that your toddler will love and that support their development.",
    category: "Recipes",
    coverImage: "/placeholder.svg",
    author: "Meera Patel",
    date: "March 28, 2023",
    slug: "finger-foods-recipes",
    tags: ["recipes", "finger-foods", "toddlers"],
  },
  {
    id: "3",
    title: "Signs Your Baby is Ready for Solid Foods",
    excerpt:
      "How to recognize when your baby is developmentally ready to start exploring solid foods.",
    category: "Parenting",
    coverImage: "/placeholder.svg",
    author: "Priya Sharma",
    date: "February 12, 2023",
    slug: "ready-for-solids",
    tags: ["first-foods", "baby-development", "parenting-tips"],
  },
  {
    id: "4",
    title: "Understanding Baby-Led Weaning: Pros and Cons",
    excerpt:
      "A comprehensive guide to baby-led weaning and how to decide if it's right for your little one.",
    category: "Nutrition",
    coverImage: "/placeholder.svg",
    author: "Dr. Anand Mehta",
    date: "January 21, 2023",
    slug: "baby-led-weaning",
    tags: ["baby-led-weaning", "first-foods", "nutrition"],
  },
  {
    id: "5",
    title: "The Impact of Organic Foods on Your Child's Health",
    excerpt:
      "Research-backed insights on how organic foods can benefit your baby's health and development.",
    category: "Nutrition",
    coverImage: "/placeholder.svg",
    author: "Dr. Anand Mehta",
    date: "December 15, 2022",
    slug: "organic-foods-impact",
    tags: ["organic", "health", "research"],
  },
  {
    id: "6",
    title: "Seasonal Fruits and Vegetables for Baby Purees",
    excerpt:
      "A seasonal guide to selecting the best fruits and vegetables for nutritious baby purees.",
    category: "Recipes",
    coverImage: "/placeholder.svg",
    author: "Meera Patel",
    date: "November 9, 2022",
    slug: "seasonal-purees",
    tags: ["recipes", "purees", "seasonal"],
  },
  {
    id: "7",
    title: "Managing Food Allergies in Infants and Toddlers",
    excerpt:
      "Essential guidance for introducing potential allergens and managing food allergies in young children.",
    category: "Health",
    coverImage: "/placeholder.svg",
    author: "Dr. Anand Mehta",
    date: "October 27, 2022",
    slug: "food-allergies",
    tags: ["allergies", "health", "safety"],
  },
  {
    id: "8",
    title: "Creating a Positive Mealtime Environment for Your Baby",
    excerpt:
      "Tips for making mealtimes enjoyable, stress-free, and beneficial for your baby's relationship with food.",
    category: "Parenting",
    coverImage: "/placeholder.svg",
    author: "Priya Sharma",
    date: "September 14, 2022",
    slug: "positive-mealtime",
    tags: ["parenting-tips", "mealtime", "food-relationship"],
  },
];

// Categories for filtering
const categories = ["All", "Nutrition", "Recipes", "Parenting", "Health"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts based on active category and search term
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    return matchesCategory && (searchTerm === "" || matchesSearch);
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <Fragment>
      <BackgroundElements density="low" />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero section */}
          <section className="bg-[#E2D9F3] py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Kanhaa Blog
              </h1>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore nutrition tips, recipes, and parenting advice to support
                your baby's healthy development.
              </p>
            </div>
          </section>

          {/* Featured post */}
          {featuredPosts.length > 0 && (
            <section className="py-12 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">
                  Featured Article
                </h2>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img
                        src={featuredPosts[0].coverImage}
                        alt={featuredPosts[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <Badge className="mb-3 bg-[#F8D7DA] hover:bg-[#F8D7DA] text-slate-700">
                        {featuredPosts[0].category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">
                        {featuredPosts[0].title}
                      </h3>
                      <p className="text-slate-600 mb-6">
                        {featuredPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">
                          {featuredPosts[0].date} • By {featuredPosts[0].author}
                        </span>
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full"
                        >
                          <Link to={`/blog/${featuredPosts[0].slug}`}>
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Blog list section */}
          <section className="py-12 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              {/* Search and filter */}
              <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10 rounded-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Tabs
                  value={activeCategory}
                  onValueChange={setActiveCategory}
                  className="w-full md:w-auto"
                >
                  <TabsList className="w-full md:w-auto">
                    {categories.map((category) => (
                      <TabsTrigger key={category} value={category}>
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Blog grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    No articles found
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchTerm("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <Button
                    variant="outline"
                    className="mx-2 rounded-full px-6"
                    disabled
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    className="mx-2 rounded-full w-10 h-10 bg-primary text-white"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    className="mx-2 rounded-full w-10 h-10"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    className="mx-2 rounded-full w-10 h-10"
                  >
                    3
                  </Button>
                  <Button variant="outline" className="mx-2 rounded-full px-6">
                    Next
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter section */}
          <section className="py-16 px-4 bg-[#FEF6E4]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-slate-600 mb-8">
                Get the latest articles, recipes, and parenting tips delivered
                straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-full"
                />
                <Button className="rounded-full whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6">
        <Badge className="mb-3" variant="outline">
          {post.category}
        </Badge>
        <h3 className="font-semibold text-lg mb-2 text-slate-800 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">{post.date}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="text-primary text-sm font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
