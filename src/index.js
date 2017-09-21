import { extend } from './helper'
import UA from './ua'
import Cookie from './cookie'

var client = {
  $extend (obj) {
    extend(client, obj)
  }
}

client.$extend(UA)
client.$extend(Cookie)

export default client