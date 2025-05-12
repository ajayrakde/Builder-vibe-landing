import React from "react";
import { Link } from "react-router-dom";
import { CloudSun } from "lucide-react";

export default function MyComponent(props) {
  return (
    <div
      builder-id="builder-eb89bb4a0288443c8c3e283a23083517"
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
              {["Home", "Shop", "About", "Blog", "FAQ"].map((item) => (
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
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div
          builder-id="builder-4ca6eae8eaf54bb2869ec6f7da0a2415"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ opacity: 1 }}
        >
          <div className="text-center">
            <h1 className="font-quicksand text-[#1a5de6] font-bold text-4xl mb-6">
              Welcome to Kanhaa
            </h1>
            <p className="font-quicksand text-lg mb-8 max-w-2xl mx-auto">
              Discover our range of nutritious, organic baby foods crafted with
              love for every stage of your baby's growth journey.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#1a5de6] text-white font-quicksand py-2 px-6 rounded-full font-medium hover:bg-[#1a5de6]/80 transition">
                Shop Now
              </button>
              <button className="border border-[#1a5de6] text-[#1a5de6] font-quicksand py-2 px-6 rounded-full font-medium hover:bg-[#1a5de6]/10 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mt-16">
            <h2 className="font-quicksand font-bold text-2xl mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow-sm p-4 border border-slate-100"
                >
                  <div className="h-48 bg-slate-100 rounded-lg mb-4"></div>
                  <h3 className="font-quicksand font-semibold text-lg mb-2">
                    Product {item}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Nutritious and delicious baby food made with organic
                    ingredients.
                  </p>
                  <button className="w-full bg-[#1a5de6] text-white font-quicksand py-2 rounded-full font-medium hover:bg-[#1a5de6]/80 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-quicksand text-[#1a5de6] font-bold text-xl">
                Kanhaa
              </span>
              <p className="text-slate-600 text-sm mt-1">
                © 2023 All rights reserved
              </p>
            </div>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-600 hover:text-[#1a5de6] transition font-quicksand"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
