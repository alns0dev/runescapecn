import { useEffect, useState, useRef } from "react"
import { Copy, Check, ChevronDown, ExternalLink } from "lucide-react"
import { useHead } from "@/hooks/use-head"

const REPO_URL = "https://github.com/alns0dev/runescapecn"

const llmMarkdown = `# runescapecn/ui

An Old School RuneScape-themed UI component library built on shadcn/ui patterns. Pixel-perfect borders, authentic OSRS fonts, beveled 3D shadows, and the classic Gielinor dark aesthetic.

## Stack

- React + TypeScript
- Tailwind CSS v4 (CSS-first config, no tailwind.config.js)
- Radix UI primitives (Dialog, Select, Tooltip, Checkbox)
- Class Variance Authority (CVA) for variant management
- Path alias: \`@/\` maps to \`src/\`

## Design System

### Colors (Tailwind classes)
| Token | Hex | Usage |
|---|---|---|
| \`rs-gold\` | \`#C9A961\` | Primary, titles, accents |
| \`rs-orange\` | \`#FF981F\` | Text, hovers, links |
| \`rs-brown-dark\` | \`#1a1a1a\` | Page background |
| \`rs-brown-medium\` | \`#2a2a2a\` | Mid surfaces |
| \`rs-brown-light\` | \`#7a7a7a\` | Muted text, borders |
| \`rs-green\` | \`#00FF00\` | Success |
| \`rs-red\` | \`#FF0000\` | Destructive |
| \`rs-yellow\` | \`#FFEB3B\` | Warnings, tooltips |
| \`rs-cyan\` | \`#00FFFF\` | Accent alt |

### Fonts (CSS variables)
| Variable | Font | Use for |
|---|---|---|
| \`--font-rs\` | RuneScape Plain 12 | Body text (default) |
| \`--font-rs-bold\` | RuneScape Bold 12 | Buttons, headings, emphasis |
| \`--font-rs-quill\` | RuneScape Quill | Decorative descriptions |
| \`--font-rs-quill-caps\` | RuneScape Quill Caps | Large display titles |

Apply fonts via: \`font-[family-name:var(--font-rs-bold)]\`

### Border & Shadow Patterns
All components use \`border-radius: 0\`. Never add rounded corners.

Beveled 3D effect shadows — use these exact values:
\`\`\`
Raised:  shadow-[inset_1px_1px_0_rgba(255,255,255,0.3),inset_-1px_-1px_0_rgba(0,0,0,0.5)]
Subtle:  shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)]
Pressed: shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.1),inset_1px_1px_0_rgba(0,0,0,0.6)]
\`\`\`

CSS utilities available: \`.rs-border\`, \`.rs-border-inset\`, \`.rs-border-raised\`, \`.rs-stone-bg\`

### Typography
- Base font size: 20px
- Font smoothing disabled (\`-webkit-font-smoothing: none\`)
- \`image-rendering: pixelated\` on body
- No smooth transitions on interactive elements (\`transition-none\`)

## Styling Rules
- Use Tailwind utility classes. Avoid inline styles.
- Use \`bg-rs-*\` / \`text-rs-*\` / \`border-rs-*\` for RS colors.
- Always use \`border-2 border-black\` for component borders.
- Never use \`rounded-*\` classes. Everything is sharp corners.
- Keep shadows using \`rgba(255,255,255,...)\` for light highlights and \`rgba(0,0,0,...)\` for dark.

## Component Pattern

Every component follows this structure:
\`\`\`tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <element ref={ref} className={cn("base-classes", className)} {...props} />
  )
)
Component.displayName = "Component"

export { Component }
\`\`\`

Rules:
- Always use React.forwardRef with explicit generic types
- Always set .displayName on every component
- Always accept className prop and merge with cn()
- Export as named exports, never default
- If using CVA, export the variants object alongside the component

## Components

### Button
\`\`\`tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Attack</Button>
<Button variant="classic">Reset Save</Button>
<Button variant="stone">Expel Guests</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Wiki Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
<Button asChild><Link to="/path">Link</Link></Button>
\`\`\`
Variants: default, classic, stone, destructive, ghost, link
Sizes: sm, default, lg, icon

### Card
\`\`\`tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
\`\`\`

### Dialog
\`\`\`tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <div>Content</div>
    <DialogFooter>
      <Button variant="success">Accept</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`

