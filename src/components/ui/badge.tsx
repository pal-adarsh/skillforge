import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/15 text-primary hover:bg-primary/25",
        secondary: "border-secondary/30 bg-secondary/15 text-secondary hover:bg-secondary/25",
        destructive: "border-destructive/30 bg-destructive/15 text-destructive hover:bg-destructive/25",
        outline: "border-border/50 text-muted-foreground hover:text-foreground hover:border-border",
        accent: "border-accent/30 bg-accent/15 text-accent hover:bg-accent/25",
        success: "border-emerald-500/30 bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25",
        cyber: "border-primary/50 bg-primary/10 text-primary font-mono uppercase tracking-wider text-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };