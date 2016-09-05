const fs = require('fs');

const api_id = 44026;
const api_hash = "e864dc7132da460ffdc67c1b7cf66e1e";

class MTProto {
  constructor(authkeyfile) {
    try {
      fs.accessSync(authkeyfile, fs.F_OK);
    // Do something
    } catch (e) {
    // It isn't accessible
    }
  }
}

module.exports = MTProto;