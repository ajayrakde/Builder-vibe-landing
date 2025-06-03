import React from "react";
import Header from "./components/layout/Header";
import HeroCarousel from "./components/home/HeroCarousel";
import SkyBackground from "./components/decorative/SkyBackground";
import KidFriendlyElements from "./components/decorative/KidFriendlyElements";

const MyComponent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-400 to-blue-100 font-quicksand">
      <SkyBackground />
      <KidFriendlyElements />

      {/* Header with cart, user icon, and search */}
      <Header />

      <main className="flex-grow relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-20">
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
                <h2 className="text-xl font-semibold mb-3 text-slate-800 font-quicksand">
                  Feature {item}
                </h2>
                <p className="text-slate-600 mb-4 font-quicksand">
                  This is a simple description about feature {item} and how it
                  can benefit your baby.
                </p>
                <a
                  href="#"
                  className="text-[#1a5de6] font-medium hover:underline font-quicksand"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-slate-50 py-8 border-t border-slate-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="font-quicksand text-[#1a5de6] font-bold text-xl">
                Kanhaa
              </span>
              <p className="text-slate-600 text-sm mt-2 font-quicksand">
                © 2023 All rights reserved
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-[#1a5de6] transition-colors font-quicksand"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyComponent;
