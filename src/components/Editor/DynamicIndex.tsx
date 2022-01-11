import { dynamic } from 'umi';

export default dynamic({
  loader: async function () {
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    const { default: Index } = await import(
      /* webpackChunkName: "external_A" */ './index'
    );
    return Index;
  },
});
