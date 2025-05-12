import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SkyBackgroundProps {
  className?: string;
}

const SkyBackground = ({ className }: SkyBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0",
        className,
      )}
    >
      {/* Gradient sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-skyBlue-deep via-skyBlue to-skyBlue-light"></div>

      {/* Large fluffy clouds */}
      <div
        className="absolute opacity-90"
        style={{
          left: "5%",
          top: "15%",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <svg
          width="180"
          height="100"
          viewBox="0 0 180 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M165.5 69.5C165.5 85.7924 150.236 99 131.25 99C120.855 99 111.511 95.0357 105.326 88.4184C99.1863 95.0357 89.8449 99 79.4525 99C60.4664 99 45.2025 85.7924 45.2025 69.5C45.2025 65.1607 46.1504 61.0156 47.8662 57.2578C44.9111 52.2842 43.25 46.6465 43.25 40.6578C43.25 23.1316 56.3371 9 72.5 9C81.3047 9 89.2432 12.9643 94.5 19.2184C99.7568 12.9643 107.695 9 116.5 9C132.663 9 145.75 23.1316 145.75 40.6578C145.75 46.6465 144.089 52.2842 141.134 57.2578C142.85 61.0156 143.797 65.1607 143.797 69.5H165.5Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className="absolute opacity-90"
        style={{
          right: "15%",
          top: "8%",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <svg
          width="250"
          height="120"
          viewBox="0 0 250 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M225.5 89.5C225.5 105.792 210.236 119 191.25 119C180.855 119 171.511 115.036 165.326 108.418C159.186 115.036 149.845 119 139.453 119C120.466 119 105.203 105.792 105.203 89.5C105.203 85.1607 106.15 81.0156 107.866 77.2578C104.911 72.2842 103.25 66.6465 103.25 60.6578C103.25 43.1316 116.337 29 132.5 29C141.305 29 149.243 32.9643 154.5 39.2184C159.757 32.9643 167.695 29 176.5 29C192.663 29 205.75 43.1316 205.75 60.6578C205.75 66.6465 204.089 72.2842 201.134 77.2578C202.85 81.0156 203.797 85.1607 203.797 89.5H225.5Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className="absolute opacity-85"
        style={{
          left: "25%",
          top: "25%",
          transform: `translateY(${scrollY * 0.7}px)`,
        }}
      >
        <svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M185.5 79.5C185.5 95.7924 170.236 109 151.25 109C140.855 109 131.511 105.036 125.326 98.4184C119.186 105.036 109.845 109 99.4525 109C80.4664 109 65.2025 95.7924 65.2025 79.5C65.2025 75.1607 66.1504 71.0156 67.8662 67.2578C64.9111 62.2842 63.25 56.6465 63.25 50.6578C63.25 33.1316 76.3371 19 92.5 19C101.305 19 109.243 22.9643 114.5 29.2184C119.757 22.9643 127.695 19 136.5 19C152.663 19 165.75 33.1316 165.75 50.6578C165.75 56.6465 164.089 62.2842 161.134 67.2578C162.85 71.0156 163.797 75.1607 163.797 79.5H185.5Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Smaller clouds in the distance */}
      <div
        className="absolute opacity-70"
        style={{
          right: "30%",
          top: "35%",
          transform: `translateY(${scrollY * 0.9}px)`,
        }}
      >
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M115.5 49.5C115.5 55.7924 100.236 69 81.25 69C70.8553 69 61.5111 65.0357 55.3262 58.4184C49.1863 65.0357 39.8449 69 29.4525 69C10.4664 69 0.202515 55.7924 0.202515 49.5C0.202515 45.1607 1.15037 41.0156 2.86617 37.2578C-0.0889353 32.2842 0.25 26.6465 0.25 20.6578C0.25 13.1316 6.33706 9 22.5 9C31.3047 9 39.2432 12.9643 44.5 19.2184C49.7568 12.9643 57.6953 9 66.5 9C82.6629 9 95.75 13.1316 95.75 20.6578C95.75 26.6465 94.0893 32.2842 91.1342 37.2578C92.8496 41.0156 93.7975 45.1607 93.7975 49.5H115.5Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className="absolute opacity-75"
        style={{
          left: "10%",
          bottom: "40%",
          transform: `translateY(${scrollY * 0.8}px)`,
        }}
      >
        <svg
          width="150"
          height="80"
          viewBox="0 0 150 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M135.5, 59.5C135.5, 65.7924 120.236, 79 101.25, 79C90.8553, 79 81.5111, 75.0357 75.3262, 68.4184C69.1863, 75.0357 59.8449, 79 49.4525, 79C30.4664, 79 20.2025, 65.7924 20.2025, 59.5C20.2025, 55.1607 21.1504, 51.0156 22.8662, 47.2578C19.9111, 42.2842 20.25, 36.6465 20.25, 30.6578C20.25, 23.1316 26.3371, 19 42.5, 19C51.3047, 19 59.2432, 22.9643 64.5, 29.2184C69.7568, 22.9643 77.6953, 19 86.5, 19C102.663, 19 115.75, 23.1316 115.75, 30.6578C115.75, 36.6465 114.089, 42.2842 111.134, 47.2578C112.85, 51.0156 113.797, 55.1607 113.797, 59.5H135.5Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Sun with gentle glow */}
      <div
        className="absolute right-[10%] top-[10%]"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 shadow-[0_0_40px_20px_rgba(255,236,179,0.7)]"></div>
      </div>

      {/* Rainbow arc (semi-transparent) */}
      <div className="absolute top-[30%] left-[5%] opacity-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="150"
          viewBox="0 0 300 150"
          fill="none"
        >
          <path
            d="M290,140 C245,45 190,15 150,15 C110,15 55,45 10,140"
            stroke="#FF595E"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M270,140 C230,55 185,30 150,30 C115,30 70,55 30,140"
            stroke="#FFCA3A"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M250,140 C215,65 180,45 150,45 C120,45 85,65 50,140"
            stroke="#8AC926"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M230,140 C200,75 175,60 150,60 C125,60 100,75 70,140"
            stroke="#1982C4"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M210,140 C185,85 170,75 150,75 C130,75 115,85 90,140"
            stroke="#6A4C93"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Twinkling stars */}
      <div className="absolute h-full w-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle bg-white rounded-full"
            style={{
              top: `${Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkyBackground;
