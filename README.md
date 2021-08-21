# 基于umi3开发的日程管理系统
> 包括新建日程 日程列表， 打通微信， 定时推送日程

# 开发说明
1. clone 项目
2. cd daymanage
3. npm i
4. npm start

## 注意事项
1. css变量在src/global.css中定义 后续在全局中使用； 如果考虑css变量兼容问题，则可以在.umirc.ts中define定义变量。umi会在编译时自动将所有变量替换



# 服务端渲染
https://umijs.org/zh-CN/docs/ssr

## 服务端地址


# 单测
- https://github.com/umijs/umi/issues/446
- 如果你以前没有过单测经验或者对单测了解较少 推荐你阅读下面这便文章：
https://juejin.cn/post/6844903798406643725
https://juejin.cn/post/6844903878119424008#heading-26


# TODO
1. 需要chrome插件 打通浏览器弹出消息
2. 打通手机日历 
  - 小米
  - 华为
  - 苹果
  - 降级的兜底方案是发送约会邮件






