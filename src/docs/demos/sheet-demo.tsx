import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function SheetDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Side Panels
        </p>
        <div className="flex flex-wrap gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="classic">Inventory (Right)</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Inventory</SheetTitle>
                <SheetDescription>28 slots available</SheetDescription>
              </SheetHeader>
              <div className="p-4 space-y-2">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 border-2 border-black bg-rs-brown-dark shadow-[inset_1px_1px_0_rgba(0,0,0,0.7),inset_-1px_-1px_0_rgba(255,255,255,0.05)]"
                    />
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="classic">Quest Log (Left)</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Quest Journal</SheetTitle>
                <SheetDescription>Completed: 42 / 158</SheetDescription>
              </SheetHeader>
              <div className="p-4 space-y-1 text-sm">
                <p className="text-rs-green">Cook's Assistant</p>
                <p className="text-rs-green">Dragon Slayer</p>
                <p className="text-rs-yellow">Monkey Madness</p>
                <p className="text-rs-red">Song of the Elves</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
