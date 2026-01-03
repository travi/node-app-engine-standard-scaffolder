import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';
import any from '@travi/any';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

Before(function () {
  this.projectRoot = process.cwd();
  this.projectName = any.word();
  this.nodeVersion = any.integer();
});

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  const {scaffold} = await import('@travi/node-app-engine-standard-scaffolder');

  stubbedFs({node_modules: stubbedNodeModules});

  await scaffold({projectRoot: this.projectRoot, projectName: this.projectName, nodeVersion: this.nodeVersion});
});
