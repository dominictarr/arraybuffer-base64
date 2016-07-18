# arraybuffer-base64

Convert an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) to [base64](https://en.wikipedia.org/wiki/Base64)

## example

``` js
var toBase64 = require('arraybuffer-base64')

console.log(toBase64(window.crypto.getRandomValues(new Uint8Array(32))))
```

This only works in the browser, and converts works by converting to a binary string and
then using the `btoa` function, but it's the minimum code for a base64 conversion.

## License

MIT
