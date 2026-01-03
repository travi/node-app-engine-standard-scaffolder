import {promises as fs} from 'node:fs';
import {parse} from 'yaml';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the expected config is generated', async function () {
  const config = parse(await fs.readFile(`${this.projectRoot}/app.yaml`, 'utf8'));

  assert.deepEqual(config, {runtime: `nodejs${this.nodeVersion}`, service: this.projectName});
});
