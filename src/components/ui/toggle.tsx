import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center text-base uppercase font-[family-name:var(--font-rs-bold)] border-2 border-black transition-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-rs-brown-medium text-rs-brown-light shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] hover:text-rs-orange data-[state=on]:bg-rs-brown-dark data-[state=on]:text-rs-gold data-[state=on]:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.1),inset_1px_1px_0_rgba(0,0,0,0.6)]",
        outline:
          "bg-rs-brown-dark text-rs-brown-light border-rs-brown-light shadow-[inset_1px_1px_0_rgba(255,255,255,0.05),inset_-1px_-1px_0_rgba(0,0,0,0.5)] hover:text-rs-orange data-[state=on]:text-rs-gold data-[state=on]:border-rs-gold",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2",
        lg: "h-12 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
