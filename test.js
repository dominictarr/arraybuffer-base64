
var toBase64 = require('./')

var crypto = require('crypto')

var rand = crypto.randomBytes(32)

var assert = require('assert')

console.log(toBase64(rand))
assert.equal(toBase64(rand), rand.toString('base64'))
console.log('t ok')
require('electron').remote.getCurrentWindow().close()