### Select
\`\`\`tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select>
  <SelectTrigger><SelectValue placeholder="Choose..." /></SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>
\`\`\`

### Tabs
\`\`\`tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
\`\`\`

### Input
\`\`\`tsx
import { Input } from "@/components/ui/input"

<Input placeholder="Search Grand Exchange" />
<Input type="password" placeholder="Enter PIN" />
<Input disabled placeholder="Disabled" />
\`\`\`

### Checkbox
\`\`\`tsx
import { Checkbox } from "@/components/ui/checkbox"

<Checkbox id="option" />
<Checkbox defaultChecked />
<Checkbox disabled />
\`\`\`

### Badge
\`\`\`tsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="outline">Outline</Badge>
\`\`\`
Variants: default, destructive, success, outline

### Tooltip
\`\`\`tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button>Hover me</Button></TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
\`\`\`

### Progress
\`\`\`tsx
import { Progress } from "@/components/ui/progress"

<Progress value={73} max={99} label="73/99" />
<Progress variant="orange" value={54} max={99} />
<Progress variant="red" value={18} max={99} />
\`\`\`
Variants: default (green), orange, red

### CopyButton
\`\`\`tsx
import { CopyButton } from "@/components/ui/copy-button"

<CopyButton code="text to copy" />
\`\`\`
`

const aiServices = [
  {
    name: "Open in GitHub",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    getUrl: () => REPO_URL,
  },
  {
    name: "Open in ChatGPT",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.67.414a6.02 6.02 0 00-5.753 4.14 5.98 5.98 0 00-3.946 2.93 6.046 6.046 0 00.749 7.11 5.98 5.98 0 00.51 4.91 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.33 23.586a6.02 6.02 0 005.753-4.14 5.98 5.98 0 003.946-2.93 6.046 6.046 0 00-.747-6.695zM13.33 22.115a4.508 4.508 0 01-2.886-1.04l.142-.081 4.794-2.769a.778.778 0 00.395-.678v-6.76l2.027 1.17a.071.071 0 01.038.052v5.594a4.525 4.525 0 01-4.51 4.512zM3.68 18.075a4.49 4.49 0 01-.54-3.025l.142.085 4.783 2.762a.777.777 0 00.785 0l5.843-3.373v2.34a.072.072 0 01-.029.062l-4.836 2.792a4.525 4.525 0 01-6.148-1.643zM2.458 7.87a4.485 4.485 0 012.348-1.972V11.6a.778.778 0 00.395.677l5.843 3.374-2.028 1.17a.073.073 0 01-.067.006L4.114 14.04A4.525 4.525 0 012.458 7.87zM19.749 11.322l-5.843-3.373 2.027-1.17a.073.073 0 01.067-.005l4.836 2.791a4.52 4.52 0 01-.7 8.162v-5.706a.78.78 0 00-.387-.699zM21.76 8.963l-.142-.085-4.783-2.762a.777.777 0 00-.785 0L10.207 9.49V7.15a.072.072 0 01.029-.062l4.836-2.792a4.518 4.518 0 016.688 4.667zM8.952 12.533L6.924 11.36a.071.071 0 01-.038-.052V5.714a4.518 4.518 0 017.405-3.47l-.142.08-4.794 2.77a.778.778 0 00-.395.677zm1.1-2.373l2.602-1.502 2.602 1.502v3.004l-2.602 1.502-2.602-1.502z" />
      </svg>
    ),
    getUrl: (prompt: string) =>
      `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
  },
  {
    name: "Open in Claude",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M4.709 15.955l4.71-10.96a.836.836 0 011.553 0l4.709 10.96H4.71zm8.178-1.391L10.127 7.7l-2.76 6.864h5.52zM16.5 6.228h-2.507l4.71 10.96h2.505L16.5 6.228zM.792 17.188h2.507l4.71-10.96H5.502L.792 17.188z" />
      </svg>
    ),
    getUrl: (prompt: string) =>
      `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
  },
  {
    name: "Open in T3 Chat",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    getUrl: (prompt: string) =>
      `https://t3.chat/new?q=${encodeURIComponent(prompt)}`,
  },
]

