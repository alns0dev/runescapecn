import * as React from "react"

import { cn } from "@/lib/utils"

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-rs-brown-medium border-2 border-black shadow-[inset_1px_1px_0_rgba(0,0,0,0.7),inset_-1px_-1px_0_rgba(255,255,255,0.05)] bg-[length:200%_100%] animate-[rs-shimmer_2s_linear_infinite] bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,0.04)_50%,transparent_75%)]",
      className
    )}
    {...props}
  />
))
Skeleton.displayName = "Skeleton"

export { Skeleton }
