module.exports = function ToBase64(buf) {
  buf = new Uint8Array(buf)
  var s = ''
  for(var i = 0; i < buf.byteLength; i++)
    s+=String.fromCharCode(buf[i])
  return btoa(s)
}

