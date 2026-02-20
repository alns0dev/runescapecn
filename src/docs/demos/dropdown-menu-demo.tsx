import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function DropdownMenuDemo() {
  const [showMinimap, setShowMinimap] = useState(true)
  const [combatStyle, setCombatStyle] = useState("accurate")

  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Settings Menu
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="classic">Settings</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Game Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showMinimap}
              onCheckedChange={setShowMinimap}
            >
              Show Minimap
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Combat Style</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup
                  value={combatStyle}
                  onValueChange={setCombatStyle}
                >
                  <DropdownMenuRadioItem value="accurate">
                    Accurate
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="aggressive">
                    Aggressive
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="defensive">
                    Defensive
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="controlled">
                    Controlled
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
