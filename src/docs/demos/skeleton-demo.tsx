import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Player Card Loading
        </p>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[140px]" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Stat Panel Loading
        </p>
        <div className="space-y-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[80%]" />
          <Skeleton className="h-5 w-[60%]" />
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          GE Price Tile Loading
        </p>
        <div className="grid grid-cols-3 gap-3">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    </div>
  )
}
