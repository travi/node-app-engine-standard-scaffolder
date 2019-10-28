import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as config from '../../src/config';
import scaffold from '../../src/scaffolder';

suite('scaffolder', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(config, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the config files are generated', async () => {
    const projectRoot = any.string();
    const projectName = any.string();
    const nodeVersion = any.string();
    config.default.resolves();

    assert.deepEqual(await scaffold({projectRoot, projectName, nodeVersion}), {});

    assert.calledWith(config.default, projectRoot, projectName, nodeVersion);
  });
});
