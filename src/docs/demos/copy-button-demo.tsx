import { CopyButton } from "@/components/ui/copy-button"

export default function CopyButtonDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-rs-brown-light text-base">Copy install command:</span>
        <CopyButton code="pnpm add runescapecn" />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-rs-brown-light text-base">Copy import:</span>
        <CopyButton code='import { Button } from "@/components/ui/button"' />
      </div>
    </div>
  )
}
