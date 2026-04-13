
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "src", "components");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".jsx"));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Reemplazar colores oscuros por la versión doble (claro oscure)
  content = content.replace(/\bbg-zinc-950\b(?! dark:bg-zinc-950)/g, "bg-white dark:bg-zinc-950");
  content = content.replace(/\bbg-zinc-900\b(?! dark:bg-zinc-900)/g, "bg-zinc-100 dark:bg-zinc-900");
  content = content.replace(/\bbg-zinc-800\b(?! dark:bg-zinc-800)/g, "bg-zinc-200 dark:bg-zinc-800");
  content = content.replace(/\bbg-zinc-100\b(?! dark:bg-zinc-100)/g, "bg-zinc-900 dark:bg-zinc-100");
  
  content = content.replace(/\border-zinc-900\b(?! dark:border-zinc-900)/g, "border-zinc-200 dark:border-zinc-900");
  content = content.replace(/\border-zinc-800\b(?! dark:border-zinc-800)/g, "border-zinc-200 dark:border-zinc-800");
  content = content.replace(/\border-zinc-700\b(?! dark:border-zinc-700)/g, "border-zinc-300 dark:border-zinc-700");

  content = content.replace(/\btext-zinc-100\b(?! dark:text-zinc-100)/g, "text-zinc-900 dark:text-zinc-100");
  content = content.replace(/\btext-zinc-200\b(?! dark:text-zinc-200)/g, "text-zinc-800 dark:text-zinc-200");
  content = content.replace(/\btext-zinc-300\b(?! dark:text-zinc-300)/g, "text-zinc-700 dark:text-zinc-300");
  content = content.replace(/\btext-zinc-400\b(?! dark:text-zinc-400)/g, "text-zinc-600 dark:text-zinc-400");
  content = content.replace(/\btext-zinc-500\b(?! dark:text-zinc-500)/g, "text-zinc-500 dark:text-zinc-500");
  content = content.replace(/\btext-zinc-950\b(?! dark:text-zinc-950)/g, "text-zinc-100 dark:text-zinc-950");
  
  // Apellidos
  content = content.replace(/Cristian Aguirre(?! Guadamuz)/g, "Cristian Aguirre Guadamuz");
  content = content.replace(/Cristian \\n\\s*<span/g, "Cristian \\n            <span");

  fs.writeFileSync(filePath, content, "utf-8");
});

console.log("Updated themes on components.");

