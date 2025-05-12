import React from "react";
import { cn } from "@/lib/utils";

interface KidFriendlyElementsProps {
  className?: string;
}

const KidFriendlyElements = ({ className }: KidFriendlyElementsProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden z-0",
        className,
      )}
    >
      {/* Stars */}
      <div className="absolute top-10 left-[10%] animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FFD700"
          className="opacity-70"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>
      <div
        className="absolute top-20 right-[15%] animate-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#FFD700"
          className="opacity-70"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-[20%] animate-pulse"
        style={{ animationDelay: "1.2s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#FFD700"
          className="opacity-70"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>

      {/* Cartoon balloon */}
      <div
        className="absolute top-48 right-10 animate-bounce-slow opacity-60"
        style={{ animationDuration: "6s" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="#FF6B8B"
        >
          <path d="M12,2A9,9 0 0,1 21,11C21,14.5 18.8,17.7 16,20.1V21.5C16,22.3 15.3,23 14.5,23H9.5C8.7,23 8,22.3 8,21.5V20.1C5.2,17.7 3,14.5 3,11A9,9 0 0,1 12,2M9,17.5C9,18.3 9.7,19 10.5,19H13.5C14.3,19 15,18.3 15,17.5V15H9V17.5Z" />
        </svg>
      </div>

      {/* Rainbow arc */}
      <div className="absolute -top-10 left-20 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="80"
          viewBox="0 0 200 100"
          fill="none"
        >
          <path
            d="M190,90 C160,30 130,10 100,10 C70,10 40,30 10,90"
            stroke="#FF0000"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M170,90 C145,40 125,25 100,25 C75,25 55,40 30,90"
            stroke="#FFA500"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M150,90 C130,50 115,40 100,40 C85,40 70,50 50,90"
            stroke="#FFFF00"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M130,90 C120,60 110,55 100,55 C90,55 80,60 70,90"
            stroke="#00FF00"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Teddy bear */}
      <div className="absolute bottom-20 right-5 opacity-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="#A0522D"
        >
          <path d="M12,1C10.89,1 10,1.9 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3A2,2 0 0,0 12,1M10,6C9.73,6 9.5,6.11 9.31,6.28H9.3L4,11.59L5.42,13L9,9.41V22H11V15H13V22H15V9.41L18.58,13L20,11.59L14.7,6.28C14.5,6.11 14.27,6 14,6" />
        </svg>
      </div>

      {/* Cloud */}
      <div className="absolute top-40 left-5 opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="40"
          viewBox="0 0 24 24"
          fill="#E0F7FA"
        >
          <path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
        </svg>
      </div>
    </div>
  );
};

export default KidFriendlyElements;
