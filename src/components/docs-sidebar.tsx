import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { componentRegistry } from "@/docs/registry"

interface DocsSidebarProps {
  onNavigate?: () => void
}

const linkClass = (isActive: boolean) =>
  cn(
    "block px-3 py-1.5 text-base font-[family-name:var(--font-rs)] transition-none",
    isActive
      ? "bg-rs-brown-medium text-rs-orange shadow-[inset_1px_1px_0_rgba(0,0,0,0.7),inset_-1px_-1px_0_rgba(255,255,255,0.05)]"
      : "text-rs-brown-light hover:text-rs-yellow"
  )

function DocsSidebar({ onNavigate }: DocsSidebarProps) {
  const handleNavigate = () => {
    if (!onNavigate) {
      return
    }

    window.setTimeout(() => {
      onNavigate()
    }, 0)
  }

  return (
    <nav className="py-4">
      {/* Getting Started */}
      <div className="px-4 mb-4">
        <h3 className="text-base text-rs-gold font-[family-name:var(--font-rs-bold)] border-b-2 border-rs-brown-light/40 pb-2">
          Getting Started
        </h3>
      </div>
      <ul className="space-y-0.5 px-2 mb-6">
        <li>
          <NavLink
            to="/docs/get-started"
            onClick={handleNavigate}
            className={({ isActive }) => linkClass(isActive)}
          >
            Get Started
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/docs/fonts"
            onClick={handleNavigate}
            className={({ isActive }) => linkClass(isActive)}
          >
            Fonts
          </NavLink>
        </li>
      </ul>

      {/* Components */}
      <div className="px-4 mb-4">
        <h3 className="text-base text-rs-gold font-[family-name:var(--font-rs-bold)] border-b-2 border-rs-brown-light/40 pb-2">
          Components
        </h3>
      </div>
      <ul className="space-y-0.5 px-2">
        {componentRegistry.filter((c) => !c.hidden).map((comp) => (
          <li key={comp.slug}>
            <NavLink
              to={`/docs/components/${comp.slug}`}
              onClick={handleNavigate}
              className={({ isActive }) => linkClass(isActive)}
            >
              {comp.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { DocsSidebar }
