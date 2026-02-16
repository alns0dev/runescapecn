import { Sword, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="default">
              <Sword className="mr-1" /> Dragon Scimitar
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>A powerful scimitar made from dragon metal.</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Shield className="mr-1" /> Rune Kiteshield
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Requires 40 Defence to equip.</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
