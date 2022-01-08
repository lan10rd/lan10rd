import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  bareProject: true,
  projectRoot: './apps/docs-app-ng/src',
  projectName: 'docs-app-ng',
  distFolder: './dist/static', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};