function GetStartedPage() {
  const [copied, setCopied] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useHead(
    "Get Started",
    "Get started with runescapecn, an Old School RuneScape-themed UI component library built on shadcn/ui. Install components via the shadcn registry."
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const handleCopyMarkdown = async () => {
    await navigator.clipboard.writeText(llmMarkdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const aiPrompt = `I want to build a UI using the runescapecn component library. Here is the full documentation:\n\n${llmMarkdown}`

  return (
    <div className="max-w-3xl space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-3">
          Get Started
        </h1>
        <p className="text-lg text-rs-brown-light leading-relaxed">
          An Old School RuneScape-themed UI component library built on shadcn/ui.
          Pixel-perfect borders, authentic OSRS fonts, beveled 3D shadows,
          and that classic Gielinor feel.
        </p>
      </div>

      {/* Actions */}
      <section>
        <div className="flex flex-wrap items-center gap-3">
          {/* Copy Markdown */}
          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center gap-2 border-2 border-black bg-rs-brown-medium px-5 py-2.5 text-base text-rs-orange font-[family-name:var(--font-rs-bold)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] hover:text-rs-yellow transition-none cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-5 w-5 text-rs-green" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" />
                Copy Markdown
              </>
            )}
          </button>

          {/* Open dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-2 border-2 border-black bg-rs-brown-medium px-5 py-2.5 text-base text-rs-orange font-[family-name:var(--font-rs-bold)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] hover:text-rs-yellow transition-none cursor-pointer"
            >
              Open
              <ChevronDown
                className={`h-4 w-4 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1 z-50 min-w-[240px] border-2 border-black bg-rs-brown-dark shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                {aiServices.map((service) => (
                  <a
                    key={service.name}
                    href={service.getUrl(aiPrompt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-base text-rs-orange hover:bg-rs-brown-medium hover:text-rs-yellow transition-none"
                  >
                    {service.icon}
                    <span className="flex-1">{service.name}</span>
                    <ExternalLink className="h-4 w-4 text-rs-brown-light" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What is runescapecn? */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          What is runescapecn?
        </h2>
        <div className="space-y-4 text-base text-rs-brown-light leading-relaxed">
          <p>
            This project provides a collection of UI components inspired by the
            iconic design language of Old School RuneScape. Every component
            features{" "}
            <span className="text-rs-orange">
              sharp corners, beveled 3D borders, pixel-accurate fonts,
            </span>{" "}
            and the dark charcoal palette of Gielinor.
          </p>
          <p>
            All components are designed to be copy-paste ready and work seamlessly
            with React, Tailwind CSS v4, and Radix UI primitives. They follow
            shadcn/ui conventions so you can drop them into any modern React
            project.
          </p>
        </div>
      </section>

      {/* Stack */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Stack
        </h2>
        <div className="space-y-2">
          {[
            ["React + TypeScript", "Component framework and type safety"],
            [
              "Tailwind CSS v4",
              "CSS-first config via @theme and @layer in globals.css",
            ],
            [
              "Radix UI",
              "Accessible primitives for Dialog, Select, Tooltip, Checkbox",
            ],
            [
              "Class Variance Authority",
              "Variant management for components like Button, Badge, Progress",
            ],
            ["Vite", "Dev server and production builds"],
          ].map(([name, desc]) => (
            <div
              key={name}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
            >
              <span className="text-base text-rs-orange font-[family-name:var(--font-rs-bold)] shrink-0">
                {name}
              </span>
              <span className="text-base text-rs-brown-light">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Install via Registry */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Install via Registry
        </h2>
        <div className="space-y-3">
          <p className="text-base text-rs-brown-light leading-relaxed">
            Install any component directly with shadcn CLI from the hosted
            runescapecn registry endpoint.
          </p>
          <pre className="overflow-x-auto border-2 border-black bg-rs-brown-dark p-3 text-rs-orange text-sm font-mono">
            <code>
              pnpm dlx shadcn@latest add https://runescapecn.com/r/badge.json
            </code>
          </pre>
        </div>
      </section>

      {/* For LLMs */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Use with AI
        </h2>
        <div className="space-y-4 text-base text-rs-brown-light leading-relaxed">
          <p>
            Click{" "}
            <span className="text-rs-cyan">Copy Markdown</span> above to copy
            the full component documentation to your clipboard. You can then
            paste it into any LLM (ChatGPT, Claude, etc.) as context so it can
            help you build UIs with runescapecn components.
          </p>
          <p>
            Or use the{" "}
            <span className="text-rs-cyan">Open</span> dropdown to jump
            directly into your preferred AI tool with the documentation
            pre-loaded as a prompt.
          </p>
        </div>
      </section>
    </div>
  )
}

export { GetStartedPage }
