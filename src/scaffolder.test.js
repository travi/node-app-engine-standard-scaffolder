import {it, vi, expect, describe} from 'vitest';
import any from '@travi/any';

import generateConfig from './config.js';
import scaffold from './scaffolder.js';

vi.mock('./config.js');

describe('scaffolder', () => {
  it('should generate the config files', async () => {
    const projectRoot = any.string();
    const projectName = any.string();
    const nodeVersion = any.string();

    expect(await scaffold({projectRoot, projectName, nodeVersion})).toEqual({});

    expect(generateConfig).toHaveBeenCalledWith(projectRoot, projectName, nodeVersion);
  });
});
