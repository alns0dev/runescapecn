import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 uppercase font-bold border-2 border-black transition-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 font-[family-name:var(--font-rs-bold)] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#8a7340] text-black [text-shadow:_1px_1px_0_rgba(255,255,255,0.15)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.25),inset_-1px_-1px_0_rgba(0,0,0,0.6)] hover:bg-[#9a8350] hover:text-rs-yellow active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.1),inset_1px_1px_0_rgba(0,0,0,0.7)] bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_0_9px,transparent_9px),linear-gradient(225deg,rgba(255,255,255,0.35)_0_9px,transparent_9px),linear-gradient(315deg,rgba(0,0,0,0.35)_0_9px,transparent_9px),linear-gradient(45deg,rgba(0,0,0,0.35)_0_9px,transparent_9px)] bg-[position:left_top,right_top,right_bottom,left_bottom] bg-[size:11px_11px] bg-no-repeat",
        classic:
          "bg-rs-brown-medium text-rs-orange [text-shadow:_1px_1px_0_rgba(0,0,0,0.9)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.12),inset_-1px_-1px_0_rgba(0,0,0,0.65)] hover:text-rs-yellow active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.1),inset_1px_1px_0_rgba(0,0,0,0.7)] bg-[linear-gradient(135deg,rgba(185,185,185,0.9)_0_10px,transparent_10px),linear-gradient(225deg,rgba(185,185,185,0.9)_0_10px,transparent_10px),linear-gradient(315deg,rgba(185,185,185,0.9)_0_10px,transparent_10px),linear-gradient(45deg,rgba(185,185,185,0.9)_0_10px,transparent_10px)] bg-[position:left_top,right_top,right_bottom,left_bottom] bg-[size:12px_12px] bg-no-repeat",
        stone:
          "rs-stone-bg text-rs-orange [text-shadow:_1px_1px_0_rgba(0,0,0,0.9)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.1),inset_-1px_-1px_0_rgba(0,0,0,0.7)] hover:text-rs-yellow active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.08),inset_1px_1px_0_rgba(0,0,0,0.75)] [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)]",
        destructive:
          "bg-rs-red text-white [text-shadow:_1px_1px_0_rgba(0,0,0,0.85)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.22),inset_-1px_-1px_0_rgba(0,0,0,0.65)] hover:bg-[#e61f1f] hover:text-rs-yellow active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.1),inset_1px_1px_0_rgba(0,0,0,0.75)] bg-[linear-gradient(135deg,rgba(255,255,255,0.26)_0_9px,transparent_9px),linear-gradient(225deg,rgba(255,255,255,0.26)_0_9px,transparent_9px),linear-gradient(315deg,rgba(0,0,0,0.3)_0_9px,transparent_9px),linear-gradient(45deg,rgba(0,0,0,0.3)_0_9px,transparent_9px)] bg-[position:left_top,right_top,right_bottom,left_bottom] bg-[size:11px_11px] bg-no-repeat",
        success:
          "bg-rs-green text-black [text-shadow:_1px_1px_0_rgba(255,255,255,0.2)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.3),inset_-1px_-1px_0_rgba(0,0,0,0.65)] hover:bg-[#49ff49] hover:text-rs-yellow active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.1),inset_1px_1px_0_rgba(0,0,0,0.75)] bg-[linear-gradient(135deg,rgba(255,255,255,0.26)_0_9px,transparent_9px),linear-gradient(225deg,rgba(255,255,255,0.26)_0_9px,transparent_9px),linear-gradient(315deg,rgba(0,0,0,0.32)_0_9px,transparent_9px),linear-gradient(45deg,rgba(0,0,0,0.32)_0_9px,transparent_9px)] bg-[position:left_top,right_top,right_bottom,left_bottom] bg-[size:11px_11px] bg-no-repeat",
        outline:
          "bg-rs-brown-dark text-rs-gold border-rs-brown-light [text-shadow:_1px_1px_0_rgba(0,0,0,0.85)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.1),inset_-1px_-1px_0_rgba(0,0,0,0.6)] hover:text-rs-yellow active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.08),inset_1px_1px_0_rgba(0,0,0,0.7)] bg-[linear-gradient(135deg,rgba(200,200,200,0.55)_0_9px,transparent_9px),linear-gradient(225deg,rgba(200,200,200,0.55)_0_9px,transparent_9px),linear-gradient(315deg,rgba(60,60,60,0.5)_0_9px,transparent_9px),linear-gradient(45deg,rgba(60,60,60,0.5)_0_9px,transparent_9px)] bg-[position:left_top,right_top,right_bottom,left_bottom] bg-[size:11px_11px] bg-no-repeat",
        ghost:
          "border-rs-brown-medium bg-rs-brown-dark/70 text-rs-brown-light [text-shadow:_1px_1px_0_rgba(0,0,0,0.85)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.55)] hover:text-rs-yellow active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.08),inset_1px_1px_0_rgba(0,0,0,0.7)]",
        link:
          "border-transparent bg-transparent text-rs-orange [text-shadow:_1px_1px_0_rgba(0,0,0,0.9)] shadow-none underline-offset-4 hover:text-rs-yellow hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        default: "h-11 px-5 text-base",
        lg: "h-13 px-7 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
