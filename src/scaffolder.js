import generateConfig from './config';

export default async function ({projectRoot, projectName}) {
  await generateConfig(projectRoot, projectName);

  return {};
}
