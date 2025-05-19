import React from "react";

export default function MyComponent(props) {
  return (
    <div
      builder-id="builder-863fc346565745f1b3cdbad9d7ccd982"
      className="pointer-events-auto text-black text-base font-normal leading-normal bg-transparent font-quicksand min-h-screen flex flex-col"
      style={{ fontFamily: "Quicksand, sans-serif" }}
    >
      <header className="bg-white/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center gap-1">
                <span className="font-quicksand text-[#1a5de6] font-bold text-[30px] leading-9">
                  Kanhaa
                </span>
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Shop", "About", "Blog", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-quicksand font-medium transition rounded-full px-3 py-1"
                  >
                    {item}
                  </a>
                ),
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a5de6] mb-6 font-quicksand">
              Welcome to Kanhaa
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 font-quicksand">
              Discover our range of nutritious, organic baby foods crafted with
              love for every stage of your baby's growth journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/shop"
                className="bg-[#1a5de6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1a5de6]/90 transition-colors font-quicksand"
              >
                Shop Now
              </a>
              <a
                href="/about"
                className="border border-[#1a5de6] text-[#1a5de6] px-6 py-3 rounded-full font-medium hover:bg-[#1a5de6]/10 transition-colors font-quicksand"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
              >
                <h2 className="text-xl font-semibold mb-3 text-slate-800">
                  Feature {item}
                </h2>
                <p className="text-slate-600 mb-4">
                  This is a simple description about feature {item} and how it
                  can benefit your baby.
                </p>
                <a
                  href="#"
                  className="text-[#1a5de6] font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="font-quicksand text-[#1a5de6] font-bold text-xl">
                Kanhaa
              </span>
              <p className="text-slate-600 text-sm mt-2">
                © 2023 All rights reserved
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-600 hover:text-[#1a5de6] transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-[#1a5de6] transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-[#1a5de6] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
