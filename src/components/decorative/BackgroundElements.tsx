import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

// SVG icons for background elements
const BackgroundIcon = ({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div
      className={cn(
        "absolute opacity-[0.07] text-slate-400 transition-opacity duration-500",
        "hover:opacity-10",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
};

// Individual icons
const BabyBottle = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11 19H13V22H11V19M7 18C7 20.76 9.24 23 12 23S17 20.76 17 18V13H7V18M16 8L14 4H13V2C13 1.45 12.55 1 12 1S11 1.45 11 2V4H10L8 8H16Z" />
    </svg>
  </BackgroundIcon>
);

const Banana = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7,15C7.64,15 8.27,14.96 8.87,14.9C12.42,14.5 15.5,12.9 15.5,9C15.5,5.5 13.5,3 10.5,2C9.93,2.25 9.5,2.55 9.5,3C9.5,3.5 10,4 10.5,4.5C11,5 11.5,5.5 11.5,6.5C11.5,7.62 10.4,8.67 8.75,9.53C7.36,10.26 5.69,10.76 4.08,10.91C3.44,11 3.03,11.6 3.13,12.25C3.23,12.89 3.83,13.3 4.47,13.2C4.59,13.18 4.71,13.16 4.83,13.14C5.39,13.04 6,13 7,13C7.64,13 8.27,12.96 8.87,12.9C10.5,12.67 11.84,12.08 12.74,11.26C13.03,11.55 13.32,11.9 13.56,12.32C14.22,13.47 14.5,15.14 14.5,18C14.5,21.86 12.5,22 7,22C1.5,22 1.5,20.86 1.5,18C1.5,15.14 1.78,13.47 2.44,12.32C3.23,10.96 4.5,10.44 7,10C5.61,10.19 4.5,10.71 3.82,11.8C3.3,12.67 3,14.11 3,18C3,20 3,20 7,20C11,20 11,20 11,18C11,14.11 10.7,12.67 10.18,11.8C9.91,11.36 9.57,11.04 9.19,10.81C10.13,10.62 11,10.33 11.79,9.97C9.71,10.29 7.92,10.29 7,10Z" />
    </svg>
  </BackgroundIcon>
);

const Apple = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20,10C22,13 17,22 15,22C13,22 13,21 12,21C11,21 11,22 9,22C7,22 2,13 4,10C6,7 9,7 11,8V5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5V3H13V8C15,7 18,7 20,10Z" />
    </svg>
  </BackgroundIcon>
);

const Carrot = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16,10L15.8,11H13.5A0.5,0.5 0 0,0 13,11.5A0.5,0.5 0 0,0 13.5,12H15.6L14.6,17H12.5A0.5,0.5 0 0,0 12,17.5A0.5,0.5 0 0,0 12.5,18H14.4L14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20L9,15H10.5A0.5,0.5 0 0,0 11,14.5A0.5,0.5 0 0,0 10.5,14H8.8L8,10H9.5A0.5,0.5 0 0,0 10,9.5A0.5,0.5 0 0,0 9.5,9H7.9L7.6,7C8.3,5 10,2 12,2C13.8,2 16,5 16,10Z" />
    </svg>
  </BackgroundIcon>
);

const TeddyBear = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M15.75,19.13C14.92,19.13 14.25,18.29 14.25,17.25C14.25,16.21 14.92,15.38 15.75,15.38C16.58,15.38 17.25,16.21 17.25,17.25C17.25,18.29 16.58,19.13 15.75,19.13M12,11.25C10.76,11.25 9.75,10.24 9.75,9C9.75,7.76 10.76,6.75 12,6.75C13.24,6.75 14.25,7.76 14.25,9C14.25,10.24 13.24,11.25 12,11.25M8.25,19.13C7.42,19.13 6.75,18.29 6.75,17.25C6.75,16.21 7.42,15.38 8.25,15.38C9.08,15.38 9.75,16.21 9.75,17.25C9.75,18.29 9.08,19.13 8.25,19.13M12,8.25C11.59,8.25 11.25,8.59 11.25,9C11.25,9.41 11.59,9.75 12,9.75C12.41,9.75 12.75,9.41 12.75,9C12.75,8.59 12.41,8.25 12,8.25M18.75,12C18.43,12 18.12,12.07 17.84,12.21C17.36,12.46 17,12.87 16.81,13.36C16.22,13.05 15.55,12.87 14.84,12.87C14.42,12.87 14.01,12.96 13.64,13.1C13.23,12.43 12.64,11.88 11.91,11.5C11.76,11.3 11.62,11.08 11.5,10.85C12.44,10.15 13,8.87 13,7.5C13,5.29 11.21,3.5 9,3.5C6.79,3.5 5,5.29 5,7.5C5,9.71 6.79,11.5 9,11.5C9.04,11.5 9.08,11.49 9.12,11.49C8.54,12.04 8.11,12.77 7.92,13.61C6.81,13.85 6,14.83 6,16C6,17.38 7.12,18.5 8.5,18.5C9.23,18.5 9.86,18.17 10.29,17.67C11.44,19.29 13.43,20.38 15.5,20.38C17.71,20.38 19.63,19.05 20.63,17.21C21.21,16.38 21.21,15.41 20.63,14.58C20.13,13.87 19.38,13.5 18.75,13.5C18.5,13.5 18.25,13.5 18,13.63C17.93,12.69 17.47,12 16.88,12.21C16.59,12.07 16.18,12 15.75,12H18.75Z" />
    </svg>
  </BackgroundIcon>
);

