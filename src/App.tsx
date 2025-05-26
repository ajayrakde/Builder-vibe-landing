import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Community from "./pages/Community";
import ProductDetail from "./pages/ProductDetail";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import MyComponent from "./MyComponent";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyComponent />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postSlug" element={<BlogPost />} />
      <Route path="/community" element={<Community />} />
      <Route path="/product/:productHandle" element={<ProductDetail />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
