import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppWrapperProps {
  children: ReactNode;
  className?: string;
}

export const AppWrapper = ({ children, className }: AppWrapperProps) => {
  return (
    <div className={cn("min-h-screen bg-gray-50", className)}>
      {/* Global max-width container with large gutters for large screens, similar to Facebook/Medium */}
      <div className="max-w-screen-lg mx-auto bg-white shadow-lg min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AppWrapper;
