import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, "..")

const registryDir = path.join(projectRoot, "registry")
const componentsDir = path.join(registryDir, "components")
const stylesDir = path.join(registryDir, "styles")
const outputDir = path.join(projectRoot, "public", "r")

async function readJson(filePath) {
  const raw = await readFile(filePath, "utf8")
  return JSON.parse(raw)
}

async function main() {
  await rm(outputDir, { recursive: true, force: true })
  await mkdir(outputDir, { recursive: true })

  const componentFiles = (await readdir(componentsDir)).filter((name) =>
    name.endsWith(".json")
  )

  const styleFiles = (await readdir(stylesDir)).filter((name) =>
    name.endsWith(".json")
  )

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: "registry/components",
    components: [],
    styles: [],
  }

  for (const fileName of componentFiles) {
    const sourcePath = path.join(componentsDir, fileName)
    const targetPath = path.join(outputDir, fileName)
    const json = await readJson(sourcePath)

    await writeFile(targetPath, JSON.stringify(json, null, 2) + "\n", "utf8")

    manifest.components.push({
      name: json.name ?? fileName.replace(/\.json$/, ""),
      path: `/r/${fileName}`,
    })
  }

  const styleOutputDir = path.join(outputDir, "styles")
  await mkdir(styleOutputDir, { recursive: true })

  for (const fileName of styleFiles) {
    const sourcePath = path.join(stylesDir, fileName)
    const targetPath = path.join(styleOutputDir, fileName)
    const json = await readJson(sourcePath)

    await writeFile(targetPath, JSON.stringify(json, null, 2) + "\n", "utf8")

    manifest.styles.push({
      name: json.name ?? fileName.replace(/\.json$/, ""),
      path: `/r/styles/${fileName}`,
    })
  }

  const rootRegistryPath = path.join(registryDir, "registry.json")
  const rootRegistry = await readJson(rootRegistryPath)
  await writeFile(
    path.join(outputDir, "registry.json"),
    JSON.stringify(rootRegistry, null, 2) + "\n",
    "utf8"
  )

  await writeFile(
    path.join(outputDir, "index.json"),
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8"
  )

  console.log(
    `Synced ${componentFiles.length} components and ${styleFiles.length} styles to public/r`
  )
}

main().catch((error) => {
  console.error("Failed to sync registry files", error)
  process.exitCode = 1
})
