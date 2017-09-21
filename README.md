## 简介

一个简单的浏览器/webview判别以及常用方法的集。

客户端的各种ua以及各种判别方法的封装，涵盖uc、safari、qq、微信、微博等等，以及各种基于客户端的常用操作，比如cookie的读/写/删等等。


## Install

```shell
npm install ez-client --save
```


## 使用

```javascript
import client from 'ez-client'

var key = 'test_cookie'

console.log('mobile: ' + client.isMobile())
console.log('weixin: ' + client.isWeiXin())

client.setCookie(key, 123, 2)

console.log(client.getCookie(key))
```


## 功能

### UA

api | 入参 | 返回值 | 功能
--- | ---- | ------ | ----
isIE        |    -    |    Boolean    |    判别IE内核
isOpera     |    -    |    Boolean    |    判别opera内核
isWebKit    |    -    |    Boolean    |    判别苹果/谷歌内核
isFireFox   |    -    |    Boolean    |    判别火狐内核
isMobile    |    -    |    Boolean    |    判别移动终端
isIOS       |    -    |    Boolean    |    判别ios终端
isAndroid   |    -    |    Boolean    |    判别android终端/uc浏览器
isIPhone    |    -    |    Boolean    |    判别iPhone/QQHD浏览器
isIPad      |    -    |    Boolean    |    判别iPad
isWebApp    |    -    |    Boolean    |    判别web应该程序，没有头部与底部
isWeiBo     |    -    |    Boolean    |    判别微博
isWeiXin    |    -    |    Boolean    |    判别微信
isUC        |    -    |    Boolean    |    判别uc
isQQ        |    -    |    Boolean    |    判别qq
isSafari    |    -    |    Boolean    |    判别safari


### Cookie

api | 入参 | 返回值 | 功能
--- | ---- | ------ | ----
﻿setCookie   | key, val, days, [path] |    string    |    添加/修改cookie
getCookie   | key                    |    string    |    获取cookie
delCookie   | key, [path]            |       -      |    删除cookie


### Others

api | 入参 | 返回值 | 功能
--- | ---- | ------ | ----
$extend | obj | - | 用于对**client**进行扩展，注意对于原有的同名api，这是个覆盖操作


### Information

**client**内置两个信息，可直接调用输出：

- **ua**：navigator.userAgent
- **lang**：navigator.language

