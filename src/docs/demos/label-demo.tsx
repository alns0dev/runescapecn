import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LabelDemo() {
  return (
    <div className="max-w-md space-y-6">
      <div className="space-y-2">
        <Label htmlFor="demo-username">Username</Label>
        <Input id="demo-username" placeholder="Enter your RSN" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-email">Email</Label>
        <Input id="demo-email" type="email" placeholder="player@gielinor.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="demo-disabled" className="opacity-50">
          Disabled
        </Label>
        <Input id="demo-disabled" disabled placeholder="Members only" />
      </div>
    </div>
  )
}
