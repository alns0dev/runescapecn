import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function PopoverDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Item Examine
        </p>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="classic">Examine Item</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <h4 className="text-base font-bold text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
                Abyssal Whip
              </h4>
              <div className="text-sm text-rs-orange space-y-1">
                <p>A weapon from the Abyss.</p>
                <div className="border-t border-rs-brown-light/20 pt-1 mt-1">
                  <p>Attack Speed: 4</p>
                  <p>Slash Attack: +82</p>
                  <p>Strength: +82</p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
