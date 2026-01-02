import generateConfig from './config.js';

export default async function ({projectRoot, projectName, nodeVersion}) {
  await generateConfig(projectRoot, projectName, nodeVersion);

  return {};
}
