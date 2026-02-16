import { useState } from "react"

import { Input } from "@/components/ui/input"

export default function InputDemo() {
  const [value, setValue] = useState("")

  return (
    <div className="max-w-md space-y-4">
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Default
        </p>
        <Input
          placeholder="Search Grand Exchange"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="text-rs-brown-light text-base mt-2">
          Current query: <span className="text-rs-orange">{value || "None"}</span>
        </p>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          With Placeholder
        </p>
        <Input placeholder="Enter item name..." />
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Disabled
        </p>
        <Input disabled placeholder="Members only" />
      </div>
    </div>
  )
}
