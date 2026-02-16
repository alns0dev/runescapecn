# RuneScapeCN

Old School RuneScape-themed UI component library built on [shadcn/ui](https://ui.shadcn.com) patterns.

Sharp corners. Bronze borders. Yellow hover text. Just like Gielinor.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Components

### Button

```tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Attack</Button>
<Button variant="destructive">Die</Button>
<Button variant="success">Level Up</Button>
<Button variant="outline">Defend</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Wiki Link</Button>
```

**Variants**: `default` (bronze/gold), `destructive` (red), `success` (green), `outline`, `ghost`, `link`

**Sizes**: `sm`, `default`, `lg`, `icon`

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Player Stats</CardTitle>
    <CardDescription>Combat Level 126</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Attack: 99</p>
  </CardContent>
  <CardFooter>
    <Button>View All</Button>
  </CardFooter>
</Card>
```

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Trade</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Trade Request</DialogTitle>
      <DialogDescription>Zezima wishes to trade with you</DialogDescription>
    </DialogHeader>
    <p>Trade contents here</p>
    <DialogFooter>
      <Button variant="success">Accept</Button>
      <Button variant="destructive">Decline</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose Combat Style" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="accurate">Accurate</SelectItem>
    <SelectItem value="aggressive">Aggressive</SelectItem>
    <SelectItem value="defensive">Defensive</SelectItem>
  </SelectContent>
</Select>
```

### Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Dragon Scimitar</Button>
    </TooltipTrigger>
    <TooltipContent>
      A powerful scimitar made from dragon metal.
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `rs-gold` | `#C9A961` | Primary bronze/gold |
| `rs-orange` | `#FF981F` | Text, hover states |
| `rs-brown-dark` | `#3E2C1E` | Backgrounds |
| `rs-brown-light` | `#8B7355` | Borders, highlights |
| `rs-green` | `#00FF00` | Success states |
| `rs-red` | `#FF0000` | Destructive states |
| `rs-yellow` | `#FFEB3B` | Warnings, tooltips |

### Design Principles

- **Sharp corners**: `border-radius: 0` everywhere
- **2px black borders**: Consistent across all components
- **Raised/inset shadows**: Simulates the classic RS beveled look
- **Uppercase text**: Buttons and headings use `text-transform: uppercase`
- **No smooth animations**: Instant state changes for the pixelated feel
- **Authentic OSRS fonts**: Uses [RuneStar/fonts](https://github.com/RuneStar/fonts) (CC0-1.0) extracted directly from Old School RuneScape

## CSS Utilities

```css
.rs-border        /* Standard RS border with inset shadow */
.rs-border-inset  /* Inset/recessed border for inputs */
.rs-border-raised /* Raised border for prominent elements */
.rs-stone-bg      /* Stone texture background for panels */
```

## Fonts

All 10 authentic OSRS fonts from [RuneStar/fonts](https://github.com/RuneStar/fonts) are included (CC0-1.0 license):

| CSS Variable | Font | Usage |
|---|---|---|
| `--font-rs` | RuneScape Plain 12 | Default body text |
| `--font-rs-bold` | RuneScape Bold 12 | Buttons, headings, emphasis |
| `--font-rs-quill` | RuneScape Quill | Decorative text, descriptions |
| `--font-rs-quill-caps` | RuneScape Quill Caps | Large display headings |

Additional fonts available via `font-family`:
`RuneScape Plain 11`, `RuneScape Quill 8`, `RuneScape Barbarian Assault`, `RuneScape Fairy`, `RuneScape Fairy Large`, `RuneScape Surok`

```tsx
<h1 className="font-[family-name:var(--font-rs-quill-caps)]">Title</h1>
<p className="font-[family-name:var(--font-rs-quill)]">Description</p>
<button className="font-[family-name:var(--font-rs-bold)]">Click</button>
```

## Registry

Components follow the shadcn/ui registry format. See `registry/` for JSON definitions of each component.

## Tech Stack

- React 18+ with TypeScript
- Tailwind CSS v4 with CSS variables
- Radix UI primitives
- Class Variance Authority for variant management
- Vite build system
