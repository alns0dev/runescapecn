import { useState } from "react"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SwitchDemo() {
  const [runMode, setRunMode] = useState(false)
  const [autoRetaliate, setAutoRetaliate] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Switch
          id="demo-run"
          checked={runMode}
          onCheckedChange={setRunMode}
        />
        <Label htmlFor="demo-run">
          Run Mode:{" "}
          <span className={runMode ? "text-rs-green" : "text-rs-red"}>
            {runMode ? "On" : "Off"}
          </span>
        </Label>
      </div>

      <div className="flex items-center gap-3">
        <Switch
          id="demo-retaliate"
          checked={autoRetaliate}
          onCheckedChange={setAutoRetaliate}
        />
        <Label htmlFor="demo-retaliate">
          Auto Retaliate:{" "}
          <span className={autoRetaliate ? "text-rs-green" : "text-rs-red"}>
            {autoRetaliate ? "On" : "Off"}
          </span>
        </Label>
      </div>

      <div className="flex items-center gap-3">
        <Switch id="demo-disabled" disabled />
        <Label htmlFor="demo-disabled" className="opacity-50">
          Members Feature (Disabled)
        </Label>
      </div>
    </div>
  )
}
