import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Sword, Shield, Zap } from "lucide-react"

export default function ToggleGroupDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Single Selection — Combat Style
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
          Multiple Selection — Protect Prayers
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

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Outline Variant
        </p>
        <ToggleGroup type="single" variant="outline" defaultValue="fixed">
          <ToggleGroupItem value="fixed">Fixed</ToggleGroupItem>
          <ToggleGroupItem value="resizable">Resizable</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Small Size
        </p>
        <ToggleGroup type="single" size="sm" defaultValue="walk">
          <ToggleGroupItem value="walk">Walk</ToggleGroupItem>
          <ToggleGroupItem value="run">
            <Zap className="mr-1 h-3 w-3" /> Run
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}
