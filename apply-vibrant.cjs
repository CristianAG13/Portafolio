
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "src", "components");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".jsx"));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf-8");
  
  // Change base greys to slate for a deep blue undertone
  content = content.replace(/zinc/g, "slate");

  fs.writeFileSync(filePath, content, "utf-8");
});

// Update index.css
const cssPath = path.join(__dirname, "src", "index.css");
let cssContent = fs.readFileSync(cssPath, "utf-8");
cssContent = cssContent.replace(/zinc/g, "slate");
fs.writeFileSync(cssPath, cssContent);

// Update tailwind.config
const twPath = path.join(__dirname, "tailwind.config.js");
let twContent = fs.readFileSync(twPath, "utf-8");
twContent = twContent.replace(/zinc/g, "slate");
fs.writeFileSync(twPath, twContent);

// Update App.jsx
const appPath = path.join(__dirname, "src", "App.jsx");
let appContent = fs.readFileSync(appPath, "utf-8");
appContent = appContent.replace(/zinc/g, "slate");
appContent = appContent.replace(/bg-slate-50/g, "bg-gray-50");
fs.writeFileSync(appPath, appContent);

console.log("Vibrant theme applied.");

