import generateConfig from './config';

export default async function () {
  await generateConfig();

  return {};
}
