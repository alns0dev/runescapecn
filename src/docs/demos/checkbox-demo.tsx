import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDemo() {
  const [quickPrayer, setQuickPrayer] = useState(false)
  const [autoRetaliate, setAutoRetaliate] = useState(true)

  return (
    <div className="space-y-4">
      <label
        htmlFor="demo-quick-prayer"
        className="flex items-center gap-3 text-rs-orange cursor-pointer"
      >
        <Checkbox
          id="demo-quick-prayer"
          checked={quickPrayer}
          onCheckedChange={(checked) => setQuickPrayer(checked === true)}
        />
        Quick Prayer
      </label>

      <label
        htmlFor="demo-auto-retaliate"
        className="flex items-center gap-3 text-rs-orange cursor-pointer"
      >
        <Checkbox
          id="demo-auto-retaliate"
          checked={autoRetaliate}
          onCheckedChange={(checked) => setAutoRetaliate(checked === true)}
        />
        Auto Retaliate
      </label>

      <label
        htmlFor="demo-disabled"
        className="flex items-center gap-3 text-rs-brown-light cursor-not-allowed"
      >
        <Checkbox id="demo-disabled" disabled />
        Run Energy (Disabled)
      </label>
    </div>
  )
}
