import { Fragment } from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AgeBasedSection from "@/components/home/AgeBasedSection";
import ValueProposition from "@/components/home/ValueProposition";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Fragment>
      <BackgroundElements density="medium" />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <HeroCarousel />

          <AgeBasedSection />

          <FeaturedProducts />

          <ValueProposition />

          {/* Community Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E2D9F3]">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Join the Kanhaa Moms Community
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                Connect with other parents, share your experiences, get early
                access to new products, and receive exclusive recipes and
                nutrition tips.
              </p>
              <Button size="lg" className="rounded-full px-8">
                <Link to="/community">Join Now</Link>
              </Button>
            </div>
          </section>

          <TestimonialsSection />

          {/* Blog Preview Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Latest from Our Blog
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Discover parenting tips, nutrition advice, and recipes for
                  your little one.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="/placeholder.svg"
                    alt="Blog post"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Nutrition
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">
                      The Importance of Iron in Your Baby's Diet
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Learn why iron is crucial for your baby's development and
                      the best food sources to include in their diet.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        April 15, 2023
                      </span>
                      <Link
                        to="/blog/iron-in-baby-diet"
                        className="text-primary text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="/placeholder.svg"
                    alt="Blog post"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Recipes
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">
                      5 Easy Homemade Finger Foods for Toddlers
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Simple, nutritious finger food recipes that your toddler
                      will love and that support their development.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        March 28, 2023
                      </span>
                      <Link
                        to="/blog/finger-foods-recipes"
                        className="text-primary text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="/placeholder.svg"
                    alt="Blog post"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        Parenting
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">
                      Signs Your Baby is Ready for Solid Foods
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      How to recognize when your baby is developmentally ready
                      to start exploring solid foods.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        February 12, 2023
                      </span>
                      <Link
                        to="/blog/ready-for-solids"
                        className="text-primary text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" asChild className="rounded-full">
                  <Link to="/blog">View All Articles</Link>
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

export default Index;
