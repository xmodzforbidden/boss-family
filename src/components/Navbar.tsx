import { useState } from "react";
import { Button } from "./ui/button";
import { Globe, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold">FAMILY BOSS</a>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="nav-link">Home</a>
              <a href="#benefits" className="nav-link">Benefits</a>
              <a href="#cheats" className="nav-link">Cheats</a>
              <a href="#video" className="nav-link">Video</a>
              <a href="#status" className="nav-link">Status</a>
              <a href="#purchase" className="nav-link">Purchase</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>EN</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button 
              className="btn-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-white/10">
            <a href="#home" className="block py-2">Home</a>
            <a href="#benefits" className="block py-2">Benefits</a>
            <a href="#cheats" className="block py-2">Cheats</a>
            <a href="#video" className="block py-2">Video</a>
            <a href="#status" className="block py-2">Status</a>
            <a href="#purchase" className="block py-2">Purchase</a>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="ghost" size="sm" className="flex items-center justify-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>EN</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button 
                className="btn-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;