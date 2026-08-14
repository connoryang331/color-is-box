import { createRequire } from 'module';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const esbuild = require('F:/AI_Code/osheet/osheet/node_modules/esbuild');
const dist = path.join(__dirname, 'dist');
const opts = { bundle: true, loader: { '.css': 'text' }, logLevel: 'info', minify: true };
const rename = (from, to) => { const a = path.join(dist, from); const b = path.join(dist, to); if (fs.existsSync(a) && a !== b) fs.renameSync(a, b); };
Promise.all([
  // ESM core: splitting -> index.js + controls chunk, renamed to color-is-box.js
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'index.ts')], format: 'esm', splitting: true, outdir: dist, outbase: path.join(__dirname, 'src'), entryNames: '[name]' }).then(() => rename('index.js', 'color-is-box.js')),
  // ESM element: splitting too
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'element.ts')], format: 'esm', splitting: true, outdir: dist, outbase: path.join(__dirname, 'src'), entryNames: '[name]' }).then(() => rename('element.js', 'color-is-box-element.js')),
  // IIFE full bundles (no splitting possible)
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'index.ts')], format: 'iife', globalName: 'ColorIsBox', outfile: path.join(dist, 'color-is-box.iife.js') }),
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'element.ts')], format: 'iife', globalName: 'ColorIsBoxElement', outfile: path.join(dist, 'color-is-box-element.iife.js') }),
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'color-math.ts')], format: 'esm', outfile: path.join(dist, 'color-math.js') }),
]).then(() => console.log('BUILD OK')).catch((e) => { console.error(e); process.exit(1); });