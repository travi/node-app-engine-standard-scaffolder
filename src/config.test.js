import {promises as fs} from 'node:fs';
import {stringify} from 'yaml';

import {it, describe, vi, expect} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import config from './config.js';

vi.mock('node:fs');
vi.mock('yaml');

describe('config', () => {
  it('should generate the config files', async () => {
    const projectRoot = any.string();
    const projectName = any.string();
    const nodeVersion = any.word();
    const stringifiedConfig = any.simpleObject();
    when(stringify).calledWith({runtime: `nodejs${nodeVersion}`, service: projectName}).thenReturn(stringifiedConfig);

    await config(projectRoot, projectName, nodeVersion);

    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/app.yaml`, stringifiedConfig);
  });
});
