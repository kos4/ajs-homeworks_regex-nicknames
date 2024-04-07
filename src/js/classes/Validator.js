export default class Validator {
  constructor(value) {
    this.value = value;
  }

  validateUsername() {
    switch (this.value.length) {
      case 1:
        return /^[A-z]$/.test(this.value);
      case 2:
        return /^[A-z]{2}$/.test(this.value);
      default:
        if (/^[A-z]+[\w-]*[A-z]+$/.test(this.value)) {
          return !/\d{4}/.test(this.value);
        }
        return false;
    }
  }
}
