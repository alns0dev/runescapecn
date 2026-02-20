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
  // Phase 1 — Foundation
  {
    slug: "table",
    name: "Table",
    createdAt: "2026-02-20",
    description:
      "A set of table components for displaying structured data. Includes Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, and TableCaption sub-components. Perfect for hiscores, GE price lists, and stat displays.",
    importCode: `import {
  Table, TableHeader, TableBody, TableFooter,
  TableHead, TableRow, TableCell, TableCaption
} from "@/components/ui/table"`,
    usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Rank</TableHead>
      <TableHead>Player</TableHead>
      <TableHead>Level</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>1</TableCell>
      <TableCell>Zezima</TableCell>
      <TableCell>99</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/table-demo"),
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    createdAt: "2026-02-20",
    description:
      "A loading placeholder with a shimmer animation. Use to represent content that is still loading, such as GE prices, hiscores data, or player profiles.",
    importCode: `import { Skeleton } from "@/components/ui/skeleton"`,
    usageCode: `<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[140px]" />
  </div>
</div>`,
    props: [
      {
        name: "className",
        type: "string",
        description:
          "CSS classes for sizing (h-*, w-*). The component is a div with shimmer animation.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/skeleton-demo"),
  },
  {
    slug: "avatar",
    name: "Avatar",
    createdAt: "2026-02-20",
    description:
      "An image element with a fallback for representing the user. Built on Radix UI Avatar. Composed of Avatar, AvatarImage, and AvatarFallback sub-components.",
    importCode: `import {
  Avatar, AvatarImage, AvatarFallback
} from "@/components/ui/avatar"`,
    usageCode: `<Avatar>
  <AvatarImage src="/player.png" alt="Player" />
  <AvatarFallback>ZZ</AvatarFallback>
</Avatar>`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes. Use h-* w-* for sizing.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/avatar-demo"),
  },
  // Phase 2 — Menus
  {
    slug: "context-menu",
    name: "Context Menu",
    createdAt: "2026-02-20",
    description:
      "A right-click context menu built on Radix UI. THE signature OSRS interaction — right-click to Attack, Trade, Follow, Examine. Supports sub-menus, checkboxes, radio items, and separators.",
    importCode: `import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent,
  ContextMenuItem, ContextMenuSeparator
} from "@/components/ui/context-menu"`,
    usageCode: `<ContextMenu>
  <ContextMenuTrigger>Right-click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Attack Guard (lvl-21)</ContextMenuItem>
    <ContextMenuItem>Talk-to Guard</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Cancel</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Context menu sub-components (Trigger, Content, etc.).",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/context-menu-demo"),
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    createdAt: "2026-02-20",
    description:
      "A dropdown menu built on Radix UI. Ideal for settings panels, combat style selectors, and action menus. Supports sub-menus, checkboxes, radio groups, and keyboard shortcuts.",
    importCode: `import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel
} from "@/components/ui/dropdown-menu"`,
    usageCode: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Settings</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Options</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Audio</DropdownMenuItem>
    <DropdownMenuItem>Display</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Dropdown menu sub-components (Trigger, Content, etc.).",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/dropdown-menu-demo"),
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    createdAt: "2026-02-20",
    description:
      "A modal confirmation dialog built on Radix UI. Requires explicit user action to dismiss. Ideal for dangerous confirmations like 'Drop Dragon Scimitar?' or 'Enter Wilderness?'.",
    importCode: `import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent,
  AlertDialogHeader, AlertDialogTitle, AlertDialogDescription,
  AlertDialogFooter, AlertDialogAction, AlertDialogCancel
} from "@/components/ui/alert-dialog"`,
    usageCode: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Drop Item</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Drop Dragon Scimitar?</AlertDialogTitle>
      <AlertDialogDescription>
        This item will appear on the ground.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep</AlertDialogCancel>
      <AlertDialogAction>Drop</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback when open state changes.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/alert-dialog-demo"),
  },
  // Phase 3 — Interactive Controls
  {
    slug: "toast",
    name: "Toast",
    createdAt: "2026-02-20",
    description:
      "A temporary notification popup. Ideal for game notifications like 'Level up!', 'Rare drop!', or 'GE offer complete!'. Supports default, destructive, and success variants with a colored left border accent.",
    importCode: `import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"`,
    usageCode: `const { toast } = useToast()

// In your component:
<Toaster />

// To trigger:
toast({
  title: "Level Up!",
  description: "Your Attack level is now 73.",
})`,
    props: [
      {
        name: "variant",
        type: '"default" | "destructive" | "success"',
        default: '"default"',
        description: "The visual variant of the toast.",
      },
      {
        name: "title",
        type: "ReactNode",
        description: "The toast title.",
      },
      {
        name: "description",
        type: "ReactNode",
        description: "The toast description.",
      },
    ],
    variants: [
      {
        name: "variant",
        values: ["default", "destructive", "success"],
      },
    ],
    demo: () => import("@/docs/demos/toast-demo"),
  },
  {
    slug: "slider",
    name: "Slider",
    createdAt: "2026-02-20",
    description:
      "A range slider input built on Radix UI. Perfect for OSRS settings like music/SFX volume and brightness controls.",
    importCode: `import { Slider } from "@/components/ui/slider"`,
    usageCode: `<Slider defaultValue={[50]} max={100} step={1} />`,
    props: [
      {
        name: "defaultValue",
        type: "number[]",
        description: "The default value(s) of the slider.",
      },
      {
        name: "value",
        type: "number[]",
        description: "The controlled value(s).",
      },
      {
        name: "onValueChange",
        type: "(value: number[]) => void",
        description: "Callback when the value changes.",
      },
      {
        name: "max",
        type: "number",
        default: "100",
        description: "The maximum value.",
      },
      {
        name: "step",
        type: "number",
        default: "1",
        description: "The step increment.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disables the slider.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/slider-demo"),
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    createdAt: "2026-02-20",
    description:
      "A set of radio buttons built on Radix UI. Ideal for combat style selection (Accurate/Aggressive/Defensive/Controlled) and other single-choice options.",
    importCode: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`,
    usageCode: `<RadioGroup defaultValue="accurate">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="accurate" id="accurate" />
    <Label htmlFor="accurate">Accurate</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="aggressive" id="aggressive" />
    <Label htmlFor="aggressive">Aggressive</Label>
  </div>
</RadioGroup>`,
    props: [
      {
        name: "defaultValue",
        type: "string",
        description: "The default selected value.",
      },
      {
        name: "value",
        type: "string",
        description: "The controlled selected value.",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback when the value changes.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/radio-group-demo"),
  },
  {
    slug: "toggle",
    name: "Toggle",
    createdAt: "2026-02-20",
    description:
      "A two-state toggle button built on Radix UI. Perfect for prayer panel toggles, special attack, and run mode. Also includes ToggleGroup for grouping multiple toggles.",
    importCode: `import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`,
    usageCode: `<Toggle aria-label="Toggle run mode">Run</Toggle>

<ToggleGroup type="single" defaultValue="melee">
  <ToggleGroupItem value="melee">Melee</ToggleGroupItem>
  <ToggleGroupItem value="ranged">Ranged</ToggleGroupItem>
  <ToggleGroupItem value="magic">Magic</ToggleGroupItem>
</ToggleGroup>`,
    props: [
      {
        name: "variant",
        type: '"default" | "outline"',
        default: '"default"',
        description: "The visual style of the toggle.",
      },
      {
        name: "size",
        type: '"default" | "sm" | "lg"',
        default: '"default"',
        description: "The size of the toggle.",
      },
      {
        name: "pressed",
        type: "boolean",
        description: "The controlled pressed state.",
      },
      {
        name: "onPressedChange",
        type: "(pressed: boolean) => void",
        description: "Callback when pressed state changes.",
      },
    ],
    variants: [
      { name: "variant", values: ["default", "outline"] },
      { name: "size", values: ["default", "sm", "lg"] },
    ],
    demo: () => import("@/docs/demos/toggle-demo"),
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    createdAt: "2026-02-20",
    description:
      "A group of toggle buttons where one or multiple can be active. Built on Radix UI. Ideal for combat style selectors, prayer panels, and display mode switches.",
    importCode: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`,
    usageCode: `<ToggleGroup type="single" defaultValue="melee">
  <ToggleGroupItem value="melee">Melee</ToggleGroupItem>
  <ToggleGroupItem value="ranged">Ranged</ToggleGroupItem>
  <ToggleGroupItem value="magic">Magic</ToggleGroupItem>
</ToggleGroup>

{/* Multiple selection */}
<ToggleGroup type="multiple">
  <ToggleGroupItem value="protect-melee">Protect Melee</ToggleGroupItem>
  <ToggleGroupItem value="protect-range">Protect Range</ToggleGroupItem>
</ToggleGroup>`,
    props: [
      {
        name: "type",
        type: '"single" | "multiple"',
        description: "Whether one or multiple items can be toggled.",
      },
      {
        name: "value",
        type: "string | string[]",
        description: "The controlled value(s).",
      },
      {
        name: "onValueChange",
        type: "(value: string | string[]) => void",
        description: "Callback when the value changes.",
      },
      {
        name: "variant",
        type: '"default" | "outline"',
        default: '"default"',
        description: "The visual style applied to all items.",
      },
      {
        name: "size",
        type: '"default" | "sm" | "lg"',
        default: '"default"',
        description: "The size applied to all items.",
      },
    ],
    variants: [
      { name: "variant", values: ["default", "outline"] },
      { name: "size", values: ["default", "sm", "lg"] },
    ],
    demo: () => import("@/docs/demos/toggle-group-demo"),
  },
  // Phase 4 — Floating UI & Panels
  {
    slug: "popover",
    name: "Popover",
    createdAt: "2026-02-20",
    description:
      "A floating panel triggered by a button click. Built on Radix UI. Ideal for item examine popups, GE search results, and map location info.",
    importCode: `import {
  Popover, PopoverTrigger, PopoverContent
} from "@/components/ui/popover"`,
    usageCode: `<Popover>
  <PopoverTrigger asChild>
    <Button>Examine</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>A weapon from the Abyss.</p>
  </PopoverContent>
</Popover>`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback when open state changes.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/popover-demo"),
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    createdAt: "2026-02-20",
    description:
      "A floating card that appears on hover. Built on Radix UI. Ideal for showing player stats, item info, or NPC details on hover.",
    importCode: `import {
  HoverCard, HoverCardTrigger, HoverCardContent
} from "@/components/ui/hover-card"`,
    usageCode: `<HoverCard>
  <HoverCardTrigger>Zezima</HoverCardTrigger>
  <HoverCardContent>
    <p>Combat Level: 126</p>
    <p>Total Level: 2277</p>
  </HoverCardContent>
</HoverCard>`,
    props: [
      {
        name: "openDelay",
        type: "number",
        default: "700",
        description: "Delay in ms before the hover card opens.",
      },
      {
        name: "closeDelay",
        type: "number",
        default: "300",
        description: "Delay in ms before the hover card closes.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/hover-card-demo"),
  },
  {
    slug: "sheet",
    name: "Sheet",
    createdAt: "2026-02-20",
    description:
      "A slide-out panel (drawer) built on Radix UI Dialog. Supports top, right, bottom, and left sides. Ideal for inventory panels, equipment screens, and quest logs.",
    importCode: `import {
  Sheet, SheetTrigger, SheetContent,
  SheetHeader, SheetTitle, SheetDescription
} from "@/components/ui/sheet"`,
    usageCode: `<Sheet>
  <SheetTrigger asChild>
    <Button>Inventory</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Inventory</SheetTitle>
      <SheetDescription>28 slots</SheetDescription>
    </SheetHeader>
    <div className="p-4">Items here</div>
  </SheetContent>
</Sheet>`,
    props: [
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        default: '"right"',
        description: "The side the sheet slides in from.",
      },
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback when open state changes.",
      },
    ],
    variants: [
      { name: "side", values: ["top", "right", "bottom", "left"] },
    ],
    demo: () => import("@/docs/demos/sheet-demo"),
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    createdAt: "2026-02-20",
    description:
      "A custom scrollable area with themed scrollbars built on Radix UI. Ideal for chat boxes, quest logs, and friends lists.",
    importCode: `import { ScrollArea } from "@/components/ui/scroll-area"`,
    usageCode: `<ScrollArea className="h-48 w-60 border-2 border-black rs-stone-bg">
  <div className="p-3">
    {items.map((item) => (
      <div key={item}>{item}</div>
    ))}
  </div>
</ScrollArea>`,
    props: [
      {
        name: "className",
        type: "string",
        description: "CSS classes for sizing the scroll area container.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/scroll-area-demo"),
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    createdAt: "2026-02-20",
    description:
      "Displays content within a desired ratio. Built on Radix UI. Ideal for maintaining correct proportions for item sprites, portraits, and map tiles.",
    importCode: `import { AspectRatio } from "@/components/ui/aspect-ratio"`,
    usageCode: `<div className="w-[400px]">
  <AspectRatio ratio={16 / 9}>
    <img src="/map.png" alt="World Map" />
  </AspectRatio>
</div>`,
    props: [
      {
        name: "ratio",
        type: "number",
        default: "1",
        description: "The desired aspect ratio (width / height).",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/aspect-ratio-demo"),
  },
  // Phase 5 — Layout & Navigation
  {
    slug: "accordion",
    name: "Accordion",
    createdAt: "2026-02-20",
    description:
      "A vertically stacked set of collapsible sections built on Radix UI. Ideal for quest journal sections, skill guides, and expandable FAQ.",
    importCode: `import {
  Accordion, AccordionItem,
  AccordionTrigger, AccordionContent
} from "@/components/ui/accordion"`,
    usageCode: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Free Quests</AccordionTrigger>
    <AccordionContent>
      Cook's Assistant, Dragon Slayer...
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    props: [
      {
        name: "type",
        type: '"single" | "multiple"',
        description: "Whether one or multiple items can be opened.",
      },
      {
        name: "collapsible",
        type: "boolean",
        default: "false",
        description: "When type is single, allows closing all items.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/accordion-demo"),
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    createdAt: "2026-02-20",
    description:
      "A navigation breadcrumb trail. Pure HTML/aria with no Radix dependency. Shows paths like 'Home > Skills > Attack'.",
    importCode: `import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb"`,
    usageCode: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Attack</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Breadcrumb sub-components.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/breadcrumb-demo"),
  },
  {
    slug: "pagination",
    name: "Pagination",
    createdAt: "2026-02-20",
    description:
      "A page navigation component using the existing Button styling. Includes Previous, Next, page links, and ellipsis indicators. Ideal for hiscores and GE listing pages.",
    importCode: `import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext,
  PaginationEllipsis
} from "@/components/ui/pagination"`,
    usageCode: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    props: [
      {
        name: "isActive",
        type: "boolean",
        description: "Whether a PaginationLink is the current page.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/pagination-demo"),
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    createdAt: "2026-02-20",
    description:
      "A lightweight expand/collapse component built on Radix UI. Simpler than Accordion for single sections. Ideal for chat sections and sidebars.",
    importCode: `import {
  Collapsible, CollapsibleTrigger, CollapsibleContent
} from "@/components/ui/collapsible"`,
    usageCode: `<Collapsible>
  <CollapsibleTrigger>Toggle Chat</CollapsibleTrigger>
  <CollapsibleContent>
    Chat messages here...
  </CollapsibleContent>
</Collapsible>`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controlled open state.",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback when open state changes.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/collapsible-demo"),
  },
  {
    slug: "menubar",
    name: "Menubar",
    createdAt: "2026-02-20",
    description:
      "A horizontal menu bar built on Radix UI. Supports sub-menus, checkboxes, radio groups, and keyboard shortcuts. Ideal for application-level navigation in OSRS-themed apps.",
    importCode: `import {
  Menubar, MenubarMenu, MenubarTrigger,
  MenubarContent, MenubarItem, MenubarSeparator
} from "@/components/ui/menubar"`,
    usageCode: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New World</MenubarItem>
      <MenubarItem>Open Save</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Logout</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "MenubarMenu sub-components.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/menubar-demo"),
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    createdAt: "2026-02-20",
    description:
      "A complex navigation component with nested content panels. Built on Radix UI. Ideal for wiki-style navigation with categorized links.",
    importCode: `import {
  NavigationMenu, NavigationMenuList,
  NavigationMenuItem, NavigationMenuTrigger,
  NavigationMenuContent, NavigationMenuLink
} from "@/components/ui/navigation-menu"`,
    usageCode: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-2 p-4 w-[400px]">
          <li>Combat Skills</li>
          <li>Gathering Skills</li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Navigation menu sub-components.",
      },
    ],
    variants: [],
    demo: () => import("@/docs/demos/navigation-menu-demo"),
  },
]
