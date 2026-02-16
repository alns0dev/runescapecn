import { useEffect, useState } from "react"
import { Sword, Shield, Coins, Github, Flame } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { CopyButton } from "@/components/ui/copy-button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Link, useLocation } from "react-router-dom"

const buttonCode = `import { Button } from "@/components/ui/button"

<Button variant="default">Attack</Button>
<Button variant="classic">Reset Save</Button>
<Button variant="stone">Expel Guests</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Wiki Link</Button>

{/* Sizes */}
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Coins /></Button>`

const cardCode = `import {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Player Stats</CardTitle>
    <CardDescription>Combat Level 126</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Attack: 99</p>
  </CardContent>
  <CardFooter>
    <Button size="sm" variant="success">Eat Food</Button>
  </CardFooter>
</Card>`

const dialogCode = `import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Trade Window</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Trade Request</DialogTitle>
      <DialogDescription>
        Zezima wishes to trade with you
      </DialogDescription>
    </DialogHeader>
    <div className="p-4">Trade contents here</div>
    <DialogFooter>
      <Button variant="success">Accept</Button>
      <Button variant="destructive">Decline</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const selectCode = `import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem
} from "@/components/ui/select"

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
</Select>`

const tooltipCode = `import {
  Tooltip, TooltipTrigger,
  TooltipContent, TooltipProvider
} from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Dragon Scimitar</Button>
    </TooltipTrigger>
    <TooltipContent>
      A powerful scimitar made from dragon metal.
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`

const progressCode = `import { Progress } from "@/components/ui/progress"

