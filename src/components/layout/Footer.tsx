/**
 * Copyright © 2023 Kanhaa Baby. All rights reserved.
 * This file is part of the Kanhaa Baby website.
 * Unauthorized copying or redistribution of this file is strictly prohibited.
 */

import { Link } from "react-router-dom";

const Footer = () => {
  const navigation = {
    shop: [
      { name: "0-6 Months", href: "/shop?age=0-6" },
      { name: "6-12 Months", href: "/shop?age=6-12" },
      { name: "12-24 Months", href: "/shop?age=12-24" },
      { name: "Cereals", href: "/shop?type=cereals" },
      { name: "Finger Foods", href: "/shop?type=finger-foods" },
      { name: "Purees", href: "/shop?type=purees" },
    ],
    support: [
      { name: "FAQ", href: "/faq" },
      { name: "Shipping & Returns", href: "/faq#shipping" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Community", href: "/community" },
      { name: "Careers", href: "/careers" },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FEF6E4] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-[#E2D9F3] rounded-xl p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Join the Kanhaa Family
              </h3>
              <p className="text-slate-600">
                Subscribe for nutrition tips, early access to new products, and
                exclusive offers.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-full border-slate-200 mr-2"
                />
                <button
                  type="submit"
                  className="bg-[#1a5de6] text-white rounded-full px-4 py-2 font-medium"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold tracking-tight">Kanhaa</span>
              <span className="ml-1 text-xs bg-[#F8D7DA] text-[#6E6E6E] px-1.5 py-0.5 rounded-md">
                Baby
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Healthy, organic, zero-sugar, zero-preservative baby food and
              snacks for your growing little one.
            </p>
            <div className="flex">
              <button
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
              <button
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center ml-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </button>
              <button
                aria-label="Twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center ml-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Shop</h4>
            <ul>
              {navigation.shop.map((item) => (
                <li key={item.name} className="text-sm text-slate-600 mb-2">
                  <Link to={item.href} className="hover:text-[#1a5de6]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">
              Support
            </h4>
            <ul>
              {navigation.support.map((item) => (
                <li key={item.name} className="text-sm text-slate-600 mb-2">
                  <Link to={item.href} className="hover:text-[#1a5de6]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">
              Company
            </h4>
            <ul>
              {navigation.company.map((item) => (
                <li key={item.name} className="text-sm text-slate-600 mb-2">
                  <Link to={item.href} className="hover:text-[#1a5de6]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-600 mb-4 md:mb-0">
            © {currentYear} Kanhaa Baby Foods Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-sm text-slate-600 hover:text-[#1a5de6]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-slate-600 hover:text-[#1a5de6]"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-sm text-slate-600 hover:text-[#1a5de6]"
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
