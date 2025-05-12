import { Fragment } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <Fragment>
      <BackgroundElements density="low" />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* FAQ Content */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-10 text-center">
                About Our Products
              </h2>

              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    What age groups are your products suitable for?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    <p className="mb-2">
                      Our products are carefully designed for different
                      developmental stages:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Stage 1 (4-6 months): Single-ingredient purées ideal for
                        introducing solids
                      </li>
                      <li>
                        Stage 2 (6-8 months): Textured blends with multiple
                        ingredients
                      </li>
                      <li>
                        Stage 3 (8-12 months): Chunkier textures with complex
                        flavor combinations
                      </li>
                      <li>
                        Toddler (12+ months): Nutritious snacks and meals for
                        growing toddlers
                      </li>
                    </ul>
                    <p className="mt-2">
                      Each product is clearly labeled with recommended age
                      ranges, but remember that every child develops at their
                      own pace.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Are all your products organic?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Yes, 100% of our ingredients are certified organic. We work
                    directly with farms that follow strict organic practices,
                    avoiding synthetic pesticides, fertilizers, and GMOs. Our
                    organic certification is displayed on every product and we
                    maintain full transparency about our sourcing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How do you preserve your products without artificial
                    preservatives?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We use a combination of gentle pasteurization and
                    refrigeration to keep our products fresh naturally. For our
                    shelf-stable options, we use a pressure-cooking process that
                    preserves nutrients while extending shelf life. We never add
                    artificial preservatives, colors, or flavors to any of our
                    products.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do your products contain allergens?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We offer many allergen-free options, but some products may
                    contain allergens like dairy or tree nuts. All potential
                    allergens are clearly labeled on our packaging and product
                    descriptions. Our production facility has strict protocols
                    to prevent cross-contamination, but if your child has severe
                    allergies, please consult with your pediatrician before
                    trying our products.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How long do your products stay fresh?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    <p className="mb-2">
                      Our freshness timeframes vary by product type:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Fresh refrigerated pouches: 14 days when refrigerated
                      </li>
                      <li>
                        Shelf-stable pouches: 12 months sealed (refrigerate
                        after opening and use within 24 hours)
                      </li>
                      <li>
                        Freeze-dried snacks: 10 months when stored in a cool,
                        dry place
                      </li>
                    </ul>
                    <p className="mt-2">
                      Always check the "best by" date on each product and follow
                      the storage instructions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="text-2xl font-bold text-slate-800 mb-10 text-center">
                Ordering & Subscription
              </h2>

              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="shipping-1">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How does your subscription service work?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Our subscription service delivers fresh products to your
                    door on a schedule that works for you. You can choose
                    weekly, bi-weekly, or monthly deliveries. Subscriptions come
                    with a 10% discount on all products, and you can pause,
                    modify, or cancel your subscription at any time without
                    penalties. You'll receive an email notification before each
                    delivery with time to make changes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping-2">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Where do you ship to?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We currently ship to all 50 U.S. states and select Canadian
                    provinces. International shipping is available for
                    shelf-stable products only. For fresh products, we use
                    refrigerated shipping to ensure they arrive in perfect
                    condition. Enter your zip code at checkout to confirm
                    delivery availability and shipping times for your area.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping-3">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    What is your return policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Due to the perishable nature of our products, we cannot
                    accept returns. However, we stand behind our quality 100%.
                    If you're not satisfied with your order for any reason,
                    please contact our customer service team within 7 days of
                    delivery, and we'll make it right with a replacement or
                    refund.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping-4">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How are your products packaged for shipping?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We use eco-friendly insulation and biodegradable ice packs
                    to keep fresh products cold during transit. Our packaging is
                    designed to minimize environmental impact while ensuring
                    product safety. All packaging materials are either
                    recyclable or compostable, with clear instructions printed
                    on each component.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 className="text-2xl font-bold text-slate-800 mb-10 text-center">
                Nutrition & Ingredients
              </h2>

              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="nutrition-1">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How do you ensure nutritional adequacy for growing babies?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    Our recipes are developed in collaboration with pediatric
                    nutritionists to ensure they provide appropriate nutrients
                    for each developmental stage. We carefully balance
                    ingredients to provide essential vitamins, minerals, healthy
                    fats, and protein in proportions suitable for growing
                    babies. Our nutrition information is transparent and
                    comprehensive, allowing parents to make informed choices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nutrition-2">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Do you add any sugars or salt to your products?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We never add refined sugars or salt to our baby food
                    products. Any sweetness comes naturally from fruits,
                    vegetables, and other whole food ingredients. For our
                    toddler snacks, we may use minimal amounts of natural
                    sweeteners like date paste or fruit juices, but always at
                    appropriate levels for developing taste preferences.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nutrition-3">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    Where do you source your ingredients?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We prioritize partnerships with local organic farms whenever
                    possible. All our produce comes from certified organic farms
                    that meet our strict quality standards. We conduct regular
                    farm visits and maintain close relationships with our
                    suppliers to ensure the highest quality ingredients. We're
                    transparent about our sourcing and regularly update our
                    website with information about our farm partners.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nutrition-4">
                  <AccordionTrigger className="text-lg font-medium text-left">
                    How do you test for heavy metals and other contaminants?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    We take food safety extremely seriously. Every batch of our
                    products undergoes rigorous testing for heavy metals,
                    pesticides, and microbiological contaminants by independent,
                    certified laboratories. We maintain strict testing protocols
                    that exceed industry standards, and we never release a
                    product that doesn't meet our safety criteria. We publish
                    our testing results in quarterly transparency reports
                    available on our website.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Still Have Questions CTA */}
          <section className="py-16 px-4 bg-[#FEF6E4]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-slate-600 mb-8">
                We're always happy to help! Reach out to our customer care team
                and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <a href="mailto:support@kanhaa.com">Email Support</a>
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

export default FAQ;
