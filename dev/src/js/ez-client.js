var win = window
var doc = document

function main () {
  var ua = navigator.userAgent
  var lang = (navigator.browserLanguage || navigator.language).toLowerCase()

  var client = {
    ua: ua,
    lang: lang,
    isIE: function () {  // IE内核
      return ua.indexOf('Trident') > -1
    },
    isOpera: function () {  // opera内核
      return ua.indexOf('Presto') > -1
    },
    isWebKit: function () {  // 苹果/谷歌内核
      return ua.indexOf('AppleWebKit') > -1
    },
    isFireFox: function () {  // 火狐内核
      return ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1
    },
    isMobile: function () {  // 移动终端
      return !!ua.match(/AppleWebKit.*Mobile.*/)
    },
    isIOS: function () {  // ios终端
      return !!ua.match(/\(i[^;]+;( U;)? CPUa.+Mac OS X/)
    },
    isAndroid: function () {  // android终端/uc浏览器
      return ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1
    },
    isIPhone: function () {  // iPhone/QQHD浏览器
      return ua.indexOf('iPhone') > -1
    },
    isIPad: function () {  // iPad
      return ua.indexOf('iPad') > -1
    },
    isWebApp: function () {  // web应该程序，没有头部与底部
      return ua.indexOf('Safari') == -1
    },
    isWeiBo: function () {  // 微博
      return !!ua.match(/Weibo/i)
    },
    isWeiXin: function () {  // 微信
      return !!ua.match(/MicroMessenger/i)
    },
    isUC: function () {  // uc
      return !!ua.match(/UCBrowser/i)
    },
    isQQ: function () {  // qq
      return !!ua.match(/QQBrowser/i)
    },
    isSafari: function () {  // safari
      return !!ua.match(/Safari/i)
    }
  }

  client.setCookie = function (key, val, days) {  // 设置cookie
    var exdate
    if (typeof days === 'object') {
      exdate = days
    } else {
      exdate = new Date()
      exdate.setDate(exdate.getDate() + days)
    }

    doc.cookie = key + '=' + escape(val) + ((days == null) ? '' : ';expires=' + exdate.toGMTString())
  }

  client.getCookie = function (key) {  // 获取cookie
    if (doc.cookie.length > 0) {
      var start = doc.cookie.indexOf(key + '=')
      if (start != -1) {
        start = start + key.length + 1
        var end = doc.cookie.indexOf(';', start)
        if (end == -1) end = doc.cookie.length
        return unescape(doc.cookie.substring(start, end))
      }
    }

    return null
  }

  client.delCookie = function (key) {
    var val = client.getCookie(key)
    client.setCookie(key, val, -1)
  }

  return client
}

module.exports = main()