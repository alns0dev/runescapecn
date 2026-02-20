import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function NavigationMenuDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Wiki Navigation
        </p>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 md:w-[400px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 p-2 text-rs-orange hover:text-rs-yellow no-underline outline-none cursor-pointer"
                        href="#"
                      >
                        <div className="text-sm font-bold uppercase text-rs-gold font-[family-name:var(--font-rs-bold)]">
                          Combat
                        </div>
                        <p className="text-sm text-rs-brown-light">
                          Attack, Strength, Defence, Ranged, Prayer, Magic, Hitpoints
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 p-2 text-rs-orange hover:text-rs-yellow no-underline outline-none cursor-pointer"
                        href="#"
                      >
                        <div className="text-sm font-bold uppercase text-rs-gold font-[family-name:var(--font-rs-bold)]">
                          Gathering
                        </div>
                        <p className="text-sm text-rs-brown-light">
                          Mining, Fishing, Woodcutting, Farming, Hunter
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())} href="#">
                Quests
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())} href="#">
                Grand Exchange
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
