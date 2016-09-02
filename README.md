# ez-client
一个简单的浏览器/webview判别以及常用方法的集。

客户端的各种ua以及各种判别方法的封装，涵盖uc、safari、qq、微信、微博等等，以及各种基于客户端的常用操作，比如cookie的读/写/删等等。

### install

```shell
npm install on-fire --save
```




### 用法

```javascript
var client = require('./ez-client')

console.log(client)

console.log('mobile: ' + client.isMobile())
console.log('weixin: ' + client.isWeiXin())

client.setCookie('ez-client_test_cookie', 123, 2)

var a = client.getCookie('ez-client_test_cookie')

console.log(a)
```




### api

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
﻿setCookie   | key, val, days |    string    |    添加/修改cookie
getCookie   | key            |    string    |    获取cookie
delCookie   | key            |       -      |    删除cookie




### info

client内置两个信息，可直接获取输出：

1. **ua** navigator.userAgent
2. **lang** navigator.language



### log

0.1.0 - publish

