import React from "react";
import { cn } from "@/lib/utils";

interface SkyBackgroundProps {
  className?: string;
}

const SkyBackground = ({ className }: SkyBackgroundProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0",
        className,
      )}
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-skyBlue-deep via-skyBlue to-skyBlue-light"></div>

      {/* Simple clouds using divs instead of SVGs */}
      <div className="absolute left-[10%] top-[15%] w-32 h-16 bg-white opacity-80 rounded-full"></div>
      <div className="absolute left-[8%] top-[17%] w-40 h-20 bg-white opacity-80 rounded-full"></div>

      <div className="absolute right-[15%] top-[10%] w-40 h-20 bg-white opacity-70 rounded-full"></div>
      <div className="absolute right-[20%] top-[12%] w-32 h-16 bg-white opacity-70 rounded-full"></div>

      <div className="absolute left-[30%] top-[30%] w-36 h-18 bg-white opacity-60 rounded-full"></div>
      <div className="absolute right-[40%] bottom-[40%] w-24 h-12 bg-white opacity-60 rounded-full"></div>

      {/* Simple sun */}
      <div className="absolute right-[10%] top-[10%]">
        <div className="w-16 h-16 rounded-full bg-yellow-300 opacity-80"></div>
      </div>
    </div>
  );
};

export default SkyBackground;
