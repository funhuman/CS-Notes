## 前言

本笔记记录了配置开发环境（包括安装 nvm、Node.js、以及 Electron）和初始化项目的步骤。

通过这些步骤，创建了一个简单的 Electron 程序，展示了“Hello World!”的页面。

## 环境配置

### 安装nvm

访问 <https://github.com/coreybutler/nvm-windows/releases>，下载 `nvm-setup.exe`，并安装。

安装成功后，可以在CMD中输入命令：

```cmd
nvm -list
```


得到如下结果：

```
Running version 1.1.12.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm current                  : Display active version.
  nvm debug                    : Check the NVM4W process for known problems (troubleshooter).
  ...
```

### 确定Node.js和Electron的安装版本

通过 [Electron 发行版](https://www.electronjs.org/zh/docs/latest/tutorial/electron-timelines)页面，可以确定 Node.js 和 Electron 的安装版本。

当前的最新版本是 Node v20.18 对应 Electron 33.0.0。

### 安装Node.js

在CMD中输入命令：

```cmd
nvm install 20.18
```

在网络通畅的情况下得到结果：

```
Downloading node.js version 20.18.1 (64-bit)...
Extracting node and npm...
Complete
npm v10.8.2 installed successfully.


Installation complete. If you want to use this version, type

nvm use 20.18.1
```

<details>
<summary>
可能的问题和解决方案
</summary>
无法正常下载可以使用镜像，具体使用方法在网络上搜索 `nvm 镜像`。
</details><br>

然后，打开管理员权限的CMD，运行命令（其中 `20.18.1` 是 Node.js 的版本号）

```cmd
nvm use 20.18.1
```

正常情况下得到结果：

```
Now using node v20.18.1 (64-bit)
```

## 创建项目

### 新建项目

在电脑中合适的位置，创建一个文件夹，例如 `Electron Quick Start`。

打开 CMD，切换到刚刚创建的文件夹，输入下面命令。

```cmd
npm init -y
```

成功后文件夹内多了一个 package.json 文件。打开并按下面的修改（其中`--`是删去，`++`是增加）：

```json
{
  "name": "electron-quick-start",
  "version": "1.0.0",
--"main": "index.js",
++"main": "src/index.js",
  "scripts": {
--  "test": "echo \"Error: no test specified\" && exit 1"
++  "start": "electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

然后在文件夹（例如 `Electron Quick Start`）中新建 `src` 文件夹。

在 `Electron Quick Start/src` 中新建 `index.html` 文件，并写入下面内容。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

在 `Electron Quick Start/src` 中新建 `index.js` 文件，并写入下面内容。

```js
const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
```

### 注册npm镜像

打开 CMD，切换到刚刚创建的文件夹（例如 `Electron Quick Start`），输入下面命令。

```cmd
npm install -g cnpm --registry=https://registry.npmmirror.com
```

成功后结果如下。

```
added 1 package in 13s
```

### 引入Electron和运行

打开 CMD，切换到刚刚创建的文件夹（例如 `Electron Quick Start`），输入下面命令，安装并引入 Electron。

```cmd
cnpm install electron -S
```

继续运行下面命令。

```cmd
npm start
```

结果如下，同时看到有 `Hello World!` 的页面。

```
> electron-quick-start@1.0.0 start
> electron .
```
