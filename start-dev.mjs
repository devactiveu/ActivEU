import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.chdir(path.join(__dirname, 'ActivEU-main'));
await import('./ActivEU-main/node_modules/vite/bin/vite.js');
