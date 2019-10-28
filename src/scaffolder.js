import generateConfig from './config';

export default async function ({projectRoot, projectName, nodeVersion}) {
  await generateConfig(projectRoot, projectName, nodeVersion);

  return {};
}
