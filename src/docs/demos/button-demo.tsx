import { useState } from "react"
import { Sword, Coins, Flame } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Variants
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">
            <Sword className="mr-1" /> Attack
          </Button>
          <Button variant="classic">
            Reset Save
          </Button>
          <Button variant="stone">
            Expel Guests
          </Button>
          <Button variant="destructive">
            <Flame className="mr-1" /> Destructive
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Wiki Link</Button>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Sizes
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Coins />
          </Button>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Disabled
        </p>
        <Button disabled>Disabled</Button>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Interactive
        </p>
        <div className="flex items-center gap-3">
          <Button onClick={() => setCount((c) => c + 1)}>
            Click Me
          </Button>
          <span className="text-rs-orange">Count: {count}</span>
        </div>
      </div>
    </div>
  )
}
