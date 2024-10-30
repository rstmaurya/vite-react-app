export function useCaptcha() {
  //used in Login.jsx..........

  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";
  var capLength = 6;
  var captcha = "";
  for (var i = 0; i < capLength; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    captcha += chars.charAt(randomIndex);
  }
  return captcha;
}
