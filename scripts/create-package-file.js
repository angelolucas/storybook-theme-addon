/* eslint-disable no-console */

const path = require('path');
const fse = require('fs-extra');

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(__dirname, '../package.json'),
    'utf8'
  );
  const { scripts, devDependencies, husky, ...packageDataOther } = JSON.parse(
    packageData
  );
  const newPackageData = {
    ...packageDataOther,
    main: './index.js',
  };

  const targetPath = path.resolve(__dirname, '../build/package.json');

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  );

  console.log('📦 Created package.json');

  return newPackageData;
}

createPackageFile();
