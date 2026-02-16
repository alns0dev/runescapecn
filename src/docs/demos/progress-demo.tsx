import { Progress } from "@/components/ui/progress"

export default function ProgressDemo() {
  return (
    <div className="space-y-3 max-w-xl">
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Default (Green)
        </p>
        <Progress value={73} max={99} label="73/99" />
      </div>
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Orange
        </p>
        <Progress variant="orange" value={54} max={99} label="54/99" />
      </div>
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Red
        </p>
        <Progress variant="red" value={18} max={99} label="18/99" />
      </div>
    </div>
  )
}
