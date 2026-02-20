import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Sword, Shield, Zap } from "lucide-react"

export default function ToggleDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Single Toggle
        </p>
        <div className="flex gap-3">
          <Toggle aria-label="Toggle run mode">
            Run
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle spec">
            <Zap className="mr-1 h-4 w-4" />
            Spec
          </Toggle>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Toggle Group (Single)
        </p>
        <ToggleGroup type="single" defaultValue="melee">
          <ToggleGroupItem value="melee">
            <Sword className="mr-1 h-4 w-4" /> Melee
          </ToggleGroupItem>
          <ToggleGroupItem value="ranged">
            Ranged
          </ToggleGroupItem>
          <ToggleGroupItem value="magic">
            Magic
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Toggle Group (Multiple) - Prayers
        </p>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="protect-melee">
            <Shield className="mr-1 h-4 w-4" /> Melee
          </ToggleGroupItem>
          <ToggleGroupItem value="protect-range">
            <Shield className="mr-1 h-4 w-4" /> Range
          </ToggleGroupItem>
          <ToggleGroupItem value="protect-mage">
            <Shield className="mr-1 h-4 w-4" /> Mage
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}
