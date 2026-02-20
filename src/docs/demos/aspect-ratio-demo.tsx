import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          16:9 — Map View
        </p>
        <div className="w-[400px] border-2 border-black shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(255,255,255,0.08)]">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center bg-rs-brown-dark text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
              World Map (16:9)
            </div>
          </AspectRatio>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          1:1 — Item Sprite
        </p>
        <div className="w-[120px] border-2 border-black shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(255,255,255,0.08)]">
          <AspectRatio ratio={1}>
            <div className="flex h-full w-full items-center justify-center bg-rs-brown-dark text-rs-gold uppercase font-[family-name:var(--font-rs-bold)] text-sm">
              Item (1:1)
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}
