import React from "react";

export default function MyComponent(props) {
  return (
    <div
      builder-id="builder-7188bda60a934fddb7d6ef35ca330bb3"
      className="text-black text-base font-normal leading-6 bg-transparent font-quicksand min-h-screen flex flex-col"
    >
      {/* Background decorative elements with reduced complexity */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-skyBlue-deep via-skyBlue to-skyBlue-light"></div>

        {/* Simple clouds */}
        <div className="absolute left-[10%] top-[15%] w-32 h-16 bg-white opacity-80 rounded-full"></div>
        <div className="absolute left-[8%] top-[17%] w-40 h-20 bg-white opacity-80 rounded-full"></div>
        <div className="absolute right-[15%] top-[10%] w-40 h-20 bg-white opacity-70 rounded-full"></div>

        {/* Simple decorative shapes */}
        <div className="absolute left-[30%] bottom-[20%] w-8 h-8 bg-yellow-200 opacity-20 rounded-full"></div>
        <div className="absolute right-[20%] top-[25%] w-16 h-16 bg-blue-200 opacity-20 rounded-full"></div>
        <div className="absolute right-[15%] bottom-[35%] w-10 h-10 bg-purple-200 opacity-20 rounded-full"></div>
      </div>

      {/* Actual content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Header */}
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

        {/* Main content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a5de6] mb-6 font-quicksand">
                Welcome to Kanhaa
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8 font-quicksand">
                Discover our range of nutritious, organic baby foods crafted
                with love for every stage of your baby's growth journey.
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

            {/* Featured content section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="h-40 mb-4 bg-slate-50 rounded-xl flex items-center justify-center">
                    <img
                      src="/placeholder.svg"
                      alt={`Featured item ${item}`}
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 font-quicksand">
                    Featured Product {item}
                  </h3>
                  <p className="text-slate-600 font-quicksand mb-4">
                    A brief description of this featured product or content
                    item.
                  </p>
                  <a
                    href="/shop"
                    className="text-[#1a5de6] font-medium hover:underline font-quicksand"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-50 py-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-1 mb-2">
                  <span className="font-quicksand text-[#1a5de6] font-bold text-xl">
                    Kanhaa
                  </span>
                </div>
                <p className="text-slate-600 text-sm font-quicksand">
                  © 2023 All rights reserved
                </p>
              </div>
              <div className="flex gap-6">
                {["Privacy", "Terms", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
