import React from "react";
import { Layout } from "./components/layout/Layout";
import HeroCarousel from "./components/home/HeroCarousel";

const MyComponent: React.FC = () => {
  return (
    <Layout>
      {/* Hero Carousel Section */}
      <div className="pt-6">
        <HeroCarousel />
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
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
                This is a simple description about feature {item} and how it can
                benefit your baby.
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
    </Layout>
  );
};

export default MyComponent;
