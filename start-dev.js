const { execSync } = require('child_process');
const path = require('path');
process.chdir(path.join(__dirname, 'ActivEU-main'));
require('./ActivEU-main/node_modules/vite/bin/vite.js');
