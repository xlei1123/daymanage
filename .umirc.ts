import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [  // 走约定式路由
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  ssr: {
    mode: 'stream',
    // forceInitial: true  // 无论是首屏还是页面切换，都会触发 getInitialProps
  },
  dva: {},
  publicPath: '/static/',
});
