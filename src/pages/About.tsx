import { Fragment } from "react";
import { Layout } from "@/components/layout/Layout";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <BackgroundElements density="low" />
      <Layout showBackground={false}>
        <main className="flex-grow">
          {/* Our Story section */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 font-quicksand">
                    Our Story
                  </h2>
                  <p className="text-slate-600 mb-4 font-quicksand">
                    Kanhaa was born out of a mother's struggle to find truly
                    healthy options for her baby. After reading countless
                    ingredient labels and being disappointed by the hidden
                    sugars, preservatives, and lack of genuine nutrition in
                    store-bought baby foods, our founder Priya decided to create
                    what was missing.
                  </p>
                  <p className="text-slate-600 mb-4 font-quicksand">
                    Starting in her kitchen with organic ingredients sourced
                    from local farms, she developed recipes that her baby not
                    only loved but that provided real nutrition for critical
                    developmental stages.
                  </p>
                  <p className="text-slate-600 font-quicksand">
                    What began as a personal mission soon grew into Kanhaa, as
                    other parents discovered and fell in love with our honest
                    approach to baby nutrition. Today, we continue that
                    commitment to quality, nutrition, and transparency in
                    everything we make.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <div className="rounded-2xl overflow-hidden h-80 bg-slate-100 flex items-center justify-center">
                    <img
                      src="/placeholder.svg"
                      alt="Our founder with her baby"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values section */}
          <section className="py-16 px-4 bg-[#FEF6E4]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center font-quicksand">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#D4EDDA] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M7.5 12L10.5 15L16.5 9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 font-quicksand">
                    Honesty & Transparency
                  </h3>
                  <p className="text-slate-600 font-quicksand">
                    We believe parents deserve complete transparency about what
                    goes into their baby's food. Our labels are clear and
                    truthful, with no hidden ingredients or misleading claims.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#F8D7DA] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 font-quicksand">
                    Quality Without Compromise
                  </h3>
                  <p className="text-slate-600 font-quicksand">
                    We source only the finest organic ingredients and maintain
                    strict quality standards throughout our production process.
                    If we wouldn't feed it to our own children, we won't make it
                    for yours.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#E2D9F3] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 font-quicksand">
                    Parent Partnership
                  </h3>
                  <p className="text-slate-600 font-quicksand">
                    We see ourselves as partners in your parenting journey. Our
                    community of Kanhaa parents helps guide our product
                    development, and we're committed to providing resources
                    beyond just food products.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center font-quicksand">
                Our Process
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#D4EDDA] rounded-full flex items-center justify-center text-lg font-bold font-quicksand">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 font-quicksand">
                    Sourcing
                  </h3>
                  <p className="text-slate-600 text-sm font-quicksand">
                    We partner with certified organic farms to source the
                    freshest, most nutritious ingredients.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#F8D7DA] rounded-full flex items-center justify-center text-lg font-bold font-quicksand">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 font-quicksand">
                    Recipe Development
                  </h3>
                  <p className="text-slate-600 text-sm font-quicksand">
                    Our team of nutritionists and food scientists create
                    age-appropriate recipes optimized for baby development.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#E2D9F3] rounded-full flex items-center justify-center text-lg font-bold font-quicksand">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 font-quicksand">
                    Quality Production
                  </h3>
                  <p className="text-slate-600 text-sm font-quicksand">
                    Our small-batch production preserves nutrients and ensures
                    the highest quality standards.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#FEF6E4] rounded-full flex items-center justify-center text-lg font-bold font-quicksand">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 font-quicksand">
                    Testing & Safety
                  </h3>
                  <p className="text-slate-600 text-sm font-quicksand">
                    Every batch undergoes rigorous testing for quality, safety,
                    and nutritional content before reaching your home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Meet the Team section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center font-quicksand">
                Meet Our Team
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Priya Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-slate-800 font-quicksand">
                    Priya Sharma
                  </h3>
                  <p className="text-primary font-medium mb-2 font-quicksand">Founder & CEO</p>
                  <p className="text-slate-600 text-sm font-quicksand">
                    Mother of two, passionate about nutrition and providing the
                    best start for babies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Dr. Anand Mehta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-slate-800 font-quicksand">
                    Dr. Anand Mehta
                  </h3>
                  <p className="text-primary font-medium mb-2 font-quicksand">
                    Nutrition Director
                  </p>
                  <p className="text-slate-600 text-sm font-quicksand">
                    Pediatric nutritionist with 15 years of experience in child
                    development and nutrition.
                  </p>
                </div>

                <div className="text-center">
                  <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Meera Patel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-slate-800 font-quicksand">
                    Meera Patel
                  </h3>
                  <p className="text-primary font-medium mb-2 font-quicksand">
                    Head of Product
                  </p>
                  <p className="text-slate-600 text-sm font-quicksand">
                    Food scientist specialized in developing nutritious,
                    delicious baby food formulations.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button asChild className="rounded-full px-8 font-quicksand">
                  <Link to="/careers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 px-4 bg-[#E2D9F3]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 font-quicksand">
                Have Questions?
              </h2>
              <p className="text-slate-600 mb-8 font-quicksand">
                We're always happy to hear from parents and answer any questions
                about our products, ingredients, or philosophy.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 font-quicksand">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default About;