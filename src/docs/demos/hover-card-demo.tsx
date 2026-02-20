import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Hover over a player name
        </p>
        <div className="flex gap-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="text-rs-yellow cursor-pointer underline underline-offset-4">
                Zezima
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
                  Zezima
                </h4>
                <p className="text-sm text-rs-orange">Combat Level: 126</p>
                <p className="text-sm text-rs-brown-light">
                  Total Level: 2277
                </p>
                <p className="text-xs text-rs-brown-light">
                  First player to reach 99 in all skills.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="text-rs-cyan cursor-pointer underline underline-offset-4">
                Woox
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
                  Woox
                </h4>
                <p className="text-sm text-rs-orange">Combat Level: 126</p>
                <p className="text-sm text-rs-brown-light">
                  Total Level: 2277
                </p>
                <p className="text-xs text-rs-brown-light">
                  Legendary PvM expert and speedrunner.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  )
}
