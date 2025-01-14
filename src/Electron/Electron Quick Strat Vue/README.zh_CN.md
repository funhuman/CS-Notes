## 前言

## 配置Vue

### 安装Vue脚手架

```cmd
cnpm install -g @vue/cli
```

成功的提示：

```
……
npm warn deprecated vue@2.7.16: Vue 2 has reached EOL and is no longer actively maintained. See https://v2.vuejs.org/eol/ for more details.

added 834 packages in 19s
```

### 创建项目

命令中 `electron_vue` 是项目名，可根据自己需要修改

```cmd
vue create electron_vue
```

### 配置

按`Enter`键选择默认配置（`Default ([Vue 3] babel, eslint)`），也可根据自己需要配置。

## 配置Electron

进入项目目录

```cmd
cd electron_vue
```

安装并调用vue-cli-plugin-electron-builder的生成器

```cmd
vue add electron-builder
```

选择Electron版本，就按默认选择13.0.0。

```
? Choose Electron Version (Use arrow keys)
  ^11.0.0
  ^12.0.0
> ^13.0.0
```

如果这一步有问题参考文末的解决方案。

## 启动项目

```cmd
npm run electron:serve
```

## Vue Router

```cmd
npm install vue-router@4
```

然后根据[教程](https://router.vuejs.org/zh/guide/)。

## TDesign

https://tdesign.tencent.com/mobile-vue/getting-started

```cmd
npm i tdesign-mobile-vue
```


## 问题和解决

### 安装electron-builder问题

安装electron-builder时遇到如下的错误：

```cmd
npm error HTTPError: Response code 404 (Not Found) for http://npm.taobao.org/mirrors/electron/v13.6.9/electron-v13.6.9-win32-x64.zip
```

使用命令

```cmd
npm config edit
```

将下面两行加入文件（任意位置）。

```
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
electron_mirror=https://npmmirror.com/mirrors/electron/
```

然后重新进行安装electron-builder流程。

### 启动项目时报错

启动项目时报错

```
ERROR in Conflict: Multiple assets emit different content to the same filename index.html
```

检查路径中是否有中文或空格。

## 参考资料

- [最简洁Vue+Electron项目搭建教程](https://zhuanlan.zhihu.com/p/335225253)
- [使用原生vue搭建electron常见报错](https://blog.csdn.net/zhang644720213/article/details/106789269)
- [三种方案解决ERROR in Conflict: Multiple assets emit different content to the same filename index.html 的问题](https://blog.csdn.net/m0_61415601/article/details/138758599)
