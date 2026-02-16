import { useEffect } from "react"
import { Download } from "lucide-react"

const fonts = [
  {
    name: "RuneScape Plain 12",
    file: "RuneScape-Plain-12",
    description: "The main body font used throughout the UI. Clean and legible at small sizes.",
    cssVar: "--font-rs",
  },
  {
    name: "RuneScape Bold 12",
    file: "RuneScape-Bold-12",
    description: "Used for buttons, headings, and emphasis. Thicker strokes for better contrast.",
    cssVar: "--font-rs-bold",
  },
  {
    name: "RuneScape Quill",
    file: "RuneScape-Quill",
    description: "A decorative serif font for descriptions and flavor text.",
    cssVar: "--font-rs-quill",
  },
  {
    name: "RuneScape Quill Caps",
    file: "RuneScape-Quill-Caps",
    description: "Tall display capitals for large titles and hero sections.",
    cssVar: "--font-rs-quill-caps",
  },
  {
    name: "RuneScape Plain 11",
    file: "RuneScape-Plain-11",
    description: "A smaller variant of the plain font for compact UI elements.",
  },
  {
    name: "RuneScape Quill 8",
    file: "RuneScape-Quill-8",
    description: "Small quill variant for fine print and labels.",
  },
  {
    name: "RuneScape Barbarian Assault",
    file: "RuneScape-Barbarian-Assault",
    description: "The chunky display font from the Barbarian Assault minigame.",
  },
  {
    name: "RuneScape Fairy",
    file: "RuneScape-Fairy",
    description: "A whimsical font from the Fairy Tale quest series.",
  },
  {
    name: "RuneScape Fairy Large",
    file: "RuneScape-Fairy-Large",
    description: "Larger variant of the Fairy font for headings.",
  },
  {
    name: "RuneScape Surok",
    file: "RuneScape-Surok",
    description: "A sharp, angular display font from the What Lies Below quest.",
  },
]

function FontsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-3xl space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-3">
          Fonts
        </h1>
        <p className="text-lg text-rs-brown-light leading-relaxed">
          All fonts are from the{" "}
          <a
            href="https://github.com/RuneStar/fonts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rs-orange hover:text-rs-yellow underline underline-offset-4 transition-none"
          >
            RuneStar/fonts
          </a>{" "}
          repository. They are pixel-accurate recreations of the typefaces used
          in Old School RuneScape, released under the{" "}
          <a
            href="https://creativecommons.org/publicdomain/zero/1.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rs-cyan hover:text-rs-yellow underline underline-offset-4 transition-none"
          >
            CC0-1.0
          </a>{" "}
          license (public domain).
        </p>
      </div>

      {/* Download all */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Download All
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/RuneStar/fonts/archive/refs/heads/master.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-black bg-[#8a7340] px-5 py-2.5 text-base text-black font-[family-name:var(--font-rs-bold)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.25),inset_-1px_-1px_0_rgba(0,0,0,0.6)] hover:bg-[#9a8350] hover:text-rs-yellow transition-none"
          >
            <Download className="h-5 w-5" />
            Download from GitHub (.zip)
          </a>
        </div>
      </section>

      {/* License */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          License
        </h2>
        <div className="rs-stone-bg border-2 border-black shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] p-4 md:p-6">
          <p className="text-base text-rs-orange leading-relaxed mb-3">
            These fonts are released under{" "}
            <span className="text-rs-cyan">CC0-1.0 (Creative Commons Zero)</span>.
            This means they are dedicated to the public domain — you can use,
            modify, and distribute them freely for any purpose, including
            commercial projects, without attribution.
          </p>
          <p className="text-base text-rs-brown-light leading-relaxed">
            Source:{" "}
            <a
              href="https://github.com/RuneStar/fonts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rs-orange hover:text-rs-yellow underline underline-offset-4 transition-none"
            >
              github.com/RuneStar/fonts
            </a>
          </p>
        </div>
      </section>

      {/* Font list */}
      <section>
        <h2 className="text-xl text-rs-gold font-[family-name:var(--font-rs-bold)] mb-4 border-b-2 border-rs-brown-light/40 pb-3">
          Font List
        </h2>
        <div className="space-y-4">
          {fonts.map((font) => (
            <div
              key={font.file}
              className="border-2 border-black bg-rs-brown-dark/50 p-4 md:p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg text-rs-gold font-[family-name:var(--font-rs-bold)]">
                    {font.name}
                  </h3>
                  {font.cssVar && (
                    <p className="text-sm text-rs-cyan font-mono mt-1">
                      var({font.cssVar})
                    </p>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={`/fonts/otf/${font.file}.otf`}
                    download
                    className="inline-flex items-center gap-1.5 border-2 border-black bg-rs-brown-medium px-3 py-1.5 text-sm text-rs-orange font-[family-name:var(--font-rs-bold)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] hover:text-rs-yellow transition-none"
                  >
                    <Download className="h-4 w-4" />
                    .otf
                  </a>
                  <a
                    href={`/fonts/ttf/${font.file}.ttf`}
                    download
                    className="inline-flex items-center gap-1.5 border-2 border-black bg-rs-brown-medium px-3 py-1.5 text-sm text-rs-orange font-[family-name:var(--font-rs-bold)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),inset_-1px_-1px_0_rgba(0,0,0,0.5)] hover:text-rs-yellow transition-none"
                  >
                    <Download className="h-4 w-4" />
                    .ttf
                  </a>
                </div>
              </div>
              <p className="text-base text-rs-brown-light leading-relaxed mb-3">
                {font.description}
              </p>
              <p
                className="text-2xl text-rs-orange"
                style={{ fontFamily: `'${font.name}', monospace` }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export { FontsPage }
