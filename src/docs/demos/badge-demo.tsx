import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>Members</Badge>
      <Badge variant="destructive">Skulled</Badge>
      <Badge variant="success">Safe</Badge>
      <Badge variant="outline">Free-to-Play</Badge>
    </div>
  )
}
