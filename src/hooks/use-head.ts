import { useEffect } from "react"

const DEFAULT_TITLE = "runescapecn | Old School RuneScape UI Components"
const DEFAULT_DESCRIPTION =
  "runescapecn is an Old School RuneScape-themed UI component library built on shadcn/ui patterns. Pixel-perfect borders, authentic OSRS fonts, and beveled 3D shadows."

function useHead(title?: string, description?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} | runescapecn`
      : DEFAULT_TITLE

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute("content", description ?? DEFAULT_DESCRIPTION)
    }

    return () => {
      document.title = DEFAULT_TITLE
      if (meta) {
        meta.setAttribute("content", DEFAULT_DESCRIPTION)
      }
    }
  }, [title, description])
}

export { useHead }
