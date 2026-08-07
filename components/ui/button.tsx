import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-extrabold transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        leaf: "bg-leaf text-white hover:bg-leaf-deep",
        lime: "bg-lime text-white hover:bg-leaf-deep",
        ghost: "border border-current hover:bg-leaf hover:text-white hover:border-leaf",
        wa: "bg-wa text-white hover:brightness-95",
        soft: "card-surface hover:border-leaf",
        dark: "bg-leaf-deep text-white hover:bg-leaf-darkest",
      },
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-3.5 py-2 text-xs rounded-lg",
        lg: "px-7 py-4 text-base",
        icon: "size-10 rounded-lg",
      },
    },
    defaultVariants: { variant: "leaf", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";
export { buttonVariants };
