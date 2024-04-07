export default class Validator {
  static validateUsername(nickname) {
    switch (nickname.length) {
      case 1:
        return /^[A-z]$/.test(nickname);
      case 2:
        return /^[A-z]{2}$/.test(nickname);
      default:
        if (/^[A-z]+[\w-]*[A-z]+$/.test(nickname)) {
          return !/\d{4}/.test(nickname);
        }
        return false;
    }
  }
}
