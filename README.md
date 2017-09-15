## 简介

一个基于[rollup](http://rollupjs.org)的开发脚手架，帮助快速构建JavaScript工程。你可以用它来**开发一个基于JavaScript的插件/库/框架**，运行于浏览器环境或者nodejs环境。  

> rollup.js: the next-generation JavaScript module bundler.

rollup是下一代JavaScript打包工具，能够高效地将你的es2015应用打包为各种主流格式的单一文件。比起大而全的webpack，rollup更专注于JavaScript，因而运行起来十分的轻量快捷，适合一些纯JavaScript的项目开发。  

当然，虽然说rollup专注于JavaScript，但是因为各种强大的插件存在，rollup同样也具备打包其他类型模块的能力，如css、vue等等。  

## 功能

考虑到开发JavaScript工程时所需要的各种功能，本工具提供：

1. 打包方式涵盖`amd`/`commonjs`/`umd`/`iife`/`es`，兼容webpack；
2. [babel](http://babeljs.io)实时编译，随时随地**ES2015 and beyond**；
3. 集成[browser-sync](http://browsersync.io)，强大的web调试功能；
3. 集成[mocha](http://mochajs.org)测试框架。

## 命令

+ `npm run serve`：启动http服务。
  - 默认使用`3000`端口，打开[localhost:3000](http://localhost:3000)
  - 服务器根目录为`/server`和`/dist`，并实时监听变化
  - 配置文件为`/bs-config.js`
- `npm run clear`： 删除`/dist`目录。
+ `npm run dev`：开发模式。
  - 默认一次性打包`umd`、`cjs`和`es`三种模式
  - 监听`/src`目录文件变化，动态实时打包到`/dist`目录下
+ `npm run build`：生产模式。
  - 默认一次性打包`umd`、`cjs`和`es`三种模式
  - 打包目录为`/dist`
- `npm run dev:umd`: 同`dev`，只打包`umd`格式。
- `npm run dev:cjs`: 同`dev`，只打包`commonjs`格式。
- `npm run dev:es`: 同`dev`，只打包`es module`格式。
- `npm run build:umd`: 同`build`，只打包`umd`格式。
- `npm run build:cjs`: 同`build`，只打包`commonjs`格式。
- `npm run build:es`: 同`build`，只打包`es module`格式。
+ `npm test`： 执行测试用例。
  - 基于mocha框架
  - 测试用例存放在`/test`目录下
+ `npm run test:watch`： 同`test`，实时执行测试用例。

