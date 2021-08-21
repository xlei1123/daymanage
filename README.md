# 一，基于umi3开发的日程管理系统
> 包括新建日程 日程列表， 打通微信， 定时推送日程
**喜欢的帮忙点个star**


# 二，开发说明
1. clone 项目
2. cd daymanage
3. npm i
4. npm start

## 目录
```
.
├── README.md
├── dist // 打包后输出文件目录
├── jest.config.js // 单元测试配置
├── mock // mock数据文件
├── package.json
├── public // 静态文件目录
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






