import { Menu } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-white tracking-wider">
            Byond<span className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">X</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white/90 hover:text-purple-400 transition-colors">
            Home
          </a>
          <a href="#about" className="text-white/90 hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#contact" className="text-white/90 hover:text-purple-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
