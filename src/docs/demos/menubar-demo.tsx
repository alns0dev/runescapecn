import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarShortcut,
} from "@/components/ui/menubar"
import { useState } from "react"

export default function MenubarDemo() {
  const [roofRemoval, setRoofRemoval] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Application Menu
        </p>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New World <MenubarShortcut>Ctrl+N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open Save <MenubarShortcut>Ctrl+O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Logout</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                checked={roofRemoval}
                onCheckedChange={setRoofRemoval}
              >
                Roof Removal
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem>Fixed Mode</MenubarItem>
              <MenubarItem>Resizable Mode</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Wiki</MenubarItem>
              <MenubarItem>Report Bug</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  )
}
