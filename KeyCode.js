//object to hold key code and key maps
var keyCodeAndMaps = {
  37 : "{left}",
  38 : "{up}",
  40 : "{right}",
  41 : "{down}"
}

function KeyCode() {}

KeyCode.getKeyMap = function (keyCode) {
  let code = ""
  code = keyCodeAndMaps[keyCode] || code
  return code
}

module.exports = {
  KeyCode
}