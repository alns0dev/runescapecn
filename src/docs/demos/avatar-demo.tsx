import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          With Fallback Initials
        </p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>ZZ</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>LT</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>HJ</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          With Image
        </p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://oldschool.runescape.wiki/images/Abyssal_whip_detail.png" alt="Abyssal Whip" />
            <AvatarFallback>AW</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://oldschool.runescape.wiki/images/Dragon_scimitar_detail.png" alt="Dragon Scimitar" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Sizes
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-20 w-20">
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
