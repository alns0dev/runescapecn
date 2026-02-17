import { Suspense, lazy, useMemo } from "react"
import { Github, Star } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import { componentRegistry } from "@/docs/registry"
import { useGithubStars } from "@/hooks/use-github-stars"
import { useHead } from "@/hooks/use-head"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"

function App() {
  const stars = useGithubStars("alns0dev/runescapecn")
  const { pathname } = useLocation()

  const isWhyPage = pathname === "/why"

  useHead(
    isWhyPage ? "Why RuneScapeCN" : undefined,
    isWhyPage
      ? "Why RuneScapeCN exists — a tribute to the iconic design language of Old School RuneScape, bringing OSRS visual DNA into reusable UI components."
      : undefined
  )

  const latestComponents = useMemo(
    () =>
      [...componentRegistry]
        .filter((c) => !c.hidden)
        .map((c, i) => ({ ...c, _index: i }))
        .sort((a, b) => {
          const diff =
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          return diff !== 0 ? diff : b._index - a._index
        })
        .slice(0, 3)
        .map((component) => ({
          ...component,
          Demo: lazy(component.demo!),
        })),
    []
  )

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-rs-brown-dark flex flex-col">
        <header className="sticky top-0 z-50 border-b-2 border-black bg-rs-brown-dark/90 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14 px-4 md:px-8">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="runescapecn" className="h-7" />
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
                href="https://github.com/alns0dev/runescapecn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-rs-brown-light hover:text-rs-yellow transition-none"
              >
                <Github className="h-5 w-5" />
                {stars !== null && (
                  <span className="flex items-center gap-0.5 text-base font-[family-name:var(--font-rs-bold)]">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {stars}
                  </span>
                )}
              </a>
            </div>
          </div>
        </header>

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
                  tooling around RuneScape deserved the same level of craft
                  and identity. As a 20+ year RuneScape player, this project
                  exists because RuneScape could not be left behind.
                </p>
                <p className="text-lg md:text-xl text-rs-brown-light leading-relaxed">
                  runescapecn brings OSRS visual DNA into reusable components:
                  hard edges, beveled borders, local RuneStar fonts, and{" "}
                  <span className="text-rs-yellow">
                    practical shadcn-style APIs
                  </span>{" "}
                  so teams can build fast without losing the world feel.
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
              <section className="relative flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rs-gold/8 blur-[120px] pointer-events-none" />
                <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-rs-orange/10 blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-[750px] w-full rs-stone-bg border-2 border-black shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(255,255,255,0.08),6px_6px_0_rgba(0,0,0,0.4)] flex flex-col items-center text-center px-6 py-16 md:px-12 md:py-24">
                  <img src="/logo.svg" alt="runescapecn" className="h-12 md:h-16 mb-6" />

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
                    <a href="#latest-components">See Components</a>
                  </Button>
                </div>
              </section>

              <section
                id="latest-components"
                className="max-w-[1400px] mx-auto px-4 md:px-8 pb-20"
              >
                <div className="flex items-center justify-between mb-6 border-b-2 border-rs-brown-light/40 pb-3">
                  <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)]">
                    Latest Components
                  </h2>
                  <Link
                    to="/docs/components/button"
                    className="text-base text-rs-orange hover:text-rs-yellow transition-none"
                  >
                    Browse All
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {latestComponents.map((component) => (
                    <article
                      key={component.slug}
                      className="rs-stone-bg border-2 border-black shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] p-4 flex flex-col gap-4"
                    >
                      <div className="border-2 border-black bg-rs-brown-dark p-4">
                        <Suspense
                          fallback={
                            <p className="text-base text-rs-brown-light">
                              Loading preview...
                            </p>
                          }
                        >
                          <component.Demo />
                        </Suspense>
                      </div>

                      <div className="space-y-2">
                        <p className="text-rs-brown-light text-sm uppercase">
                          Added {component.createdAt}
                        </p>
                        <h3 className="text-rs-gold text-2xl font-[family-name:var(--font-rs-bold)] uppercase">
                          {component.name}
                        </h3>
                        <p className="text-rs-brown-light text-base leading-relaxed">
                          {component.description}
                        </p>
                      </div>

                      <Button asChild className="w-full mt-auto">
                        <Link to={`/docs/components/${component.slug}`}>
                          View {component.name}
                        </Link>
                      </Button>
                    </article>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>

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

export { App }
