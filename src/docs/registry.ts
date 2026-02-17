import { type ComponentType } from "react"

export interface PropDef {
  name: string
  type: string
  default?: string
  description: string
}

export interface VariantDef {
  name: string
  values: string[]
}

export interface ComponentMeta {
  slug: string
  name: string
  createdAt: string
  description: string
  importCode: string
  usageCode: string
  props: PropDef[]
  variants: VariantDef[]
  demo?: () => Promise<{ default: ComponentType }>
  hidden?: boolean
}

export const componentRegistry: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    createdAt: "2026-02-15",
    description:
      "A versatile button component with multiple visual variants and sizes. Supports polymorphism via asChild for rendering as links or other elements.",
    importCode: `import { Button } from "@/components/ui/button"`,
    usageCode: `<Button variant="default">Attack</Button>
<Button variant="classic">Reset Save</Button>
<Button variant="stone">Expel Guests</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Wiki Link</Button>

{/* Sizes */}
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Coins /></Button>`,
    props: [
      {
        name: "variant",
        type: '"default" | "classic" | "stone" | "destructive" | "ghost" | "link"',
        default: '"default"',
        description: "The visual style of the button.",
      },
      {
        name: "size",
        type: '"sm" | "default" | "lg" | "icon"',
        default: '"default"',
        description: "The size of the button.",
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        description:
          "Render as the child element instead of a button (uses Radix Slot).",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the button and reduces its opacity.",
      },
    ],
    variants: [
      {
        name: "variant",
        values: [
          "default",
          "classic",
          "stone",
          "destructive",
          "ghost",
          "link",
        ],
      },
      { name: "size", values: ["sm", "default", "lg", "icon"] },
    ],
    demo: () => import("@/docs/demos/button-demo"),
  },
  {
    slug: "card",
    name: "Card",
    createdAt: "2026-02-15",
    description:
      "A container component with stone-textured background and beveled borders. Composed of Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter sub-components.",
    importCode: `import {
  Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter
} from "@/components/ui/card"`,
    usageCode: `<Card>
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
</Card>`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the card.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Card content, typically composed of sub-components.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/card-demo"),
  },
  {
    slug: "input",
    name: "Input",
    createdAt: "2026-02-15",
    description:
      "A text input field with inset border styling. Supports all native HTML input attributes.",
    importCode: `import { Input } from "@/components/ui/input"`,
    usageCode: `<Input placeholder="Search Grand Exchange" />
<Input type="password" placeholder="Enter PIN" />
<Input disabled placeholder="Disabled" />`,
    props: [
      {
        name: "type",
        type: "string",
        default: '"text"',
        description: "The HTML input type.",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text displayed when the input is empty.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the input field.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/input-demo"),
  },
  {
    slug: "badge",
    name: "Badge",
    createdAt: "2026-02-15",
    description:
      "A small status indicator with OSRS-themed color variants. Useful for tags, labels, and status indicators.",
    importCode: `import { Badge } from "@/components/ui/badge"`,
    usageCode: `<Badge>Members</Badge>
<Badge variant="destructive">Skulled</Badge>
<Badge variant="success">Safe</Badge>
<Badge variant="outline">Free-to-Play</Badge>`,
    props: [
      {
        name: "variant",
        type: '"default" | "destructive" | "success" | "outline"',
        default: '"default"',
        description: "The visual style of the badge.",
      },
    ],
    variants: [
      {
        name: "variant",
        values: ["default", "destructive", "success", "outline"],
      },
    ],
    demo: () => import("@/docs/demos/badge-demo"),
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    createdAt: "2026-02-15",
    description:
      "A toggle checkbox built on Radix UI primitives. Displays a green check indicator when checked.",
    importCode: `import { Checkbox } from "@/components/ui/checkbox"`,
    usageCode: `<div className="flex items-center gap-2">
  <Checkbox id="prayer" />
  <label htmlFor="prayer">Quick Prayer</label>
</div>

<div className="flex items-center gap-2">
  <Checkbox id="retaliate" defaultChecked />
  <label htmlFor="retaliate">Auto Retaliate</label>
</div>`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "The controlled checked state.",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        description: "The default checked state for uncontrolled usage.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Callback when checked state changes.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the checkbox.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/checkbox-demo"),
  },
  {
    slug: "dialog",
    name: "Dialog",
    createdAt: "2026-02-15",
    description:
      "A modal dialog built on Radix UI. Features a dark overlay, stone-textured content panel, and a red close button. Composed of Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, and DialogFooter.",
    importCode: `import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"`,
    usageCode: `<Dialog>
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
</Dialog>`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state of the dialog.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback when open state changes.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Dialog sub-components (Trigger, Content, etc.).",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/dialog-demo"),
  },
  {
    slug: "select",
    name: "Select",
    createdAt: "2026-02-15",
    description:
      "A dropdown select menu built on Radix UI. Features a chevron indicator, scrollable viewport, and green checkmarks for selected items.",
    importCode: `import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectItem
} from "@/components/ui/select"`,
    usageCode: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose Combat Style" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="accurate">Accurate</SelectItem>
    <SelectItem value="aggressive">Aggressive</SelectItem>
    <SelectItem value="defensive">Defensive</SelectItem>
    <SelectItem value="controlled">Controlled</SelectItem>
  </SelectContent>
</Select>`,
    props: [
      {
        name: "value",
        type: "string",
        description: "The controlled selected value.",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "The default value for uncontrolled usage.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback when the selected value changes.",
      },
      {
        name: "placeholder",
        type: "string",
        description:
          "Placeholder text shown in the trigger via SelectValue.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/select-demo"),
  },
  {
    slug: "tabs",
    name: "Tabs",
    createdAt: "2026-02-16",
    description:
      "A tabbed interface built on Radix UI. Active tabs display with a gold background. Content panels use stone-textured backgrounds.",
    importCode: `import {
  Tabs, TabsList, TabsTrigger, TabsContent
} from "@/components/ui/tabs"`,
    usageCode: `<Tabs defaultValue="inventory">
  <TabsList>
    <TabsTrigger value="inventory">Inventory</TabsTrigger>
    <TabsTrigger value="equipment">Equipment</TabsTrigger>
    <TabsTrigger value="prayer">Prayer</TabsTrigger>
  </TabsList>
  <TabsContent value="inventory">
    Inventory panel content
  </TabsContent>
  <TabsContent value="equipment">
    Equipment panel content
  </TabsContent>
  <TabsContent value="prayer">
    Prayer panel content
  </TabsContent>
</Tabs>`,
    props: [
      {
        name: "defaultValue",
        type: "string",
        description: "The default active tab value.",
      },
      {
        name: "value",
        type: "string",
        description: "The controlled active tab value.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback when the active tab changes.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/tabs-demo"),
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    createdAt: "2026-02-16",
    description:
      "A hover-activated tooltip built on Radix UI. Displays yellow text on a dark background with a drop shadow. Supports positioning on all four sides.",
    importCode: `import {
  Tooltip, TooltipTrigger,
  TooltipContent, TooltipProvider
} from "@/components/ui/tooltip"`,
    usageCode: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Dragon Scimitar</Button>
    </TooltipTrigger>
    <TooltipContent>
      A powerful scimitar made from dragon metal.
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    props: [
      {
        name: "sideOffset",
        type: "number",
        default: "4",
        description: "Distance in pixels from the trigger element.",
      },
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        default: '"top"',
        description: "The preferred side to render the tooltip.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/tooltip-demo"),
  },
  {
    slug: "progress",
    name: "Progress",
    createdAt: "2026-02-16",
    description:
      "A progress bar with configurable fill color variants. Supports custom labels and value/max ranges. Features an inset border and text shadow overlay.",
    importCode: `import { Progress } from "@/components/ui/progress"`,
    usageCode: `<Progress dynamicColor value={progress} max={99} label={\`\${progress}/99\`} />
<Progress value={73} max={99} label="73/99" />
<Progress variant="yellow" value={64} max={99} label="64/99" />
<Progress variant="orange" value={54} max={99} label="54/99" />
<Progress variant="red" value={18} max={99} label="18/99" />`,
    props: [
      {
        name: "value",
        type: "number",
        default: "0",
        description: "The current progress value.",
      },
      {
        name: "max",
        type: "number",
        default: "100",
        description: "The maximum progress value.",
      },
      {
        name: "label",
        type: "ReactNode",
        description:
          "Custom label displayed over the progress bar. Defaults to percentage.",
      },
      {
        name: "variant",
        type: '"default" | "yellow" | "orange" | "red"',
        default: '"default"',
        description: "The fill color variant.",
      },
      {
        name: "dynamicColor",
        type: "boolean",
        default: "false",
        description:
          "Automatically sets fill color by threshold (red -> orange -> yellow -> green).",
      },
    ],
    variants: [
      { name: "variant", values: ["default", "yellow", "orange", "red"] },
    ],
    demo: () => import("@/docs/demos/progress-demo"),
  },
  {
    slug: "copy-button",
    name: "CopyButton",
    createdAt: "2026-02-15",
    description:
      "A button that copies text to the clipboard. Shows a green checkmark and 'Copied' confirmation for 2 seconds after clicking.",
    importCode: `import { CopyButton } from "@/components/ui/copy-button"`,
    usageCode: `<CopyButton code="npm install runescapecn" />`,
    props: [
      {
        name: "code",
        type: "string",
        description: "The text content to copy to the clipboard.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/copy-button-demo"),
  },
  {
    slug: "textarea",
    name: "Textarea",
    createdAt: "2026-02-16",
    description:
      "A multi-line text input styled like the OSRS chat input box. Supports resizing and all native textarea attributes.",
    importCode: `import { Textarea } from "@/components/ui/textarea"`,
    usageCode: `<Textarea placeholder="Type your message here..." />
<Textarea placeholder="Describe your bug report..." />
<Textarea disabled placeholder="Chat disabled in this area" />`,
    props: [
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text displayed when the textarea is empty.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the textarea.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/textarea-demo"),
  },
  {
    slug: "label",
    name: "Label",
    createdAt: "2026-02-16",
    description:
      "An accessible form label built on Radix UI. Pairs with Input, Textarea, Checkbox, Switch, and Select for accessible form controls.",
    importCode: `import { Label } from "@/components/ui/label"`,
    usageCode: `<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter your RSN" />
</div>`,
    props: [
      {
        name: "htmlFor",
        type: "string",
        description: "The ID of the form element this label is associated with.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/label-demo"),
  },
  {
    slug: "switch",
    name: "Switch",
    createdAt: "2026-02-16",
    description:
      "A toggle switch built on Radix UI. Features a sliding thumb that turns green when checked. Complements Checkbox with a different interaction pattern.",
    importCode: `import { Switch } from "@/components/ui/switch"`,
    usageCode: `<div className="flex items-center gap-3">
  <Switch id="run-mode" />
  <Label htmlFor="run-mode">Run Mode</Label>
</div>

<div className="flex items-center gap-3">
  <Switch id="retaliate" defaultChecked />
  <Label htmlFor="retaliate">Auto Retaliate</Label>
</div>`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "The controlled checked state.",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        description: "The default checked state for uncontrolled usage.",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Callback when checked state changes.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the switch.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/switch-demo"),
  },
  {
    slug: "separator",
    name: "Separator",
    createdAt: "2026-02-16",
    description:
      "A horizontal or vertical divider built on Radix UI. Uses a black border with a subtle bevel shadow to match the stone UI aesthetic.",
    importCode: `import { Separator } from "@/components/ui/separator"`,
    usageCode: `{/* Horizontal */}
<p>Attack: 99</p>
<Separator />
<p>Strength: 99</p>

{/* Vertical */}
<div className="flex items-center gap-4 h-6">
  <span>Melee</span>
  <Separator orientation="vertical" />
  <span>Ranged</span>
</div>`,
    props: [
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        default: '"horizontal"',
        description: "The orientation of the separator.",
      },
      {
        name: "decorative",
        type: "boolean",
        default: "true",
        description:
          "When true, the separator is purely visual and not exposed to assistive technology.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/separator-demo"),
  },
  {
    slug: "splatter-badge",
    name: "SplatterBadge",
    createdAt: "2026-02-16",
    hidden: true,
    description:
      "A pixelated badge with a red splatter background displaying a number (0–999). Ideal for damage counts, kill counts, or level indicators in OSRS-style UIs.",
    importCode: `import { SplatterBadge } from "@/components/ui/splatter-badge"`,
    usageCode: `<SplatterBadge value={26} />
<SplatterBadge value={99} />
<SplatterBadge value={999} />`,
    props: [
      {
        name: "value",
        type: "number",
        description:
          "Number to display (0–999). Values outside this range are clamped.",
      },
    ],
    variants: [],
  },
  {
    slug: "alert",
    name: "Alert",
    createdAt: "2026-02-16",
    description:
      "A notification component for showing important messages. Supports default, destructive, and success variants. Styled like OSRS game chat messages with a colored left border accent.",
    importCode: `import {
  Alert, AlertTitle, AlertDescription
} from "@/components/ui/alert"`,
    usageCode: `<Alert>
  <AlertTitle>Game Update</AlertTitle>
  <AlertDescription>
    A system update will occur in 30 minutes.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    This is a dangerous area.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Quest Complete</AlertTitle>
  <AlertDescription>
    Congratulations! You have completed Dragon Slayer.
  </AlertDescription>
</Alert>`,
    props: [
      {
        name: "variant",
        type: '"default" | "destructive" | "success"',
        default: '"default"',
        description: "The visual style of the alert.",
      },
      {
        name: "children",
        type: "ReactNode",
        description:
          "Alert content, typically composed of AlertTitle and AlertDescription.",
      },
    ],
    variants: [
      {
        name: "variant",
        values: ["default", "destructive", "success"],
      },
    ],
    demo: () => import("@/docs/demos/alert-demo"),
  },
]
