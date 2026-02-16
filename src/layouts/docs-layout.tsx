import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Sword, Github, Menu, X } from "lucide-react"

import { DocsSidebar } from "@/components/docs-sidebar"

function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-rs-brown-dark flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-black bg-rs-brown-dark/90 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14 px-4 md:px-8">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-rs-brown-light hover:text-rs-yellow transition-none cursor-pointer"
            >
              {sidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <Link to="/" className="flex items-center gap-3">
              <Sword className="h-6 w-6 text-rs-gold" />
              <span className="text-lg text-rs-gold font-[family-name:var(--font-rs-bold)] hidden sm:inline">
                runescapecn/ui
              </span>
            </Link>
          </div>

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
              href="https://github.com/a01410207/runescapecn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rs-brown-light hover:text-rs-yellow transition-none"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1400px] mx-auto w-full">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r-2 border-black bg-rs-brown-dark overflow-y-auto sticky top-14 h-[calc(100vh-3.5rem)]">
          <DocsSidebar />
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed left-0 top-14 z-50 w-64 h-[calc(100vh-3.5rem)] border-r-2 border-black bg-rs-brown-dark overflow-y-auto lg:hidden">
              <DocsSidebar onNavigate={() => setSidebarOpen(false)} />
            </aside>
          </>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-8">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-rs-brown-dark/80">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center md:justify-start h-14 px-4 md:px-8">
          <p className="text-base text-rs-brown-light">
            Built by{" "}
            <a
              href="https://x.com/alns0_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rs-orange hover:text-rs-yellow underline underline-offset-4"
            >
              alns0
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export { DocsLayout }
