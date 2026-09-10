import fs from "fs";
import path from "path";
import process from "node:process";
import sharp from "sharp";

const ASSETS_DIR = path.resolve("src/assets");

function getFiles(dir, ext = ".png") {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getFiles(fullPath, ext));
    } else if (item.name.toLowerCase().endsWith(ext)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertAll() {
  const pngFiles = getFiles(ASSETS_DIR, ".png");
  console.log(`Found ${pngFiles.length} PNG files in src/assets.`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of pngFiles) {
    const origSize = fs.statSync(file).size;
    totalOriginal += origSize;

    const parsed = path.parse(file);
    const targetWebP = path.join(parsed.dir, `${parsed.name}.webp`);

    let pipeline = sharp(file);
    const meta = await pipeline.metadata();

    let maxDim = 1200;
    if (file.includes("EquipeGallery") || file.includes("Professores")) {
      maxDim = 600;
    } else if (file.includes("ServicosCards")) {
      maxDim = 800;
    }

    if (meta.width > maxDim || meta.height > maxDim) {
      pipeline = pipeline.resize({
        width: meta.width > meta.height ? maxDim : undefined,
        height: meta.height >= meta.width ? maxDim : undefined,
        withoutEnlargement: true,
      });
    }

    await pipeline
      .webp({ quality: 82, effort: 5 })
      .toFile(targetWebP);

    const newSize = fs.statSync(targetWebP).size;
    totalOptimized += newSize;

    console.log(
      `✓ ${parsed.base} (${(origSize / 1024).toFixed(0)} KB) -> ${parsed.name}.webp (${(newSize / 1024).toFixed(0)} KB)`
    );
  }

  console.log("-----------------------------------------");
  console.log(`Total original PNG: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total optimized WebP: ${(totalOptimized / (1024 * 1024)).toFixed(2)} MB`);
  console.log(
    `Saved: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`
  );
}

convertAll().catch((err) => {
  console.error("Error converting images:", err);
  process.exit(1);
});
