
import React from 'react';
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "relative font-medium transition-all duration-300 ease-out rounded-xl whitespace-nowrap",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        "transform hover:-translate-y-1 active:translate-y-0",
        
        // Variants
        variant === 'primary' && "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl",
        variant === 'secondary' && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === 'outline' && "border border-primary text-primary hover:bg-primary/5",
        
        // Sizes
        size === 'sm' && "text-sm px-4 py-2",
        size === 'md' && "text-base px-6 py-3",
        size === 'lg' && "text-lg px-8 py-4",
        
        // Shimmer effect overlay
        "overflow-hidden",
        
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute inset-0 z-0 bg-shimmer animate-shimmer"></span>
      </span>
    </button>
  );
};

export default CTAButton;
