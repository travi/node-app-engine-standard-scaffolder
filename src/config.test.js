import {it, describe, vi, expect} from 'vitest';
import any from '@travi/any';

import writeYaml from '../thirdparty-wrappers/write-yaml.js';
import config from './config.js';

vi.mock('../thirdparty-wrappers/write-yaml.js');

describe('config', () => {
  it('should generate the config files', async () => {
    const projectRoot = any.string();
    const projectName = any.string();
    const nodeVersion = any.word();

    await config(projectRoot, projectName, nodeVersion);

    expect(writeYaml).toHaveBeenCalledWith(
      `${projectRoot}/app.yaml`,
      {runtime: `nodejs${nodeVersion}`, service: projectName}
    );
  });
});
