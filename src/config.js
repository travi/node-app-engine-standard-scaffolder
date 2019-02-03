import writeYaml from '../thirdparty-wrappers/write-yaml';

export default function (projectRoot) {
  return writeYaml(`${projectRoot}/app.yaml`, {runtime: 'nodejs10'});
}