<Progress dynamicColor value={progress} max={99} label={\`\${progress}/99\`} />
<Progress value={88} max={99} label="88/99" />`

const inputCode = `import { Input } from "@/components/ui/input"

<Input placeholder="Enter item name" />`

const tabsCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="inventory">
  <TabsList>
    <TabsTrigger value="inventory">Inventory</TabsTrigger>
    <TabsTrigger value="equipment">Equipment</TabsTrigger>
    <TabsTrigger value="prayer">Prayer</TabsTrigger>
  </TabsList>
  <TabsContent value="inventory">Inventory panel</TabsContent>
  <TabsContent value="equipment">Equipment panel</TabsContent>
  <TabsContent value="prayer">Prayer panel</TabsContent>
</Tabs>`

const checkboxCode = `import { Checkbox } from "@/components/ui/checkbox"

<div className="flex items-center gap-2">
  <Checkbox id="auto-retaliate" defaultChecked />
  <label htmlFor="auto-retaliate">Auto Retaliate</label>
</div>`

const badgeCode = `import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="outline">Outline</Badge>`

function App() {
  const [hitpoints, setHitpoints] = useState(99)
  const [searchValue, setSearchValue] = useState("")
  const [quickPrayer, setQuickPrayer] = useState(false)
  const [autoRetaliate, setAutoRetaliate] = useState(true)
  const [animatedProgress, setAnimatedProgress] = useState(0)
  const { pathname } = useLocation()

  const isWhyPage = pathname === "/why"

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAnimatedProgress((prev) => (prev >= 99 ? prev : prev + 1))
    }, 80)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (animatedProgress < 99) {
      return
    }

    const resetId = window.setTimeout(() => {
      setAnimatedProgress(0)
    }, 3500)

    return () => {
      window.clearTimeout(resetId)
    }
  }, [animatedProgress])

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-rs-brown-dark flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b-2 border-black bg-rs-brown-dark/90 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14 px-4 md:px-8">
            <Link to="/" className="flex items-center gap-3">
              <Sword className="h-6 w-6 text-rs-gold" />
              <span className="text-lg text-rs-gold font-[family-name:var(--font-rs-bold)] hidden sm:inline">
                runescapecn/ui
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="/docs/components/button"
                className="text-base text-rs-brown-light hover:text-rs-yellow font-[family-name:var(--font-rs-bold)] transition-none"
              >
                Docs
              </Link>
              <Link
                to="/why"
                className="text-base text-rs-brown-light hover:text-rs-yellow font-[family-name:var(--font-rs-bold)] transition-none"
              >
                Why
              </Link>
              <a
                href="https://github.com/a01410207/runescapecn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rs-brown-light hover:text-rs-yellow transition-none"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">
          {isWhyPage ? (
            <section className="px-4 py-14 md:py-20">
              <div className="max-w-[980px] mx-auto rs-stone-bg border-2 border-black shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(255,255,255,0.08),6px_6px_0_rgba(0,0,0,0.4)] p-6 md:p-10 space-y-6">
                <h1 className="text-5xl md:text-7xl text-rs-gold normal-case font-[family-name:var(--font-rs-bold)]">
                  Why RuneScapeCN
                </h1>
                <p className="text-xl md:text-2xl text-rs-orange font-[family-name:var(--font-rs)] leading-relaxed">
                  OrcDev showed what is possible with{" "}
                  <a
                    href="https://www.warcraftcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rs-gold underline underline-offset-4 hover:text-rs-yellow transition-none"
                  >
                    warcraftcn.com
                  </a>
                  : a focused UI language that feels native to the game
                  instead of generic web design.
                </p>
                <p className="text-lg md:text-xl text-rs-brown-light leading-relaxed">
                  In the decades-long rivalry of RuneScape vs Warcraft,
                  both communities built{" "}
                  <span className="text-rs-cyan">legends</span>. But web
                  tooling around
                  RuneScape deserved the same level of craft and identity.
                  As a 20+ year RuneScape player, this project exists
                  because RuneScape could not be left behind.
                </p>
                <p className="text-lg md:text-xl text-rs-brown-light leading-relaxed">
                  runescapecn brings OSRS visual DNA into reusable
                  components: hard edges, beveled borders, local
                  RuneStar fonts, and{" "}
                  <span className="text-rs-yellow">
                    practical shadcn-style APIs
                  </span>{" "}
                  so teams
                  can build fast without losing the world feel.
                </p>
                <div className="border-t-2 border-black pt-4">
                  <Link
                    to="/"
                    className="inline-flex items-center border-2 border-black bg-rs-gold px-4 py-2 text-black font-[family-name:var(--font-rs-bold)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.3),inset_-1px_-1px_0_rgba(0,0,0,0.5)] hover:text-rs-yellow transition-none"
                  >
                    Back To Components
                  </Link>
                </div>
              </div>
            </section>
          ) : (
            <>
          {/* Hero */}
          <section className="relative flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rs-gold/8 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-rs-orange/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-[750px] w-full rs-stone-bg border-2 border-black shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(255,255,255,0.08),6px_6px_0_rgba(0,0,0,0.4)] flex flex-col items-center text-center px-6 py-16 md:px-12 md:py-24">
              <Sword className="h-16 w-16 md:h-20 md:w-20 text-rs-gold mb-6" />

              <h1 className="text-5xl md:text-7xl text-rs-gold mb-4 normal-case font-[family-name:var(--font-rs-bold)]">
                runescapecn
              </h1>

              <p className="text-xl md:text-2xl text-rs-brown-light max-w-xl mb-8 font-[family-name:var(--font-rs-quill)] leading-relaxed normal-case">
                Old School RuneScape-themed UI components built on
                shadcn/ui. Classic OSRS borders, authentic fonts, and
                that Gielinor feel.
              </p>

              <p className="text-base md:text-lg text-rs-orange max-w-xl mb-8 font-[family-name:var(--font-rs)] leading-relaxed normal-case">
                Work in progress: more OSRS-inspired UI components are
                actively being added.
              </p>

              <Button asChild size="lg" className="text-lg px-10">
                <Link to="/docs/components/button">Get Started</Link>
              </Button>
            </div>
          </section>

          {/* Component Showcase */}
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20 space-y-16">
            {/* Buttons */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Buttons
                </h2>
                <CopyButton code={buttonCode} />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">
                  <Sword className="mr-1" /> Attack
                </Button>
                <Button variant="classic">
                  Reset Save
                </Button>
                <Button variant="stone">
                  Expel Guests
                </Button>
                <Button variant="destructive">
                  <Flame className="mr-1" /> Destructive
                </Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Wiki Link</Button>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Coins />
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </section>

            {/* Cards */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Cards
                </h2>
                <CopyButton code={cardCode} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Player Stats</CardTitle>
                    <CardDescription>Combat Level 126</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-base">
                      <div className="flex justify-between">
                        <span className="text-rs-orange">Attack</span>
                        <span className="text-rs-green">99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-rs-orange">Strength</span>
                        <span className="text-rs-green">99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-rs-orange">Defence</span>
                        <span className="text-rs-green">99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-rs-orange">Hitpoints</span>
                        <span className="text-rs-green">{hitpoints}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() =>
                        setHitpoints((hp) => Math.min(99, hp + 10))
                      }
                    >
                      Eat Food
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() =>
                        setHitpoints((hp) => Math.max(0, hp - 15))
                      }
                    >
                      Take Hit
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quest Log</CardTitle>
                    <CardDescription>3 Quests Available</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-base">
                      <div className="text-rs-green">
                        &#10004; Cook&apos;s Assistant
                      </div>
                      <div className="text-rs-yellow">
                        ~ Dragon Slayer
                      </div>
                      <div className="text-rs-red">
                        &#10008; Recipe for Disaster
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Dialog */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Dialog
                </h2>
                <CopyButton code={dialogCode} />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Trade Window</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Trade Request</DialogTitle>
                    <DialogDescription>
                      Zezima wishes to trade with you
                    </DialogDescription>
                  </DialogHeader>
                  <div className="p-4 text-base text-rs-orange space-y-3">
                    <div className="border-2 border-black p-3 bg-rs-brown-dark">
                      <p className="text-rs-gold mb-2">
                        Their Offer:
                      </p>
                      <div className="flex gap-2">
                        <span className="text-rs-green">
                          Abyssal Whip x1
                        </span>
                      </div>
                    </div>
                    <div className="border-2 border-black p-3 bg-rs-brown-dark">
                      <p className="text-rs-gold mb-2">
                        Your Offer:
                      </p>
                      <div className="flex gap-2">
                        <span className="text-rs-orange">
                          10,000,000 GP
                        </span>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="success">Accept</Button>
                    <Button variant="destructive">Decline</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </section>

            {/* Select */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Select
                </h2>
                <CopyButton code={selectCode} />
              </div>
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
            </section>

            {/* Progress */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Progress
                </h2>
                <CopyButton code={progressCode} />
              </div>
              <div className="space-y-3 max-w-xl">
                <Progress
                  dynamicColor
                  value={animatedProgress}
                  max={99}
                  label={`${animatedProgress}/99`}
                />
                <Progress value={88} max={99} label="88/99" />
                <p className="text-sm text-rs-brown-light">
                  Color legend: 0-20 red, 21-49 orange, 50-74 yellow, 75-100
                  green.
                </p>
              </div>
            </section>

            {/* Input */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Input
                </h2>
                <CopyButton code={inputCode} />
              </div>
              <div className="max-w-md space-y-3">
                <Input
                  placeholder="Search Grand Exchange"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
                <p className="text-rs-brown-light text-base">
                  Current query: <span className="text-rs-orange">{searchValue || "None"}</span>
                </p>
              </div>
            </section>

            {/* Tabs */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Tabs
                </h2>
                <CopyButton code={tabsCode} />
              </div>
              <Tabs defaultValue="inventory" className="max-w-2xl">
                <TabsList>
                  <TabsTrigger value="inventory">Inventory</TabsTrigger>
                  <TabsTrigger value="equipment">Equipment</TabsTrigger>
                  <TabsTrigger value="prayer">Prayer</TabsTrigger>
                </TabsList>
                <TabsContent value="inventory">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">Shark</div>
                    <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">Brew</div>
                    <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">Whip</div>
                    <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">Rune</div>
                  </div>
                </TabsContent>
                <TabsContent value="equipment">
                  <div className="space-y-2">
                    <p><span className="text-rs-gold">Weapon:</span> Abyssal Whip</p>
                    <p><span className="text-rs-gold">Body:</span> Bandos Chestplate</p>
                    <p><span className="text-rs-gold">Cape:</span> Fire Cape</p>
                  </div>
                </TabsContent>
                <TabsContent value="prayer">
                  <p>Prayer book ready. Activate your boosts before battle.</p>
                </TabsContent>
              </Tabs>
            </section>

            {/* Checkbox */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Checkbox
                </h2>
                <CopyButton code={checkboxCode} />
              </div>
              <div className="space-y-3">
                <label
                  htmlFor="quick-prayer"
                  className="flex items-center gap-3 text-rs-orange"
                >
                  <Checkbox
                    id="quick-prayer"
                    checked={quickPrayer}
                    onCheckedChange={(checked) => setQuickPrayer(checked === true)}
                  />
                  Quick Prayer
                </label>
                <label
                  htmlFor="auto-retaliate"
                  className="flex items-center gap-3 text-rs-orange"
                >
                  <Checkbox
                    id="auto-retaliate"
                    checked={autoRetaliate}
                    onCheckedChange={(checked) => setAutoRetaliate(checked === true)}
                  />
                  Auto Retaliate
                </label>
              </div>
            </section>

            {/* Badge */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Badge
                </h2>
                <CopyButton code={badgeCode} />
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge>Members</Badge>
                <Badge variant="destructive">Skulled</Badge>
                <Badge variant="success">Safe</Badge>
                <Badge variant="outline">Free-to-Play</Badge>
              </div>
            </section>

            {/* Tooltips */}
            <section>
              <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                  Tooltips
                </h2>
                <CopyButton code={tooltipCode} />
              </div>
              <div className="flex flex-wrap gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="default">
                      <Sword className="mr-1" /> Dragon Scimitar
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>A powerful scimitar made from dragon metal.</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Shield className="mr-1" /> Rune Kiteshield
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Requires 40 Defence to equip.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </section>
          </div>
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-black bg-rs-brown-dark/80">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-1 md:gap-3 py-3 px-4 md:px-8">
            <p className="text-base text-rs-brown-light flex items-center gap-2">
              <span>
                Built by{" "}
                <a
                  href="https://x.com/alns0_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rs-orange hover:text-rs-yellow underline underline-offset-4"
                >
                  alns0
                </a>
              </span>
              <span className="text-rs-brown-light/70">|</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help text-rs-green">
                    Level 99 Development
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>13,034,431 xp</p>
                </TooltipContent>
              </Tooltip>
            </p>
            <p className="text-sm text-rs-brown-light/90">
              Disclaimer: runescapecn is not affiliated with Jagex or
              RuneScape. This is a developer tribute project inspired by
              the game.
            </p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}

export default App
