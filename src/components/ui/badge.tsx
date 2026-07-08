import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        free: "bg-sage/20 text-espresso border-sage/40",
        premium: "bg-gold/15 text-espresso border-gold/50",
        soon: "bg-parchment text-brown border-almond",
        manual: "bg-rose/15 text-espresso border-rose/40",
        paid: "bg-sage/25 text-espresso border-sage/50",
        preparing: "bg-gold/20 text-espresso border-gold/40",
        shipped: "bg-espresso text-cream border-espresso",
        neutral: "bg-ivory text-brown border-border",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
