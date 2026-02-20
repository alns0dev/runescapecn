import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Combat Style
        </p>
        <RadioGroup defaultValue="accurate">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="accurate" id="accurate" />
            <Label htmlFor="accurate">Accurate (+3 Attack)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="aggressive" id="aggressive" />
            <Label htmlFor="aggressive">Aggressive (+3 Strength)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="defensive" id="defensive" />
            <Label htmlFor="defensive">Defensive (+3 Defence)</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="controlled" id="controlled" />
            <Label htmlFor="controlled">Controlled (+1 each)</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
