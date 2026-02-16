import * as React from "react"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/ui/copy-button"

interface CodeBlockProps {
  code: string
  className?: string
}

interface Token {
  type: "tag" | "attr" | "string" | "comment" | "text" | "punctuation"
  value: string
}

function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  let i = 0

  while (i < code.length) {
    // JSX comments {/* ... */}
    if (code.startsWith("{/*", i)) {
      const end = code.indexOf("*/}", i)
      if (end !== -1) {
        tokens.push({ type: "comment", value: code.slice(i, end + 3) })
        i = end + 3
        continue
      }
    }

    // Strings (double or single quotes, or backticks)
    if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
      const quote = code[i]
      let j = i + 1
      while (j < code.length && code[j] !== quote) {
        if (code[j] === "\\") j++
        j++
      }
      tokens.push({ type: "string", value: code.slice(i, j + 1) })
      i = j + 1
      continue
    }

    // JSX tags: <Component, </Component, />
    if (code[i] === "<") {
      const match = code.slice(i).match(/^<\/?([A-Za-z][A-Za-z0-9.]*)/)
      if (match) {
        tokens.push({ type: "punctuation", value: code[i] + (code[i + 1] === "/" ? "/" : "") })
        const offset = code[i + 1] === "/" ? 2 : 1
        tokens.push({ type: "tag", value: match[1] })
        i += offset + match[1].length
        continue
      }
    }

    // Closing > or />
    if (code.startsWith("/>", i)) {
      tokens.push({ type: "punctuation", value: "/>" })
      i += 2
      continue
    }
    if (code[i] === ">") {
      tokens.push({ type: "punctuation", value: ">" })
      i++
      continue
    }

    // Attributes (word followed by =)
    if (/[a-zA-Z]/.test(code[i])) {
      const match = code.slice(i).match(/^([a-zA-Z][a-zA-Z0-9-]*)(?==)/)
      if (match) {
        tokens.push({ type: "attr", value: match[1] })
        i += match[1].length
        continue
      }
    }

    // Braces and equals as punctuation
    if ("{=}".includes(code[i])) {
      tokens.push({ type: "punctuation", value: code[i] })
      i++
      continue
    }

    // Accumulate plain text
    let j = i
    while (
      j < code.length &&
      code[j] !== "<" &&
      code[j] !== ">" &&
      code[j] !== '"' &&
      code[j] !== "'" &&
      code[j] !== "`" &&
      code[j] !== "{" &&
      code[j] !== "}" &&
      code[j] !== "=" &&
      !code.startsWith("/>", j)
    ) {
      j++
    }
    if (j > i) {
      tokens.push({ type: "text", value: code.slice(i, j) })
      i = j
    } else {
      tokens.push({ type: "text", value: code[i] })
      i++
    }
  }

  return tokens
}

const colorMap: Record<Token["type"], string> = {
  tag: "text-rs-green",
  attr: "text-rs-cyan",
  string: "text-rs-yellow",
  comment: "text-rs-brown-light italic",
  punctuation: "text-rs-brown-light",
  text: "text-rs-orange",
}

function CodeBlock({ code, className }: CodeBlockProps) {
  const highlighted = React.useMemo(() => {
    const tokens = tokenize(code)
    return tokens.map((token, i) => (
      <span key={i} className={colorMap[token.type]}>
        {token.value}
      </span>
    ))
  }, [code])

  return (
    <div className={cn("relative", className)}>
      <div className="absolute right-2 top-2 z-10">
        <CopyButton code={code} />
      </div>
      <pre className="rs-border-inset bg-[#111] p-4 overflow-x-auto">
        <code className="text-base font-mono whitespace-pre">
          {highlighted}
        </code>
      </pre>
    </div>
  )
}

export { CodeBlock }
