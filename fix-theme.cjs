
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "src", "components");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".jsx"));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Revert bad nested classes
  content = content.replace(/bg-zinc-[0-9]+ dark:bg-zinc-[0-9]+ dark:bg-zinc-[0-9]+(\/[0-9]+)?/g, (match) => {
      // It was probably bg-zinc-900/x or something. Let us extract the last part.
      let parts = match.split("dark:bg-");
      return "dark:bg-" + parts[2]; // keep the last one, change back later
  });
  
  // Revert all text-..., bg-..., border-... dark variants
  content = content.replace(/bg-white dark:bg-zinc-950/g, "bg-zinc-950");
  content = content.replace(/bg-zinc-[0-9]+ dark:bg-zinc-([0-9]+)(\/[0-9]+)?/g, "bg-zinc-$1$2");
  content = content.replace(/border-zinc-[0-9]+ dark:border-zinc-([0-9]+)(\/[0-9]+)?/g, "border-zinc-$1$2");
  content = content.replace(/text-zinc-[0-9]+ dark:text-zinc-([0-9]+)(\/[0-9]+)?/g, "text-zinc-$1$2");
  content = content.replace(/text-zinc-900 dark:text-zinc-100/g, "text-zinc-100"); // for hero h1

  fs.writeFileSync(filePath, content, "utf-8");
});
console.log("Restored original zinc classes.");

