/**
 * Web Interface Projects - Unified Showcase Builder
 * Builds all 8 Vite projects + 2 HTML projects into a single dist/ deployment directory
 * Suitable for GitHub Pages, Vercel, Netlify, or local hosting.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect whether script is executed from repo root or inside 'Web Interface Projects'
const inSubdir = fs.existsSync(path.join(__dirname, 'unit - 1 project - 1.html'));
const projectRoot = inSubdir ? __dirname : path.join(__dirname, 'Web Interface Projects');
const repoRoot = inSubdir ? path.resolve(__dirname, '..') : __dirname;
const outputDir = path.join(repoRoot, 'dist');
const localDist = path.join(projectRoot, 'dist');

console.log('🚀 Starting Web Interface Projects Showcase Build');
console.log(`📁 Project Root: ${projectRoot}`);
console.log(`📦 Distribution Target: ${outputDir}`);

// Ensure clean distribution directories
for (const dir of [outputDir, localDist]) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

const projects = [
  {
    slug: 'unit-1-pro-1',
    title: 'Interactive Counter App',
    unit: 'Unit 1: Foundations of Web',
    type: 'html',
    sourceFile: 'unit - 1 project - 1.html'
  },
  {
    slug: 'unit-1-pro-2',
    title: 'Student Profile Card & Grade Evaluator',
    unit: 'Unit 1: Foundations of Web',
    type: 'html',
    sourceFile: 'unit - 1 project - 2.html'
  },
  {
    slug: 'unit-2-pro-1',
    title: 'Developer Portfolio - Jai',
    unit: 'Unit 2: React Component Architecture',
    type: 'vite',
    dir: path.join('unit - 2 Project - 1', 'unit-2-pro-1')
  },
  {
    slug: 'unit-2-pro-2',
    title: 'Hobby & Interest Gallery Showcase',
    unit: 'Unit 2: React Component Architecture',
    type: 'vite',
    dir: path.join('unit - 2 project - 2', 'unit-2-pro-2')
  },
  {
    slug: 'unit-3-pro-1',
    title: 'Digital Responsive Calculator',
    unit: 'Unit 3: React Hooks & State',
    type: 'vite',
    dir: path.join('unit - 3 project -1', 'unit-3-pro-1')
  },
  {
    slug: 'unit-3-pro-2',
    title: 'Student Attendance Tracker',
    unit: 'Unit 3: React Hooks & State',
    type: 'vite',
    dir: path.join('unit - 3 project - 2', 'unit-3-pro-2')
  },
  {
    slug: 'unit-4-pro-1',
    title: 'Form Validation & Auth Gate',
    unit: 'Unit 4: Advanced Forms & Routing',
    type: 'vite',
    dir: path.join('unit - 4 project - 1', 'unit-4-pro-1')
  },
  {
    slug: 'unit-4-pro-2',
    title: 'Personal Portfolio - Mariyappan',
    unit: 'Unit 4: Advanced Forms & Routing',
    type: 'vite',
    dir: path.join('unit - 4 - project - 2', 'unit-4_project-2')
  },
  {
    slug: 'unit-5-pro-1',
    title: 'Student Academic Portal & SGPA Report',
    unit: 'Unit 5: Complete Web Applications',
    type: 'vite',
    dir: path.join('unit - 5 - project - 1', 'unit-5-project-1')
  },
  {
    slug: 'unit-5-pro-2',
    title: 'TaskFlow - Productivity & Task Suite',
    unit: 'Unit 5: Complete Web Applications',
    type: 'vite',
    dir: path.join('unit - 5 - project - 2', 'unit-5-project-2')
  }
];

// Helper to copy directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Injects a floating "Back to Showcase Hub" button into sub-project index.html
function injectBackBadge(htmlFilePath) {
  if (!fs.existsSync(htmlFilePath)) return;
  let html = fs.readFileSync(htmlFilePath, 'utf8');
  const badgeCode = `
<!-- Web Interface Projects Floating Hub Badge -->
<style id="wip-hub-badge-style">
  .wip-floating-hub-btn {
    position: fixed;
    top: 14px;
    right: 14px;
    z-index: 999999;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    background: rgba(15, 23, 42, 0.88);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 9999px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .wip-floating-hub-btn:hover {
    background: rgba(30, 41, 59, 0.98);
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
    transform: translateY(-1px);
    color: #ffffff;
  }
  .wip-floating-hub-btn svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    stroke-width: 2.2;
    fill: none;
  }
</style>
<a href="../../index.html" class="wip-floating-hub-btn" title="Return to Showcase Hub">
  <svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
  Showcase Hub
</a>
`;
  if (!html.includes('wip-floating-hub-btn')) {
    if (html.includes('</body>')) {
      html = html.replace('</body>', `${badgeCode}\n</body>`);
    } else {
      html += badgeCode;
    }
    fs.writeFileSync(htmlFilePath, html, 'utf8');
  }
}

// Build each project
console.log('\n========================================');
console.log('🏗️  BUILDING SUBPROJECTS');
console.log('========================================\n');

for (const p of projects) {
  const targetDir = path.join(outputDir, 'projects', p.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  if (p.type === 'html') {
    console.log(`📄 Copying static HTML: ${p.title} (${p.slug})...`);
    const src = path.join(projectRoot, p.sourceFile);
    const dest = path.join(targetDir, 'index.html');
    fs.copyFileSync(src, dest);
    injectBackBadge(dest);
    console.log(`   ✓ Ready at projects/${p.slug}/index.html`);
  } else if (p.type === 'vite') {
    const fullProjPath = path.join(projectRoot, p.dir);
    console.log(`⚡ Building Vite project: ${p.title} (${p.slug})...`);
    
    // Check if node_modules exists, install if missing
    if (!fs.existsSync(path.join(fullProjPath, 'node_modules'))) {
      console.log(`   📦 Installing dependencies in ${p.dir}...`);
      execSync('npm install --prefer-offline --no-audit --no-fund --legacy-peer-deps', {
        cwd: fullProjPath,
        stdio: 'inherit'
      });
    }

    // Run Vite build with relative base
    execSync('npx vite build --base=./', {
      cwd: fullProjPath,
      stdio: 'inherit'
    });

    const distPath = path.join(fullProjPath, 'dist');
    if (fs.existsSync(distPath)) {
      copyDir(distPath, targetDir);
      injectBackBadge(path.join(targetDir, 'index.html'));
      console.log(`   ✓ Built and staged into projects/${p.slug}/`);
    } else {
      console.error(`   ❌ Missing dist directory for ${p.slug}!`);
    }
  }
}

// Copy Showcase Portal index.html to output
console.log('\n========================================');
console.log('🌟 PREPARING SHOWCASE PORTAL HUB');
console.log('========================================\n');

const portalTemplatePath = path.join(projectRoot, 'portal.html');
const showcaseHtml = fs.existsSync(portalTemplatePath)
  ? fs.readFileSync(portalTemplatePath, 'utf8')
  : fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

fs.writeFileSync(path.join(outputDir, 'index.html'), showcaseHtml, 'utf8');

// Also create a .nojekyll file to prevent GitHub Pages from ignoring files starting with underscore
fs.writeFileSync(path.join(outputDir, '.nojekyll'), '', 'utf8');

// Copy whole output to local projectRoot/dist as well for local preview
copyDir(outputDir, localDist);

console.log('\n🎉 ALL PROJECTS COMPILED & ASSEMBLED SUCCESSFULLY!');
console.log(`✨ Total Projects: ${projects.length}`);
console.log(`🌐 Showcase Root: ${path.join(outputDir, 'index.html')}`);
console.log(`💡 To test locally: npx serve "${outputDir}"`);
