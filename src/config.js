import {info} from '@travi/cli-messages';
import writeYaml from '../thirdparty-wrappers/write-yaml';

export default function (projectRoot, projectName, nodeVersion) {
  info('Generating App Engine Config');

  return writeYaml(`${projectRoot}/app.yaml`, {runtime: `nodejs${nodeVersion}`, service: projectName});
}
