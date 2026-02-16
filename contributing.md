# Contributing to runescapecn/ui

Thanks for your interest in contributing to runescapecn/ui. This guide will help you get started.

## Getting Started

### 1. Fork and clone the repository

```bash
git clone git@github.com:alns0dev/runescapecn.git
cd runescapecn
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the dev server

```bash
pnpm dev
```

## Development

### Project structure

```
src/
  components/ui/      # UI components
  components/         # Docs-specific support components
  docs/               # Registry + demo entries
  layouts/            # App/doc layouts
  pages/              # Route pages
  styles/globals.css  # Tailwind theme + fonts + utilities
  App.tsx             # Home + showcase
  main.tsx            # Router entry
public/fonts/         # RuneStar OSRS fonts (OTF + TTF)
```

### Commands

```bash
pnpm dev        # Start Vite dev server
pnpm build      # Type-check + production build
pnpm lint       # Lint project files
pnpm preview    # Preview production build
```

### Component conventions

- Use `React.forwardRef` with explicit generic types
- Set `.displayName` on every component
- Accept `className` prop and merge with `cn()`
- Use named exports, never default
- No rounded corners, no smooth transitions
- Follow the existing OSRS design system (colors, fonts, beveled shadows)

See [CLAUDE.md](/CLAUDE.md) for the full component authoring guide and design system details.

## Submitting a Pull Request

1. Fork the repository and create your branch from `main`
2. Make your changes
3. Run `pnpm build` to ensure there are no type errors
4. Run `pnpm lint` to ensure there are no linting errors
5. Submit a pull request

## Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/alns0dev/runescapecn/issues).
