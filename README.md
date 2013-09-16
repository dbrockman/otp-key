Generates a cryptographically strong pseudo-random key for two-factor
authentication. The key is a base32 encoded string containing 16
characters (10 bytes decoded).

The callback has the signature callback(err, key) where
key is the random string if err is null.

```
var genKey = require('otp-key');
genKey(function (err, key) {
  // key = 'JBSWY3DPEHPK3PXP'
});
```
