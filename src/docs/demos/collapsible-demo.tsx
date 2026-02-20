import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Chat Channel
        </p>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[300px] space-y-2"
        >
          <div className="flex items-center justify-between border-2 border-black bg-rs-brown-dark px-3 py-2">
            <span className="text-sm text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
              Clan Chat
            </span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="border-2 border-black bg-rs-brown-dark px-3 py-2 text-sm text-rs-cyan">
            [Clan] Zezima: gl on the drop
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="border-2 border-black bg-rs-brown-dark px-3 py-2 text-sm text-rs-cyan">
              [Clan] Woox: ty, 1200 kc dry
            </div>
            <div className="border-2 border-black bg-rs-brown-dark px-3 py-2 text-sm text-rs-cyan">
              [Clan] B0aty: rng be like that
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}
