import https from "https";
import fs from "fs";
import path from "path";

const fontsDir = path.resolve("public/fonts");
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir, { recursive: true });

const url =
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:wght@500..800&display=swap";

function fetchText(fetchUrl) {
  return new Promise((resolve, reject) => {
    https
      .get(
        fetchUrl,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve(data));
        }
      )
      .on("error", reject);
  });
}

function downloadBinary(binUrl, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(binUrl, (res) => {
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

async function run() {
  console.log("Fetching Google Fonts variable definitions...");
  const css = await fetchText(url);

  // Clean old woff2 files in fontsDir
  const existingFiles = fs.readdirSync(fontsDir);
  for (const f of existingFiles) {
    if (f.endsWith(".woff2")) {
      fs.unlinkSync(path.join(fontsDir, f));
    }
  }

  const matches = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([\s\S]*?)\}/g)];
  let localCss = "";
  let downloadedCount = 0;

  for (const match of matches) {
    const subset = match[1];
    const body = match[2];

    if (subset !== "latin" && subset !== "latin-ext") continue;

    const familyMatch = body.match(/font-family:\s*'([^']+)'/);
    const weightMatch = body.match(/font-weight:\s*([^;]+);/);
    const urlMatch = body.match(/src:\s*url\((https:\/\/[^)]+\.woff2)\)/);
    const rangeMatch = body.match(/unicode-range:\s*([^;]+);/);

    if (familyMatch && weightMatch && urlMatch && rangeMatch) {
      const family = familyMatch[1];
      const weight = weightMatch[1].trim();
      const fontUrl = urlMatch[1];
      const range = rangeMatch[1].trim();

      const cleanName = family.replace(/\s+/g, "-").toLowerCase();
      const filename = `${cleanName}-${subset}.woff2`;
      const dest = path.join(fontsDir, filename);

      console.log(`Downloading ${filename} (${family} ${subset} [${weight}])...`);
      await downloadBinary(fontUrl, dest);
      downloadedCount++;

      localCss += `@font-face {\n  font-family: '${family}';\n  font-style: normal;\n  font-weight: ${weight};\n  font-display: swap;\n  src: url('/fonts/${filename}') format('woff2');\n  unicode-range: ${range};\n}\n\n`;
    }
  }

  const cssDest = path.join(fontsDir, "fonts.css");
  fs.writeFileSync(cssDest, localCss, "utf8");
  console.log(`Successfully saved ${cssDest} with ${downloadedCount} definitions.`);
}

run().catch((err) => {
  console.error("Font download failed:", err);
  process.exit(1);
});
