import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppWrapperProps {
  children: ReactNode;
  className?: string;
}

export const AppWrapper = ({ children, className }: AppWrapperProps) => {
  return (
    <div className={cn("min-h-screen bg-white", className)}>
      {/* Global max-width container with large gutters for large screens */}
      <div className="max-w-screen-xl mx-auto bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default AppWrapper;
