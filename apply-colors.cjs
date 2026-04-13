
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "src", "components");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".jsx"));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Icons hover
  content = content.replace(/hover:text-slate-900 dark:hover:text-slate-100/g, "hover:text-blue-600 dark:hover:text-blue-400");
  content = content.replace(/hover:text-slate-900 dark:text-slate-100/g, "hover:text-blue-600 dark:hover:text-blue-400");
  
  // Theme Toggle Button
  content = content.replace(/text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1" aria-label="Toggle Dark Mode"/g, "text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors p-1\" aria-label=\"Toggle Dark Mode\"");

  fs.writeFileSync(filePath, content, "utf-8");
});

console.log("Colors applied.");

