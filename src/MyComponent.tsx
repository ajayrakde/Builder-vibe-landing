import React from "react";
import { Link } from "react-router-dom";
import { CloudSun } from "lucide-react";

export default function MyComponent(props) {
  return (
    <div
      builder-id="builder-da64be7cd43a4b30a240b8bd7fef71a4"
      className="text-black text-base font-normal leading-6 bg-transparent font-quicksand min-h-screen flex flex-col"
    >
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-1">
                <CloudSun className="h-7 w-7 text-[#1a5de6] animate-pulse" />
                <span className="font-quicksand text-[#1a5de6] font-bold text-[30px] leading-9">
                  Kanhaa
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Shop", "About", "Blog", "FAQ", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-quicksand font-medium transition rounded-full px-3 py-1"
                    style={{
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    {item}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a5de6] mb-6 font-quicksand">
              Welcome to Kanhaa
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 font-quicksand">
              Discover our range of nutritious, organic baby foods crafted with
              love for every stage of your baby's growth journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="bg-[#1a5de6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a5de6]/90 transition-colors font-quicksand"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="border border-[#1a5de6] text-[#1a5de6] px-6 py-3 rounded-full font-medium hover:bg-[#1a5de6]/10 transition-colors font-quicksand"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Featured Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center font-quicksand">
              Shop by Age
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "0-6 Months",
                  image: "/placeholder.svg",
                  link: "/shop?age=0-6",
                },
                {
                  title: "6-12 Months",
                  image: "/placeholder.svg",
                  link: "/shop?age=6-12",
                },
                {
                  title: "12-24 Months",
                  image: "/placeholder.svg",
                  link: "/shop?age=12-24",
                },
                {
                  title: "24+ Months",
                  image: "/placeholder.svg",
                  link: "/shop?age=24+",
                },
              ].map((category) => (
                <Link
                  key={category.title}
                  to={category.link}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-center group"
                >
                  <div className="h-40 mb-4 bg-slate-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 font-quicksand">
                    {category.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center font-quicksand">
              Bestselling Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden"
                >
                  <div className="h-48 bg-slate-50">
                    <img
                      src="/placeholder.svg"
                      alt={`Product ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2 mb-2">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        6-12 months
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Organic
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 text-lg mb-1 font-quicksand">
                      Organic Baby Food Product {item}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 font-quicksand">
                      Nutritious and delicious organic baby food made with
                      premium ingredients.
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-semibold text-[#1a5de6] font-quicksand">
                          ₹249
                        </span>
                        <span className="text-sm text-slate-500 line-through font-quicksand">
                          ₹299
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#1a5de6] text-white py-2 rounded-full font-medium hover:bg-[#1a5de6]/90 transition-colors font-quicksand">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F5F9FF] rounded-3xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center font-quicksand">
              Why Choose Kanhaa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "100% Organic",
                  description:
                    "All our ingredients are certified organic, with no pesticides or harmful chemicals.",
                  icon: "🌱",
                },
                {
                  title: "Nutritionist Approved",
                  description:
                    "Our recipes are developed by pediatric nutritionists for optimal development.",
                  icon: "🥦",
                },
                {
                  title: "No Added Sugar",
                  description:
                    "We never add refined sugar or artificial sweeteners to our products.",
                  icon: "🍯",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-2xl text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 font-quicksand">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-quicksand">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-1 mb-2">
                <CloudSun className="h-5 w-5 text-[#1a5de6]" />
                <span className="font-quicksand text-[#1a5de6] font-bold text-xl">
                  Kanhaa
                </span>
              </div>
              <p className="text-slate-600 text-sm font-quicksand">
                © 2023 All rights reserved
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 font-quicksand">
                  Shop
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/shop"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      By Age
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      By Category
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 font-quicksand">
                  About
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 font-quicksand">
                  Help
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/faq"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                    >
                      Shipping
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3 font-quicksand">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-slate-600 hover:text-[#1a5de6] transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-[#1a5de6] transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-[#1a5de6] transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Background decoration - displayed but at lowest z-index */}
      <div
        data-loc="/app/code/src/components/decorative/BackgroundElements.tsx:279:5"
        builder-id="builder-cbe44ae8c0084184a3faeed3123b9b33"
        className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      >
        {/* Simple decorative elements instead of complex SVGs */}
        <div className="absolute left-[10%] top-[15%] w-12 h-12 bg-slate-200 opacity-20 rounded-full"></div>
        <div className="absolute right-[20%] top-[25%] w-16 h-16 bg-blue-200 opacity-20 rounded-full"></div>
        <div className="absolute left-[30%] bottom-[20%] w-8 h-8 bg-yellow-200 opacity-20 rounded-full"></div>
        <div className="absolute right-[15%] bottom-[35%] w-10 h-10 bg-purple-200 opacity-20 rounded-full"></div>
      </div>
    </div>
  );
}
