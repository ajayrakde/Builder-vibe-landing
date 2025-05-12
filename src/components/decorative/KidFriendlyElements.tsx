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
      {/* Simple decorative elements - only small dots/circles */}
      <div className="absolute top-1/4 left-[20%] w-4 h-4 bg-accent rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 right-[25%] w-3 h-3 bg-vibrant-purple rounded-full opacity-70"></div>
      <div className="absolute top-2/3 left-[40%] w-2 h-2 bg-vibrant-green rounded-full opacity-70"></div>
    </div>
  );
};

export default KidFriendlyElements;
