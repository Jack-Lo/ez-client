import { extend } from './helper'
import UA from './ua'
import Cookie from './cookie'

var client = {}

extend(client, UA)
extend(client, Cookie)

export default client