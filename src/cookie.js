var win = window
var doc = document

function setCookie (key, val, days, path = '/') {  // 设置cookie
  var exdate

  if (typeof days === 'object') {
    exdate = days
  } else {
    exdate = new Date()
    exdate.setDate(exdate.getDate() + days)
  }

  doc.cookie = key + '=' + escape(val) + ((days == null) ? '' : ';path=' + path + ';expires=' + exdate.toGMTString())
}

function getCookie (key) {  // 获取cookie
  if (doc.cookie.length > 0) {
    var start = doc.cookie.indexOf(key + '=')
    var end = -1

    if (start != -1) {
      start += key.length + 1
      end = doc.cookie.indexOf(';', start)

      if (end == -1) {
        end = doc.cookie.length
      }

      return unescape(doc.cookie.substring(start, end))
    }
  }

  return null
}

function delCookie (key, path) {
  var val = getCookie(key)

  setCookie(key, val, -1, path)
}

export default {
  setCookie, getCookie, delCookie
}