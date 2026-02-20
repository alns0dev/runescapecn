import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"

const hiscores = [
  { rank: 1, player: "Zezima", level: 99, xp: "200,000,000" },
  { rank: 2, player: "Lynx Titan", level: 99, xp: "200,000,000" },
  { rank: 3, player: "Hey Jase", level: 99, xp: "200,000,000" },
  { rank: 4, player: "Suomi", level: 99, xp: "183,452,891" },
  { rank: 5, player: "S Diamant Y", level: 98, xp: "167,221,003" },
]

export default function TableDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Hiscores Table
        </p>
        <div className="border-2 border-black rs-stone-bg shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(255,255,255,0.08)]">
          <Table>
            <TableCaption>Attack Hiscores - Top 5</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">Rank</TableHead>
                <TableHead>Player</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-right">Experience</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hiscores.map((row) => (
                <TableRow key={row.rank}>
                  <TableCell className="text-rs-gold">{row.rank}</TableCell>
                  <TableCell className="text-rs-yellow">{row.player}</TableCell>
                  <TableCell>{row.level}</TableCell>
                  <TableCell className="text-right">{row.xp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Your Rank</TableCell>
                <TableCell className="text-right">1,204,531</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  )
}
