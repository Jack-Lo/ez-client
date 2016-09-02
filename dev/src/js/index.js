require('../sass/index')
var client = require('./ez-client')

client.setCookie('ez-client_test_cookie', 123, 2)

var a = client.getCookie('ez-client_test_cookie')

console.log(a)

client.delCookie('ez-client_test_cookie')

var b = client.getCookie('ez-client_test_cookie')

console.log(b)

client.isTest = function () {
  return true
}

console.log('mobile: ' + client.isMobile())
console.log('weixin: ' + client.isWeiXin())

console.log(client.isTest())

console.log(client)
