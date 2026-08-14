import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const esbuild = require('F:/AI_Code/osheet/osheet/node_modules/esbuild');
const opts = { bundle: true, loader: { '.css': 'text' }, logLevel: 'info' };
Promise.all([
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'index.ts')], format: 'esm', outfile: path.join(__dirname, 'dist', 'color-is-box.js') }),
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'index.ts')], format: 'iife', globalName: 'ColorIsBox', outfile: path.join(__dirname, 'dist', 'color-is-box.iife.js') }),
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'element.ts')], format: 'iife', globalName: 'ColorIsBoxElement', outfile: path.join(__dirname, 'dist', 'color-is-box-element.iife.js') }),
  esbuild.build({ ...opts, entryPoints: [path.join(__dirname, 'src', 'element.ts')], format: 'esm', outfile: path.join(__dirname, 'dist', 'color-is-box-element.js') }),
]).then(() => console.log('BUILD OK: 4 bundles')).catch((e) => { console.error(e); process.exit(1); });