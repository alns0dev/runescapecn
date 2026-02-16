## runescapecn/ui

Old School RuneScape-themed UI components. Free. Open Source.

A collection of accessible, retro-inspired UI components drawing from classic MMORPG aesthetics.

Visit [runescapecn.com](https://runescapecn.com/)

## Registry Install (shadcn CLI)

You can install components directly from the hosted registry endpoint.

Production example:

```bash
pnpm dlx shadcn@latest add https://runescapecn.com/r/badge.json
```

Local development test:

```bash
pnpm dev
pnpm dlx shadcn@latest add http://localhost:5173/r/badge.json
```

Registry files are synced from `registry/` into `public/r/` with:

```bash
pnpm registry:sync
```

## Contributing

Please read the [contributing guide](/contributing.md).

## License

Licensed under the [MIT license](/license.md).
