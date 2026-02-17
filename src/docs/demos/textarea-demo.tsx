import { useState } from "react"

import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  const [value, setValue] = useState("")

  return (
    <div className="max-w-md space-y-4">
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Default
        </p>
        <Textarea
          placeholder="Type your message here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="text-rs-brown-light text-base mt-2">
          Characters: <span className="text-rs-orange">{value.length}</span>
        </p>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          With Placeholder
        </p>
        <Textarea placeholder="Describe your bug report..." />
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Disabled
        </p>
        <Textarea disabled placeholder="Chat disabled in this area" />
      </div>
    </div>
  )
}
