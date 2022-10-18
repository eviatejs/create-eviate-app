import { FileSystemRouter } from '@eviatejs/plugin-filesystem-router';

export default new FileSystemRouter({
  routerDir: '/src/routes',
  middlewareDir: '/src/middlewares',
  log: false
});
