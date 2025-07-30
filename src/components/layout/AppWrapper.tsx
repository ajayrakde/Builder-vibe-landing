import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AppWrapperProps {
  children: ReactNode;
  className?: string;
}

export const AppWrapper = ({ children, className }: AppWrapperProps) => {
  return (
    <div className={cn("min-h-screen bg-gray-50", className)}>
      {children}
    </div>
  );
};

export default AppWrapper;
