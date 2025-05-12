import { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserButtonProps {
  userName?: string;
  userEmail?: string;
  className?: string;
}

export const UserButton = ({
  userName = "Jane Smith",
  userEmail = "jane.smith@example.com",
  className,
}: UserButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    // Here you would handle the sign out logic
    alert("User signed out successfully");
    window.location.href = "/";
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Account"
        className="text-[#1a5de6] hover:bg-[#1a5de6]/10 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-slate-100 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-3 border-b border-slate-100">
            <p className="text-sm font-medium text-slate-900 font-quicksand">
              {userName}
            </p>
            <p className="text-xs text-slate-500 font-quicksand truncate">
              {userEmail}
            </p>
          </div>
          <div className="py-1">
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 font-quicksand"
              onClick={() => setIsOpen(false)}
            >
              My Profile
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 font-quicksand"
              onClick={handleSignOut}
            >
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserButton;
