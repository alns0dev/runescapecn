import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Horizontal
        </p>
        <div className="space-y-3">
          <p className="text-rs-orange text-base">Attack: 99</p>
          <Separator />
          <p className="text-rs-orange text-base">Strength: 99</p>
          <Separator />
          <p className="text-rs-orange text-base">Defence: 99</p>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Vertical
        </p>
        <div className="flex items-center gap-4 h-6">
          <span className="text-rs-orange text-base">Melee</span>
          <Separator orientation="vertical" />
          <span className="text-rs-orange text-base">Ranged</span>
          <Separator orientation="vertical" />
          <span className="text-rs-orange text-base">Magic</span>
        </div>
      </div>
    </div>
  )
}
