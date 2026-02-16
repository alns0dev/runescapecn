import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressFillVariants = cva(
  "h-full border-r-2 border-r-black shadow-[inset_1px_1px_0_rgba(255,255,255,0.3),inset_-1px_-1px_0_rgba(0,0,0,0.5)]",
  {
    variants: {
      variant: {
        default: "bg-rs-green",
        orange: "bg-rs-orange",
        red: "bg-rs-red",
        yellow: "bg-rs-yellow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressFillVariants> {
  value?: number
  max?: number
  label?: React.ReactNode
  dynamicColor?: boolean
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      variant,
      value = 0,
      max = 100,
      label,
      dynamicColor = false,
      ...props
    },
    ref
  ) => {
    const safeMax = max > 0 ? max : 100
    const safeValue = Math.min(Math.max(value, 0), safeMax)
    const percentage = (safeValue / safeMax) * 100
    const resolvedVariant =
      dynamicColor
        ? (percentage <= 20
            ? "red"
            : percentage <= 49
              ? "orange"
              : percentage <= 74
                ? "yellow"
                : "default")
        : variant

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={safeValue}
        className={cn(
          "relative h-8 w-full overflow-hidden rs-border-inset bg-[hsl(var(--input))] font-[family-name:var(--font-rs-bold)]",
          className
        )}
        {...props}
      >
        <div
          className={cn(progressFillVariants({ variant: resolvedVariant }))}
          style={{ width: `${percentage}%` }}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-2 text-sm uppercase text-rs-gold [text-shadow:_1px_1px_0_rgba(0,0,0,0.9)]">
          {label ?? `${Math.round(percentage)}%`}
        </div>
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress, progressFillVariants }
