import { Fragment, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ENABLE_MOCKS, STRAPI_URL } from "@/lib/features";

const Blog = () => {
  // Sample blog posts data
  const defaultPosts = [
    {
      id: 1,
      title: "The Importance of Iron in Your Baby's Diet",
      excerpt:
        "Learn why iron is crucial for your baby's development and the best food sources to include in their diet.",
      image: "/placeholder.svg",
      category: "Nutrition",
      date: "April 15, 2023",
      author: "Dr. Anand Mehta",
      slug: "iron-in-baby-diet",
    },
    {
      id: 2,
      title: "5 Easy Homemade Finger Foods for Toddlers",
      excerpt:
        "Simple, nutritious finger food recipes that your toddler will love and that support their development.",
      image: "/placeholder.svg",
      category: "Recipes",
      date: "March 28, 2023",
      author: "Meera Patel",
      slug: "finger-foods-recipes",
    },
    {
      id: 3,
      title: "Signs Your Baby is Ready for Solid Foods",
      excerpt:
        "How to recognize when your baby is developmentally ready to start exploring solid foods.",
      image: "/placeholder.svg",
      category: "Parenting",
      date: "February 12, 2023",
      author: "Priya Sharma",
      slug: "ready-for-solids",
    },
    {
      id: 4,
      title: "Understanding Baby-Led Weaning",
      excerpt:
        "A comprehensive guide to baby-led weaning and how it can benefit your child's relationship with food.",
      image: "/placeholder.svg",
      category: "Nutrition",
      date: "January 30, 2023",
      author: "Dr. Anand Mehta",
      slug: "baby-led-weaning",
    },
    {
      id: 5,
      title: "Seasonal Fruits and Vegetables for Baby Food",
      excerpt:
        "Why seasonal produce makes the best baby food and how to incorporate it into your baby's diet.",
      image: "/placeholder.svg",
      category: "Nutrition",
      date: "January 15, 2023",
      author: "Meera Patel",
      slug: "seasonal-produce-baby-food",
    },
    {
      id: 6,
      title: "Managing Picky Eating in Toddlers",
      excerpt:
        "Strategies and tips for parents dealing with picky eaters and how to ensure proper nutrition.",
      image: "/placeholder.svg",
      category: "Parenting",
      date: "December 8, 2022",
      author: "Priya Sharma",
      slug: "picky-eating-toddlers",
    },
  ];

  const [blogPosts, setBlogPosts] = useState(defaultPosts);

  useEffect(() => {
    if (!ENABLE_MOCKS && STRAPI_URL) {
      fetch(`${STRAPI_URL}/posts`)
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json.data)) {
            const posts = json.data.map((item: any) => ({
              id: item.id,
              title: item.attributes.title,
              excerpt: item.attributes.excerpt,
              image: item.attributes.image?.url || "/placeholder.svg",
              category: item.attributes.category || "",
              date: item.attributes.publishedAt || "",
              author: item.attributes.author || "",
              slug: item.attributes.slug,
            }));
            setBlogPosts(posts);
          }
        })
        .catch((err) => console.error("Failed to load posts from Strapi", err));
    }
  }, []);

  return (
    <Fragment>
      <BackgroundElements density="low" />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div />
            </div>
          </section>

          <section className="bg-slate-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 justify-between mb-10">
                <div className="relative">
                  <h2 className="text-2xl font-bold text-slate-800">
                    Latest Articles
                  </h2>
                </div>

                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      All
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Nutrition
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Recipes
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Parenting
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <Badge
                          variant="outline"
                          className={
                            post.category === "Nutrition"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : post.category === "Recipes"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-purple-100 text-purple-800 hover:bg-purple-100"
                          }
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-slate-800">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          {post.date} • By {post.author}
                        </span>
                        <Button
                          variant="outline"
                          className="text-sm rounded-full"
                          size="sm"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <div className="flex items-center">
                  <Button variant="outline" className="rounded-full mx-2">
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full h-10 w-10 p-0 mx-1"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full h-10 w-10 p-0 mx-1 bg-primary text-white"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full h-10 w-10 p-0 mx-1"
                  >
                    3
                  </Button>
                  <Button variant="outline" className="rounded-full mx-2">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-4" />

          <section className="bg-[#FEF6E4] py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-slate-600 mb-8">
                Get expert tips, nutrition advice, and delicious recipes
                delivered straight to your inbox. Stay updated with the latest
                information on baby nutrition and parenting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full"
                />
                <Button className="rounded-full">Subscribe</Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Blog;
