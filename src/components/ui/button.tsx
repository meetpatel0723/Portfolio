import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-bg hover:bg-lime-300 shadow-[0_0_0_0_rgba(163,230,53,0)] hover:shadow-[0_0_30px_-6px_rgba(163,230,53,0.45)]",
        outline:
          "border border-white/15 bg-white/[0.03] text-text hover:border-white/30 hover:bg-white/[0.07]",
        ghost: "text-muted hover:text-text hover:bg-white/[0.05]",
        link: "text-accent underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-10 px-6",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
