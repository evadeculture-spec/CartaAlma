import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-medium tracking-wide transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-espresso text-cream shadow-soft hover:bg-ink hover:shadow-paper",
        secondary:
          "bg-sage text-espresso shadow-soft hover:brightness-95",
        soft:
          "bg-parchment text-espresso hover:bg-almond/70",
        ghost:
          "bg-transparent text-espresso border border-border hover:border-border-strong hover:bg-ivory/60",
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-95",
        link: "text-espresso underline underline-offset-4 decoration-gold/60 hover:decoration-gold",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-[0.95rem]",
        lg: "h-13 px-8 text-base py-3.5",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
