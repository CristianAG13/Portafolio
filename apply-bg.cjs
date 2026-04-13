
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "src", "components");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".jsx"));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Soft invert for container backgrounds using the actual pristine state we recovered earlier.
  // Instead of bg-white, using soft bg-zinc-50 and bg-zinc-100 gives the Vercel/Linear feel in light mode.
  content = content.replace(/(?<!dark:)\bbg-zinc-950\b(\/[0-9]+)?/g, "bg-zinc-50 dark:bg-zinc-950$1");
  content = content.replace(/(?<!dark:)\bbg-zinc-900\b(\/[0-9]+)?/g, "bg-white dark:bg-zinc-900$1");
  content = content.replace(/(?<!dark:)\bbg-zinc-800\b(\/[0-9]+)?/g, "bg-zinc-100 dark:bg-zinc-800$1");

  fs.writeFileSync(filePath, content, "utf-8");
});

