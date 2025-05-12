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
      {/* Floating balloons */}
      <div
        className="absolute top-36 right-[5%] animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="48"
          viewBox="0 0 38 48"
          fill="none"
        >
          <path
            d="M19 20C26.1797 20 32 15.5228 32 10C32 4.47715 26.1797 0 19 0C11.8203 0 6 4.47715 6 10C6 15.5228 11.8203 20 19 20Z"
            fill="#9D8DF1"
            fillOpacity="0.7"
          />
          <path
            d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
            fill="#6A4C93"
          />
          <path
            d="M19 20V40"
            stroke="#6A4C93"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21 42C21 43.6569 20.1046 45 19 45C17.8954 45 17 43.6569 17 42C17 40.3431 17.8954 39 19 39C20.1046 39 21 40.3431 21 42Z"
            fill="#6A4C93"
          />
        </svg>
      </div>

      <div
        className="absolute top-60 left-[10%] animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="48"
          viewBox="0 0 38 48"
          fill="none"
        >
          <path
            d="M19 20C26.1797 20 32 15.5228 32 10C32 4.47715 26.1797 0 19 0C11.8203 0 6 4.47715 6 10C6 15.5228 11.8203 20 19 20Z"
            fill="#9BF6FF"
            fillOpacity="0.7"
          />
          <path
            d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
            fill="#1982C4"
          />
          <path
            d="M19 20V40"
            stroke="#1982C4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21 42C21 43.6569 20.1046 45 19 45C17.8954 45 17 43.6569 17 42C17 40.3431 17.8954 39 19 39C20.1046 39 21 40.3431 21 42Z"
            fill="#1982C4"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-40 right-[15%] animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="48"
          viewBox="0 0 38 48"
          fill="none"
        >
          <path
            d="M19 20C26.1797 20 32 15.5228 32 10C32 4.47715 26.1797 0 19 0C11.8203 0 6 4.47715 6 10C6 15.5228 11.8203 20 19 20Z"
            fill="#FFECA3"
            fillOpacity="0.7"
          />
          <path
            d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
            fill="#FF924C"
          />
          <path
            d="M19 20V40"
            stroke="#FF924C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21 42C21 43.6569 20.1046 45 19 45C17.8954 45 17 43.6569 17 42C17 40.3431 17.8954 39 19 39C20.1046 39 21 40.3431 21 42Z"
            fill="#FF924C"
          />
        </svg>
      </div>

      {/* Toy Elements */}
      <div className="absolute bottom-20 left-[5%] animate-bounce-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="#B5EAD7"
          opacity="0.9"
        >
          <path d="M12,14C10.89,14 10,13.1 10,12C10,10.89 10.89,10 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M12,16C13.11,16 14,16.9 14,18C14,19.1 13.1,20 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M8,14C6.89,14 6,13.1 6,12C6,10.89 6.89,10 8,10A2,2 0 0,1 10,12A2,2 0 0,1 8,14M8,4A2,2 0 0,1 10,6A2,2 0 0,1 8,8C6.89,8 6,7.1 6,6C6,4.89 6.89,4 8,4M8,16C9.11,16 10,16.9 10,18C10,19.1 9.1,20 8,20A2,2 0 0,1 6,18A2,2 0 0,1 8,16M16,14C14.89,14 14,13.1 14,12C14,10.89 14.89,10 16,10A2,2 0 0,1 18,12A2,2 0 0,1 16,14M16,4A2,2 0 0,1 18,6A2,2 0 0,1 16,8C14.89,8 14,7.1 14,6C14,4.89 14.89,4 16,4M16,16C17.11,16 18,16.9 18,18C18,19.1 17.1,20 16,20A2,2 0 0,1 14,18A2,2 0 0,1 16,16M4,12A2,2 0 0,1 2,10A2,2 0 0,1 4,8H8V10H4V12M20,12V10H16V8H20A2,2 0 0,1 22,10A2,2 0 0,1 20,12M4,6A2,2 0 0,1 2,4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4A2,2 0 0,1 20,6H4M4,20A2,2 0 0,1 2,18A2,2 0 0,1 4,16H20A2,2 0 0,1 22,18A2,2 0 0,1 20,20H4Z" />
        </svg>
      </div>

      <div
        className="absolute top-1/2 right-[5%] animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="#FFD8B1"
          opacity="0.8"
        >
          <path d="M19,6H16.5V8H19M12.5,8H15V6H12.5M9,8H11.5V6H9M5,10H19A1,1 0 0,1 20,11V16A1,1 0 0,1 19,17H5A1,1 0 0,1 4,16V11A1,1 0 0,1 5,10M5,6H6.5V8H5A2,2 0 0,0 3,10V16A2,2 0 0,0 5,18H19A2,2 0 0,0 21,16V10A2,2 0 0,0 19,8H19.5V6H19A2,2 0 0,0 17,4H15A2,2 0 0,0 13,6H11A2,2 0 0,0 9,4H7A2,2 0 0,0 5,6Z" />
        </svg>
      </div>

      {/* Stars */}
      <div
        className="absolute top-1/4 left-[20%] animate-twinkle"
        style={{ animationDelay: "1s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FFD166"
          opacity="0.7"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>

      <div
        className="absolute bottom-1/4 right-[25%] animate-twinkle"
        style={{ animationDelay: "0.3s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#FF70A6"
          opacity="0.7"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>

      <div
        className="absolute top-2/3 left-[40%] animate-twinkle"
        style={{ animationDelay: "1.7s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#8AC926"
          opacity="0.7"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-1/3 right-[35%] animate-float opacity-40"
        style={{ animationDelay: "0.7s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="#CBC3E3"
        >
          <path d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8M8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.31,16.04 14.33,17.5 12,17.5Z" />
        </svg>
      </div>
    </div>
  );
};

export default KidFriendlyElements;
