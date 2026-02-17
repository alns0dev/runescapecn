import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Pixelated splatter shape - irregular blob with jagged edges.
 * ViewBox 0 0 64 64, designed to scale with the badge.
 */
const SplatterSvg = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-full", className)}
    {...props}
  >
    <path
      d="M32 6c4 0 10 4 12 10 2 6 0 12-2 16-2 4-4 8-4 8s4 2 6 8c2 6 0 12-4 14-4 2-10 2-10 2s-4 0-8-4c-4-4-6-10-6-10s-2 4-6 6c-4 2-8 0-8 0s2-4 4-10c2-6 6-10 6-10s-2-6 0-12c2-6 8-10 8-10z"
      fill="currentColor"
    />
  </svg>
))
SplatterSvg.displayName = "SplatterSvg"

const MAX_VALUE = 999
const MIN_VALUE = 0

function clampValue(value: number): number {
  return Math.min(MAX_VALUE, Math.max(MIN_VALUE, Math.floor(value)))
}

export interface SplatterBadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Number to display (0–999). Values outside this range are clamped. */
  value: number
}

const SplatterBadge = React.forwardRef<HTMLDivElement, SplatterBadgeProps>(
  ({ value, className, ...props }, ref) => {
    const displayValue = clampValue(value)
    const displayStr = String(displayValue)

    return (
      <div
        ref={ref}
        role="img"
        aria-label={displayStr}
        className={cn(
          "relative inline-flex items-center justify-center select-none",
          "w-14 h-14 min-w-14 min-h-14",
          className
        )}
        {...props}
      >
        <SplatterSvg
          className="absolute inset-0 size-full text-rs-red"
          aria-hidden
        />
        <span
          className={cn(
            "relative z-10 text-white font-[family-name:var(--font-rs-bold)]",
            "text-xl leading-none tabular-nums",
            "[-webkit-font-smoothing:none]"
          )}
        >
          {displayStr}
        </span>
      </div>
    )
  }
)
SplatterBadge.displayName = "SplatterBadge"

export { SplatterBadge, SplatterSvg }
