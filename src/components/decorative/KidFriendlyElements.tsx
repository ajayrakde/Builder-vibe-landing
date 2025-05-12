import React from "react";
import { cn } from "@/lib/utils";

interface KidFriendlyElementsProps {
  className?: string;
}

const KidFriendlyElements = ({ className }: KidFriendlyElementsProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none overflow-hidden z-10",
        className,
      )}
    >
      {/* Simplified decorative elements to avoid rendering issues */}
      <div
        className="absolute top-36 right-[5%] animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-8 h-8 bg-pastel-purple rounded-full opacity-70"></div>
      </div>

      <div
        className="absolute top-60 left-[10%] animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-10 h-10 bg-pastel-blue rounded-full opacity-70"></div>
      </div>

      <div
        className="absolute bottom-40 right-[15%] animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="w-6 h-6 bg-pastel-yellow rounded-full opacity-70"></div>
      </div>

      {/* Stars */}
      <div className="absolute top-1/4 left-[20%] w-4 h-4 bg-accent rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 right-[25%] w-3 h-3 bg-vibrant-purple rounded-full opacity-70"></div>
      <div className="absolute top-2/3 left-[40%] w-2 h-2 bg-vibrant-green rounded-full opacity-70"></div>
    </div>
  );
};

export default KidFriendlyElements;
