import {assert} from 'chai';
import sinon from 'sinon';
import any from '@travi/any';
import * as yamlWriter from '../../thirdparty-wrappers/write-yaml';
import config from '../../src/config';

suite('config', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(yamlWriter, 'default');

    yamlWriter.default.resolves();
  });

  teardown(() => sandbox.restore());

  test('that the config files are generated', async () => {
    const projectRoot = any.string();
    const projectName = any.string();

    await config(projectRoot, projectName);

    assert.calledWith(yamlWriter.default, `${projectRoot}/app.yaml`, {runtime: 'nodejs10', service: projectName});
  });
});
