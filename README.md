# 一，基于umi3开发的日程管理系统
> 包括新建日程 日程列表， 打通微信， 定时推送日程
**喜欢的帮忙点个star**


# 二，开发说明
1. clone 项目
2. cd daymanage
3. npm i
4. npm start
5. 访问 /home 路径 作为主路径

## 目录
```
.
├── README.md
├── dist // 打包后输出文件目录
├── jest.config.js // 单元测试配置
├── mock // mock数据文件
├── package.json
├── public // 静态文件目录 可以直接```/a.txt```这样访问
│   └── a.txt
├── src
│   ├── components // 公共组件
│   ├── config // 常用配置
│   ├── global.css // 全局css 文件
│   └── pages // 页面
├── test // 测试文件目录
│   └── index.test.js
├── tsconfig.json // ts配置
└── typings.d.ts
```
## 其他
1. css变量在src/global.css中定义 后续在全局中使用； 如果考虑css变量兼容问题，则可以在.umirc.ts中define定义变量。umi会在编译时自动将所有变量替换
2. 开启dva配置：https://umijs.org/zh-CN/plugins/plugin-dva
3. request请求库 https://github.com/umijs/umi-request/blob/master/README_zh-CN.md
4. mock数据 https://umijs.org/zh-CN/docs/mock#%E7%BC%96%E5%86%99-mock-%E6%96%87%E4%BB%B6




# 三，服务端渲染
https://umijs.org/zh-CN/docs/ssr

## 其他问题
1. 服务端请求必须使用绝对的 URL 路径；

开启了 SSR 之后，app.getInitialData 以及 Home.getInitialProps 都会在服务端下执行，服务端发请求必须用绝对路径不能用相对路径，因此这两个方法里如果出现异步请求，请务必使用绝对路径，或者正确设置 request.baseURL

2. ssr与dva结合: https://umijs.org/zh-CN/docs/ssr#%E4%B8%8E-dva-%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8

## 服务端地址


# 四，单测
- https://github.com/umijs/umi/issues/446
- 如果你以前没有过单测经验或者对单测了解较少 推荐你阅读下面这便文章：
https://juejin.cn/post/6844903798406643725
https://juejin.cn/post/6844903878119424008#heading-26
- TODO: https://v2-pro.ant.design/docs/ui-test-cn  测试参考

# 部署

本地模拟, 进入根目录
```
npm run build
// 编译结束后

node server.js

// 浏览器中打开http://localhost:7001
```
线上其实也是这样，无非加一些进程守护工具当服务挂掉后自动重启;
# 五，TODO
1. 需要chrome插件 打通浏览器弹出消息
2. 打通手机日历 
  - 小米
  - 华为
  - 苹果
  - 降级的兜底方案是发送约会邮件

# 六，你可能会遇见的一些常见问题
1. localhost请求失败 --> 看看你的host 是否配置了 localhost， 需要配置
2. ssr中的getInitialProps没有执行， 查看你的页面是不是用react.memo包裹起来了，不可以包裹
3. [SSR] ReferenceError: window is not defined
> 1, Umi 3 默认移除了 DOM/BOM 浏览器 API 在 Node.js 的 polyfill，如果应用确实需要 polyfill 一些浏览器对象，可以使用 beforeRenderServer 运行时事件 API 进行扩展
> 2, 你可以使用dynamic异步加载组件的方式
4. seLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes
>1, https://reactjs.org/link/uselayouteffect-ssr 这里详细记录了产生的原因及解决方案
>2, antd中的某些组件会引起这个警告 https://github.com/react-component/overflow/issues/6
>3, 很多第三方组件 如果一个一个的解决比较麻烦 有一种比较暴力的方法： React.useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;








