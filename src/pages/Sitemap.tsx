import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sitemap = () => {
  const siteLinks = {
    main: [
      { name: "Home", href: "/" },
      { name: "Shop", href: "/shop" },
      { name: "Community", href: "/community" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
    ],
    account: [
      { name: "Sign In / Sign Up", href: "/auth" },
      { name: "Profile", href: "/profile" },
      { name: "Cart", href: "/cart" },
      { name: "Checkout", href: "/checkout" },
      { name: "Track Order", href: "/track-order" },
    ],
    support: [
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Careers", href: "/careers" },
    ]
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-4 font-quicksand">
                Sitemap
              </h1>
              <p className="text-slate-600 font-quicksand">
                Find all pages and sections of our website
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-quicksand">Main Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {siteLinks.main.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-[#1a5de6] hover:underline font-quicksand"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-quicksand">Account & Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {siteLinks.account.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-[#1a5de6] hover:underline font-quicksand"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-quicksand">Support & Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {siteLinks.support.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-[#1a5de6] hover:underline font-quicksand"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Sitemap;
