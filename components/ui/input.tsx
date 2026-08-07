import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-sm font-semibold outline-none transition-colors focus:border-leaf",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
