import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RomanticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
}

const RomanticButton = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: RomanticButtonProps) => {
  const baseStyles =
    "relative px-8 py-4 rounded-2xl font-body font-medium text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-blush-deep to-lavender-deep text-foreground shadow-soft hover:shadow-glow animate-pulse-glow",
    secondary:
      "bg-secondary text-secondary-foreground border-2 border-lavender-deep/30 hover:bg-lavender/50 shadow-soft",
    ghost:
      "bg-transparent text-foreground hover:bg-blush/30",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default RomanticButton;
