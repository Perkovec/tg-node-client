const {Socket} = require('net');
const {randomBytes} = require('crypto');
const sha1 = require('sha1');

const api_id = 44026;
const api_hash = "e864dc7132da460ffdc67c1b7cf66e1e";

class MTProto {
  constructor(ip, port, auth_key = null, /*???*/ server_salt = null) {
    this.sock = new Socket();
    this.sock.connect(port, ip);
    this.number = 0;
    this.timedelta = 0;
    randomBytes(48, (err, buffer) => {
      this.session_id = buffer;
    });
    this.auth_key = auth_key;
    this.auth_key_id = this.auth_key ? sha1(this.auth_key).slice(-8) : null;
    this.sock.setTimeout(5);
    this.MAX_RETRY = 5;
    this.AUTH_MAX_RETRY = 5;
  }
}

module.exports = MTProto;