import { Suspense, lazy, useEffect, useMemo } from "react"
import { useParams, Navigate } from "react-router-dom"

import { componentRegistry } from "@/docs/registry"
import { CodeBlock } from "@/components/code-block"
import { PropsTable } from "@/components/props-table"

function ComponentDocPage() {
  const { slug } = useParams<{ slug: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const meta = componentRegistry.find((c) => c.slug === slug && !c.hidden)
  const installUrl = `https://runescapecn.com/r/${slug}.json`

  const Demo = useMemo(() => {
    if (!meta) return null
    return lazy(meta.demo!)
  }, [meta])

  if (!meta || !Demo) {
    return <Navigate to="/docs/components/button" replace />
  }

  return (
    <div className="max-w-3xl space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-3">
          {meta.name}
        </h1>
        <p className="text-lg text-rs-brown-light leading-relaxed">{meta.description}</p>
      </div>

      {/* Preview */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Preview
        </h2>
        <div className="rs-stone-bg border-2 border-black shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] p-4 md:p-6">
          <Suspense
            fallback={
              <p className="text-rs-brown-light text-base">
                Loading...
              </p>
            }
          >
            <Demo />
          </Suspense>
        </div>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Install
        </h2>
        <CodeBlock
          code={`pnpm dlx shadcn@latest add ${installUrl}`}
        />
      </section>

      {/* Import */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Import
        </h2>
        <CodeBlock code={meta.importCode} />
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Usage
        </h2>
        <CodeBlock code={meta.usageCode} />
      </section>

      {/* Props */}
      {meta.props.length > 0 && (
        <section>
          <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
            Props
          </h2>
          <PropsTable props={meta.props} />
        </section>
      )}

      {/* Variants */}
      {meta.variants.length > 0 && (
        <section>
          <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
            Variants
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-black text-left">
              <thead>
                <tr className="bg-rs-brown-dark border-b-2 border-black">
                  <th className="px-3 md:px-4 py-2.5 text-base uppercase text-rs-gold font-[family-name:var(--font-rs-bold)]">
                    Name
                  </th>
                  <th className="px-3 md:px-4 py-2.5 text-base uppercase text-rs-gold font-[family-name:var(--font-rs-bold)]">
                    Values
                  </th>
                </tr>
              </thead>
              <tbody>
                {meta.variants.map((v, i) => (
                  <tr
                    key={v.name}
                    className={
                      i % 2 === 0
                        ? "bg-rs-brown-dark/40"
                        : "bg-rs-brown-dark/70"
                    }
                  >
                    <td className="px-3 md:px-4 py-2.5 text-base text-rs-cyan font-mono">
                      {v.name}
                    </td>
                    <td className="px-3 md:px-4 py-2.5 text-base text-rs-orange font-mono break-all">
                      {v.values.join(" | ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  )
}

export { ComponentDocPage }
