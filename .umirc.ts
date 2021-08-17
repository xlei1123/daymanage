import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [  走约定式路由
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  ssr: {},
});
