import { Fragment } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">
                Terms & Conditions
              </h1>
              <p className="text-slate-600 font-quicksand">
                Last updated: December 2023
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Acceptance of Terms
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    By accessing and using this website, you accept and agree to
                    be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Product Information
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    We strive to provide accurate product information, but we do
                    not warrant that product descriptions or content is
                    accurate, complete, reliable, or error-free.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Orders and Payment
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    All orders are subject to acceptance and availability. We
                    reserve the right to refuse or cancel any order for any
                    reason. Payment must be received before order processing.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Shipping and Returns
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    Shipping times and costs vary by location and product.
                    Returns are accepted within 30 days of purchase in original
                    condition.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Limitation of Liability
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    Kanhaa shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages resulting from
                    your use of our products or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Contact Information
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    For questions about these Terms & Conditions, please contact
                    us at legal@kanhaa.com or through our contact page.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Terms;
