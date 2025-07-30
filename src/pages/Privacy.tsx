import { Fragment } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">
                Privacy Policy
              </h1>
              <p className="text-slate-600 font-quicksand">
                Last updated: December 2023
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Information We Collect
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    We collect information you provide directly to us, such as when you create an account,
                    make a purchase, or contact us for support. This may include your name, email address,
                    phone number, billing and shipping addresses, and payment information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    How We Use Your Information
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    We use your information to process orders, communicate with you about your purchases,
                    provide customer support, send you marketing communications (with your consent),
                    and improve our products and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Information Sharing
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    We do not sell, trade, or otherwise transfer your personal information to third parties
                    without your consent, except as described in this policy. We may share information with
                    service providers who assist us in operating our website and conducting our business.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Data Security
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    We implement appropriate security measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Contact Us
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    If you have any questions about this Privacy Policy, please contact us at
                    privacy@kanhaa.com or through our contact page.
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

export default Privacy;
