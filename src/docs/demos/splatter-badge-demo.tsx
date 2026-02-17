import { useState } from "react"
import { SplatterBadge } from "@/components/ui/splatter-badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SplatterBadgeDemo() {
  const [value, setValue] = useState(26)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <SplatterBadge value={26} />
        <SplatterBadge value={99} />
        <SplatterBadge value={1} />
        <SplatterBadge value={999} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="splatter-value">Value (0–999)</Label>
        <div className="flex gap-2">
          <Input
            id="splatter-value"
            type="number"
            min={0}
            max={999}
            value={value}
            onChange={(e) => setValue(Number(e.target.value) || 0)}
            className="w-24"
          />
          <Button
            size="sm"
            variant="outline"
            onClick={() => setValue(Math.min(999, value + 1))}
          >
            +1
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setValue(Math.max(0, value - 1))}
          >
            -1
          </Button>
        </div>
        <SplatterBadge value={value} className="self-start" />
      </div>
    </div>
  )
}
