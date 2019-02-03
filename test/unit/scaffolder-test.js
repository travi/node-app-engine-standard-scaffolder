import {assert} from 'chai';
import sinon from 'sinon';
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
    config.default.resolves();

    assert.deepEqual(await scaffold(), {});

    assert.calledOnce(config.default);
  });
});
