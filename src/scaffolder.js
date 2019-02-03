import generateConfig from './config';

export default async function ({projectRoot}) {
  await generateConfig(projectRoot);

  return {};
}
