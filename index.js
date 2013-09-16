var randomBytes = require('crypto').randomBytes;
var toBase32 = require('thirty-two').encode;

module.exports = function (cb) {
  randomBytes(10, function (err, buf) {
    if (err) {
      cb(err);
    } else {
      cb(null, toBase32(buf.toString('binary')));
    }
  });
};
