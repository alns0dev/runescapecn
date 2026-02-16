import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  code: string
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ className, code, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <button
        ref={ref}
        onClick={handleCopy}
        className={cn(
          "inline-flex items-center gap-1.5 text-xs text-rs-brown-light hover:text-rs-yellow transition-none cursor-pointer uppercase font-[family-name:var(--font-rs-bold)]",
          className
        )}
        {...props}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-rs-green" />
            <span className="text-rs-green">Copied</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            <span>Copy</span>
          </>
        )}
      </button>
    )
  }
)
CopyButton.displayName = "CopyButton"

export { CopyButton }
