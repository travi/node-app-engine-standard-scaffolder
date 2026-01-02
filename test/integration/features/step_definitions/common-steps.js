import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

When('the project is scaffolded', async function () {
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  const {scaffold} = await import('@travi/node-app-engine-standard-scaffolder');

  stubbedFs({node_modules: stubbedNodeModules});

  await scaffold({projectRoot: this.projectRoot, configs: {commitlint: {name: this.commilintConfigName}}});
});
