import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Trade Window</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Trade Request</DialogTitle>
          <DialogDescription>
            Zezima wishes to trade with you
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 text-base text-rs-orange space-y-3">
          <div className="border-2 border-black p-3 bg-rs-brown-dark">
            <p className="text-rs-gold mb-2">Their Offer:</p>
            <div className="flex gap-2">
              <span className="text-rs-green">Abyssal Whip x1</span>
            </div>
          </div>
          <div className="border-2 border-black p-3 bg-rs-brown-dark">
            <p className="text-rs-gold mb-2">Your Offer:</p>
            <div className="flex gap-2">
              <span className="text-rs-orange">10,000,000 GP</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="success">Accept</Button>
          <Button variant="destructive">Decline</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
