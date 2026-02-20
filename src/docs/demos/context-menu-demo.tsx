import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
} from "@/components/ui/context-menu"
import { useState } from "react"

export default function ContextMenuDemo() {
  const [autoRetaliate, setAutoRetaliate] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Right-click the area below
        </p>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center border-2 border-black border-dashed bg-rs-brown-dark text-rs-orange">
            Right-click here (NPC: Guard)
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem className="text-rs-yellow">
              Attack Guard (lvl-21)
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Talk-to Guard</ContextMenuItem>
            <ContextMenuItem>Pickpocket Guard</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Follow Guard</ContextMenuItem>
                <ContextMenuItem>Examine Guard</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={autoRetaliate}
              onCheckedChange={setAutoRetaliate}
            >
              Auto Retaliate
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Cancel</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  )
}
