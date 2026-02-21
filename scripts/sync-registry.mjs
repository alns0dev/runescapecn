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

async function loadRegistryFileContent(registryFilePath) {
  const candidates = [
    path.join(projectRoot, "src", "components", registryFilePath),
    path.join(projectRoot, "src", registryFilePath),
    path.join(projectRoot, registryFilePath),
  ]

  for (const candidate of candidates) {
    try {
      return await readFile(candidate, "utf8")
    } catch (error) {
      if (error && typeof error === "object" && error.code === "ENOENT") {
        continue
      }
      throw error
    }
  }

  throw new Error(`Could not resolve file content for registry path: ${registryFilePath}`)
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
    const files = Array.isArray(json.files) ? json.files : []

    for (const file of files) {
      if (!file || typeof file.path !== "string" || file.path.length === 0) {
        continue
      }

      file.content = await loadRegistryFileContent(file.path)
    }

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
