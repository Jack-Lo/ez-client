function extend(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }

  return a;
}

var ua = navigator.userAgent;
var lang = (navigator.browserLanguage || navigator.language).toLowerCase();

function isIE() {
  // IE内核
  return ua.indexOf('Trident') > -1;
}

function isOpera() {
  // opera内核
  return ua.indexOf('Presto') > -1;
}

function isWebKit() {
  // 苹果/谷歌内核
  return ua.indexOf('AppleWebKit') > -1;
}

function isFireFox() {
  // 火狐内核
  return ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1;
}

function isMobile() {
  // 移动终端
  return !!ua.match(/AppleWebKit.*Mobile.*/);
}

function isIOS() {
  // ios终端
  return !!ua.match(/\(i[^;]+;( U;)? CPUa.+Mac OS X/);
}

function isAndroid() {
  // android终端/uc浏览器
  return ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1;
}

function isIPhone() {
  // iPhone/QQHD浏览器
  return ua.indexOf('iPhone') > -1;
}

function isIPad() {
  // iPad
  return ua.indexOf('iPad') > -1;
}

function isWebApp() {
  // web应该程序，没有头部与底部
  return ua.indexOf('Safari') == -1;
}

function isWeiBo() {
  // 微博
  return !!ua.match(/Weibo/i);
}

function isWeiXin() {
  // 微信
  return !!ua.match(/MicroMessenger/i);
}

function isUC() {
  // uc
  return !!ua.match(/UCBrowser/i);
}

function isQQ() {
  // qq
  return !!ua.match(/QQBrowser/i);
}

function isSafari() {
  // safari
  return !!ua.match(/Safari/i);
}

var UA = {
  ua, lang,
  isIE,
  isOpera,
  isWebKit,
  isFireFox,
  isMobile,
  isIOS,
  isAndroid,
  isIPhone,
  isIPad,
  isWebApp,
  isWeiBo,
  isWeiXin,
  isUC,
  isQQ,
  isSafari
};

var doc = document;

function setCookie(key, val, days, path = '/') {
  // 设置cookie
  var exdate;

  if (typeof days === 'object') {
    exdate = days;
  } else {
    exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
  }

  doc.cookie = key + '=' + escape(val) + (days == null ? '' : ';path=' + path + ';expires=' + exdate.toGMTString());
}

function getCookie(key) {
  // 获取cookie
  if (doc.cookie.length > 0) {
    var start = doc.cookie.indexOf(key + '=');
    var end = -1;

    if (start != -1) {
      start += key.length + 1;
      end = doc.cookie.indexOf(';', start);

      if (end == -1) {
        end = doc.cookie.length;
      }

      return unescape(doc.cookie.substring(start, end));
    }
  }

  return null;
}

function delCookie(key, path) {
  var val = getCookie(key);

  setCookie(key, val, -1, path);
}

var Cookie = {
  setCookie, getCookie, delCookie
};

var client = {
  $extend(obj) {
    extend(client, obj);
  }
};

client.$extend(UA);
client.$extend(Cookie);

export default client;
//# sourceMappingURL=index.esm.js.map
