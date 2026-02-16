import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rs-border-inset bg-[hsl(var(--input))] px-3 py-2 text-base text-rs-orange font-[family-name:var(--font-rs)] placeholder:text-rs-brown-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-orange disabled:cursor-not-allowed disabled:opacity-50 transition-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
