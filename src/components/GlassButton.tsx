import { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
}

export function GlassButton({ children, variant = "primary", onClick, className = "" }: GlassButtonProps) {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className={`px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white backdrop-blur-sm border border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-105 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md text-white border border-white/20 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
