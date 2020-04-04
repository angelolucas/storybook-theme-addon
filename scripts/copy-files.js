/* eslint-disable no-console */

const fs = require('fs-extra');
const path = require('path');

fs.copySync(
  path.resolve(__dirname, '../README.md'),
  path.resolve(__dirname, '../build/README.md')
);

console.log('🧾 Copieted README.md');
