import type { PropDef } from "@/docs/registry"

interface PropsTableProps {
  props: PropDef[]
}

function PropsTable({ props }: PropsTableProps) {
  if (props.length === 0) return null

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-2 border-black text-left">
          <thead>
            <tr className="bg-rs-brown-dark border-b-2 border-black">
              <th className="px-4 py-2.5 text-base text-rs-gold font-[family-name:var(--font-rs-bold)]">
                Prop
              </th>
              <th className="px-4 py-2.5 text-base text-rs-gold font-[family-name:var(--font-rs-bold)]">
                Type
              </th>
              <th className="px-4 py-2.5 text-base text-rs-gold font-[family-name:var(--font-rs-bold)]">
                Default
              </th>
              <th className="px-4 py-2.5 text-base text-rs-gold font-[family-name:var(--font-rs-bold)]">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, i) => (
              <tr
                key={prop.name}
                className={
                  i % 2 === 0
                    ? "bg-rs-brown-dark/40"
                    : "bg-rs-brown-dark/70"
                }
              >
                <td className="px-4 py-2.5 text-base text-rs-cyan font-mono">
                  {prop.name}
                </td>
                <td className="px-4 py-2.5 text-base text-rs-orange font-mono">
                  {prop.type}
                </td>
                <td className="px-4 py-2.5 text-base text-rs-brown-light font-mono">
                  {prop.default ?? "-"}
                </td>
                <td className="px-4 py-2.5 text-base text-rs-brown-light">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-3">
        {props.map((prop) => (
          <div
            key={prop.name}
            className="border-2 border-black bg-rs-brown-dark/50 p-4 space-y-2"
          >
            <div className="text-lg text-rs-cyan font-mono font-bold">
              {prop.name}
            </div>
            <div>
              <span className="text-base text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
                Type:{" "}
              </span>
              <span className="text-base text-rs-orange font-mono break-all">
                {prop.type}
              </span>
            </div>
            <div>
              <span className="text-base text-rs-gold uppercase font-[family-name:var(--font-rs-bold)]">
                Default:{" "}
              </span>
              <span className="text-base text-rs-brown-light font-mono">
                {prop.default ?? "-"}
              </span>
            </div>
            <p className="text-base text-rs-brown-light leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export { PropsTable }
