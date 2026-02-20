import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function SliderDemo() {
  const [music, setMusic] = useState([75])
  const [sfx, setSfx] = useState([50])

  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Audio Settings
        </p>
        <div className="space-y-4 max-w-sm">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Music Volume</Label>
              <span className="text-rs-orange text-sm">{music[0]}%</span>
            </div>
            <Slider
              value={music}
              onValueChange={setMusic}
              max={100}
              step={1}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>SFX Volume</Label>
              <span className="text-rs-orange text-sm">{sfx[0]}%</span>
            </div>
            <Slider
              value={sfx}
              onValueChange={setSfx}
              max={100}
              step={1}
            />
          </div>
          <div className="space-y-2">
            <Label>Disabled</Label>
            <Slider defaultValue={[30]} max={100} step={1} disabled />
          </div>
        </div>
      </div>
    </div>
  )
}
