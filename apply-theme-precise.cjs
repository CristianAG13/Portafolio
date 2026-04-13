
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "src", "components");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".jsx"));

const replacements = [
  // Backgrounds: Light mode makes everything white/zinc-50, Dark mode keeps the sleek zinc structure.
  { r: /(?<!dark:)\bbg-zinc-950\b(\/[0-9]+)?/g, d: "bg-white dark:bg-zinc-950$1" },
  { r: /(?<!dark:)\bbg-zinc-900\b(\/[0-9]+)?/g, d: "bg-zinc-50 dark:bg-zinc-900$1" },
  { r: /(?<!dark:)\bbg-zinc-800\b(\/[0-9]+)?/g, d: "bg-zinc-100 dark:bg-zinc-800$1" },
  { r: /(?<!dark:)\bbg-zinc-700\b(\/[0-9]+)?/g, d: "bg-zinc-200 dark:bg-zinc-700$1" },

  // Text colors
  { r: /(?<!dark:)\btext-zinc-100\b(\/[0-9]+)?/g, d: "text-zinc-900 dark:text-zinc-100$1" },
  { r: /(?<!dark:)\btext-zinc-200\b(\/[0-9]+)?/g, d: "text-zinc-800 dark:text-zinc-200$1" },
  { r: /(?<!dark:)\btext-zinc-300\b(\/[0-9]+)?/g, d: "text-zinc-700 dark:text-zinc-300$1" },
  { r: /(?<!dark:)\btext-zinc-400\b(\/[0-9]+)?/g, d: "text-zinc-600 dark:text-zinc-400$1" },
  { r: /(?<!dark:)\btext-zinc-500\b(\/[0-9]+)?/g, d: "text-zinc-500 dark:text-zinc-500$1" },
  
  // Borders
  { r: /(?<!dark:)\bborder-zinc-900\b(\/[0-9]+)?/g, d: "border-zinc-200 dark:border-zinc-900$1" },
  { r: /(?<!dark:)\bborder-zinc-800\b(\/[0-9]+)?/g, d: "border-zinc-200 dark:border-zinc-800$1" },
  { r: /(?<!dark:)\bborder-zinc-700\b(\/[0-9]+)?/g, d: "border-zinc-300 dark:border-zinc-700$1" },
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  replacements.forEach(({r, d}) => {
      content = content.replace(r, d);
  });
  
  fs.writeFileSync(filePath, content, "utf-8");
});
console.log("Applied accurate refined light/dark theme combinations.");

