import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SkyBackground from "../decorative/SkyBackground";
import KidFriendlyElements from "../decorative/KidFriendlyElements";

interface LayoutProps {
  children: ReactNode;
  showBackground?: boolean;
}

export const Layout = ({ children, showBackground = true }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white font-quicksand">
      {showBackground && (
        <>
          <SkyBackground />
          <KidFriendlyElements />
        </>
      )}

      <Header />

      <main className="flex-grow relative z-20">
        <div className="max-w-screen-lg mx-auto bg-white shadow-lg min-h-screen">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
