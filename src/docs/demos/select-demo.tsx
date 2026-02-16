import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <div className="max-w-xs">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose Combat Style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="accurate">Accurate</SelectItem>
          <SelectItem value="aggressive">Aggressive</SelectItem>
          <SelectItem value="defensive">Defensive</SelectItem>
          <SelectItem value="controlled">Controlled</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