const Blocks = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6,14.5L4,15.5V11.5L6,10.5V14.5M10,10.5L8,11.5V15.5L10,14.5V10.5M8,9L10,8V4L8,5V9M4,9L6,8V4L4,5V9M14,15.5L16,14.5V10.5L14,11.5V15.5M18,11.5L20,10.5V14.5L18,15.5V11.5M16,9L18,8V4L16,5V9M12,5V9L14,8V4L12,5M12,15.5L14,14.5V10.5L12,11.5V15.5M8,19L10,18V14L8,15V19M4,19L6,18V14L4,15V19M14,19L16,18V14L14,15V19M18,19L20,18V14L18,15V19Z" />
    </svg>
  </BackgroundIcon>
);

const Happy = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M15.5,11C16.33,11 17,10.33 17,9.5C17,8.67 16.33,8 15.5,8C14.67,8 14,8.67 14,9.5C14,10.33 14.67,11 15.5,11M8.5,11C9.33,11 10,10.33 10,9.5C10,8.67 9.33,8 8.5,8C7.67,8 7,8.67 7,9.5C7,10.33 7.67,11 8.5,11M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z" />
    </svg>
  </BackgroundIcon>
);

const Laugh = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M7,6.5C8.1,6.5 9,7.4 9,8.5C9,9.05 8.77,9.53 8.42,9.88C8.61,9.96 8.8,10 9,10C10.1,10 11,9.1 11,8C11,6.9 10.1,6 9,6H7V6.5M15,6.5C16.1,6.5 17,7.4 17,8.5C17,9.05 16.77,9.53 16.42,9.88C16.61,9.96 16.8,10 17,10C18.1,10 19,9.1 19,8C19,6.9 18.1,6 17,6H15V6.5M16.75,14C16.75,14.96 16.37,15.87 15.73,16.55L14.69,18H13L14.25,15.97C13.44,15.87 12.67,15.73 11.97,15.56C11.94,14.97 11.77,14.39 11.25,14C11.68,14.07 12.12,14.13 12.56,14.14C13.7,14.18 14.83,14.07 15.93,13.84C16.23,13.78 16.5,13.89 16.61,14.07C16.71,14.26 16.75,13.76 16.75,14M17.75,14.79C17.75,14.79 17.29,18.85 13,19.86V20H8V19.86C3.71,18.85 3.25,14.79 3.25,14.79C3.25,14.79 3.41,14.46 3.5,14.37C3.59,14.28 3.75,14.37 3.75,14.37C5.87,15.9 9.24,16.13 12,16.13C14.76,16.13 18.13,15.9 20.25,14.37C20.25,14.37 20.41,14.28 20.5,14.37C20.58,14.46 20.75,14.79 20.75,14.79C20.75,14.78 20.5,15.09 17.75,14.79Z" />
    </svg>
  </BackgroundIcon>
);

const Rattle = ({
  className,
  size,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) => (
  <BackgroundIcon className={className} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M10,2H8C6.9,2 6,2.9 6,4V6C6,7.1 6.9,8 8,8V10H10V8C11.11,8 12,7.1 12,6V4C12,2.9 11.1,2 10,2M8,4H10V6H8V4M10,12H8C6.89,12 6,12.9 6,14V16C6,17.1 6.9,18 8,18V20H10V18C11.11,18 12,17.1 12,16V14C12,12.9 11.1,12 10,12M8,14H10V16H8V14M16,2H14C12.89,2 12,2.9 12,4V6C12,7.1 12.9,8 14,8V10H16V8C17.11,8 18,7.1 18,6V4C18,2.9 17.1,2 16,2M14,4H16V6H14V4M16,12H14C12.89,12 12,12.9 12,14V16C12,17.1 12.9,18 14,18V20H16V18C17.11,18 18,17.1 18,16V14C18,12.9 17.1,12 16,12M14,14H16V16H14V14Z" />
    </svg>
  </BackgroundIcon>
);

interface BackgroundElementsProps {
  className?: string;
  density?: "low" | "medium" | "high";
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({
  className,
  density = "medium",
}) => {
  const isMobile = useIsMobile();

  // Calculate number of elements based on density
  const elementCount = useMemo(() => {
    const baseCount = isMobile ? 8 : 16;
    switch (density) {
      case "low":
        return baseCount / 2;
      case "high":
        return baseCount * 1.5;
      case "medium":
      default:
        return baseCount;
    }
  }, [density, isMobile]);

  // Generate random positions for elements
  const elements = useMemo(() => {
    const items = [];
    const components = [
      BabyBottle,
      Banana,
      Apple,
      Carrot,
      TeddyBear,
      Blocks,
      Happy,
      Laugh,
      Rattle,
    ];

    for (let i = 0; i < elementCount; i++) {
      const Component =
        components[Math.floor(Math.random() * components.length)];
      const size =
        Math.random() > 0.7 ? "lg" : Math.random() > 0.4 ? "md" : "sm";

      // Calculate random positions
      const top = `${Math.floor(Math.random() * 95)}%`;
      const left = `${Math.floor(Math.random() * 95)}%`;

      // Random rotation
      const rotation = `rotate(${Math.floor(Math.random() * 360)}deg)`;

      // Random animation
      const animationClasses = [
        "animate-pulse",
        "animate-bounce",
        "animate-pulse",
        "animate-spin-slow", // This would be defined in tailwind.config.js
      ];
      const animation =
        animationClasses[Math.floor(Math.random() * animationClasses.length)];

      items.push(
        <div
          key={i}
          style={{ top, left, transform: rotation }}
          className="absolute"
        >
          <Component
            size={size as "sm" | "md" | "lg"}
            className={cn(
              animation
            )}
          />
        </div>,
      );
    }

    return items;
  }, [elementCount]);

  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden",
        className,
      )}
    >
      {elements}
    </div>
  );
};

export default BackgroundElements;
