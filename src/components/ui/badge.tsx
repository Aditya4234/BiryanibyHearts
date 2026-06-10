import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const badgeVariants = {
  default: "bg-primary/10 text-primary",
  success: "bg-green-100 text-green-700",
  danger: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
} as const;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
