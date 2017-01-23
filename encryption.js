// Credit to lollyrock.com for aes cipher code
var crypto = require("crypto"),
    algorithm = "aes-256-ctr";

const password = new Date().getTime().toString();

function encrypt (text) {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

function decrypt (text) {
  var decipher = crypto.createDecipher(algorithm, password)
  var dec = decipher.update(text,"hex", "utf8")
  dec += decipher.final("utf8");
  return dec;
}
