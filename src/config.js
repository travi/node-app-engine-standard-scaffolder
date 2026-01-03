import {promises as fs} from 'node:fs';
import {stringify} from 'yaml';
import {info} from '@travi/cli-messages';

export default function scaffoldConfig(projectRoot, projectName, nodeVersion) {
  info('Generating App Engine Config');

  return fs.writeFile(`${projectRoot}/app.yaml`, stringify({runtime: `nodejs${nodeVersion}`, service: projectName}));
}
