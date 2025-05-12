import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FEF6E4] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="bg-[#E2D9F3] rounded-2xl p-6 md:p-10 mb-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Join the Kanhaa Family
              </h3>
              <p className="text-slate-600 mb-6 md:mb-0">
                Subscribe for nutrition tips, early access to new products, and
                exclusive offers.
              </p>
            </div>
            <div className="md:w-1/3">
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full bg-white"
                  required
                />
                <Button type="submit" className="rounded-full">
                  Join
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl tracking-tight text-slate-800">
                Kanhaa
              </span>
              <span className="ml-1 text-xs bg-[#F8D7DA] text-[#6E6E6E] px-1.5 py-0.5 rounded-md">
                Baby
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Healthy, organic, zero-sugar, zero-preservative baby food and
              snacks for your growing little one.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop?age=0-6"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  0-6 Months
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?age=6-12"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  6-12 Months
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?age=12-24"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  12-24 Months
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?type=cereals"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Cereals
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?type=finger-foods"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Finger Foods
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?type=purees"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Purees
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Kanhaa Moms
                </Link>
              </li>
              <li>
                <Link
                  to="/ingredients"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Our Ingredients
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-slate-600 hover:text-slate-900 text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kanhaa Baby Food. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              Terms
            </Link>
            <Link
              to="/sitemap"
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
