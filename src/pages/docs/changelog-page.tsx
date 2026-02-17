import { useEffect } from "react"
import Markdown from "react-markdown"
import { useHead } from "@/hooks/use-head"

const modules = import.meta.glob("../../changelog/*.md", {
  query: "?raw",
  eager: true,
}) as Record<string, { default: string }>

interface ChangelogEntry {
  date: string
  slug: string
  content: string
}

function parseEntries(): ChangelogEntry[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const filename = path.split("/").pop()?.replace(".md", "") ?? ""
      const [date, ...rest] = filename.split("_")
      return {
        date,
        slug: rest.join("_"),
        content: mod.default,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

const entries = parseEntries()

const markdownComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-2xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-lg text-rs-cyan font-[family-name:var(--font-rs-bold)] mt-5 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-base text-rs-orange leading-relaxed mb-2">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="space-y-1.5 mb-3 pl-1">
      {children}
    </ul>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="text-base text-rs-brown-light leading-relaxed flex items-start gap-2">
      <span className="text-rs-gold mt-0.5 shrink-0">-</span>
      <span>{children}</span>
    </li>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="bg-rs-brown-medium border border-rs-brown-light/30 px-1.5 py-0.5 text-rs-yellow text-sm font-mono">
      {children}
    </code>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-rs-orange hover:text-rs-yellow underline underline-offset-4 transition-none"
    >
      {children}
    </a>
  ),
}

function ChangelogPage() {
  useHead(
    "Changelog",
    "All notable changes to the runescapecn component library. New components, fixes, and improvements documented in Keep a Changelog format."
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-3xl space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-3">
          Changelog
        </h1>
        <p className="text-lg text-rs-brown-light leading-relaxed">
          All notable changes to RuneScapeCN are documented here, following the{" "}
          <a
            href="https://keepachangelog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rs-orange hover:text-rs-yellow underline underline-offset-4 transition-none"
          >
            Keep a Changelog
          </a>{" "}
          format.
        </p>
      </div>

      {/* Entries */}
      {entries.map((entry) => (
        <section key={entry.slug}>
          <div className="mb-4 border-b-2 border-rs-brown-light/40 pb-3 flex items-center justify-between">
            <time className="text-base text-rs-brown-light font-[family-name:var(--font-rs)]">
              {entry.date}
            </time>
          </div>
          <div className="rs-stone-bg border-2 border-black shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] p-4 md:p-6">
            <Markdown components={markdownComponents}>
              {entry.content}
            </Markdown>
          </div>
        </section>
      ))}
    </div>
  )
}

export { ChangelogPage }
