import { Fragment } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">
                Careers at Kanhaa
              </h1>
              <p className="text-slate-600 font-quicksand">
                Join our mission to provide healthy nutrition for babies everywhere
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Why Work With Us?
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    At Kanhaa, we're passionate about creating the best possible nutrition for babies.
                    Join a team that values innovation, quality, and making a real difference in families' lives.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Current Openings
                  </h2>
                  <p className="text-slate-600 font-quicksand">
                    We're always looking for talented individuals who share our passion for baby nutrition and quality products.
                    Check back soon for current job openings or send us your resume to careers@kanhaa.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3 font-quicksand">
                    Get in Touch
                  </h2>
                  <p className="text-slate-600 font-quicksand mb-4">
                    Interested in joining our team? We'd love to hear from you!
                  </p>
                  <Button className="font-quicksand">
                    Send Your Resume
                  </Button>
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

export default Careers;
