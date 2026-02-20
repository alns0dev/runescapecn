import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const friends = [
  "Zezima",
  "Lynx Titan",
  "Woox",
  "B0aty",
  "Settled",
  "Torvesta",
  "Framed",
  "C Engineer",
  "Swampletics",
  "J1mmy",
  "FlippingOldSchool",
  "Skill Specs",
  "Sparc Mac",
  "A Friend",
  "Mr Mammal",
]

export default function ScrollAreaDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Friends List
        </p>
        <ScrollArea className="h-48 w-60 border-2 border-black rs-stone-bg shadow-[inset_1px_1px_0_rgba(0,0,0,0.7),inset_-1px_-1px_0_rgba(255,255,255,0.05)]">
          <div className="p-3">
            <h4 className="mb-2 text-sm font-bold text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
              Friends List
            </h4>
            {friends.map((friend, i) => (
              <div key={friend}>
                <div className="text-sm text-rs-green py-1">{friend}</div>
                {i < friends.length - 1 && <Separator className="bg-rs-brown-light/20" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
