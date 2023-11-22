export function login(str: string): string {  
    if (str.length < 3 || str.length > 20) {
      return 'Length between 3 and 20 characters long.';
    }
    if (!/^[a-zA-Z]/.test(str)) {
      return 'String must start with a Latin letter.';
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(str)) {
      return 'Allowed Latin letters, digits, hyphens and underscores.';
    }
    if (/^\d+$/.test(str)) {
      return 'String cannot consist only of digits.';
    }
    return '';
  }

  export function empty(str: string): string {
    if (str.length === 0) {
        return 'Type something before sending';
    }
    return '';
  }

  export function password(str: string): string {
    const regexLength = /^.{8,40}$/;
    const regexUppercase = /[A-Z]/;
    const regexNumber = /\d/;
    if (!regexLength.test(str)) {
      return 'String must be between 8 and 40 characters long.';
    }
    if (!regexUppercase.test(str)) {
      return 'String must contain at least one uppercase letter.';
    }
    if (!regexNumber.test(str)) {
      return 'String must contain at least one number.';
    }
    return '';
  }

  export function names(str: string): string {
    const regexFirstLetter = /^[A-ZА-ЯЁ][a-zа-яё]*$/;
    const regexNoNumbers = /^[^\d\s]+$/;
    const regexNoSpecialChars = /^[a-zA-ZА-ЯЁа-яё\-]*$/; // eslint-disable-line
    if (!regexFirstLetter.test(str)) {
      return 'Should with a capital letter and contain only letters.';
    }
    if (!regexNoNumbers.test(str)) {
      return 'Not allowed any numbers or spaces.';
    }
    if (!regexNoSpecialChars.test(str)) {
      return 'Not allowed any special characters except for hyphens.';
    }
    return '';
  }

  export function email(str: string): string {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(str)) {
      return 'Not valid email';
    }
    return '';
  }

  export function phone(str: string): string {
    const regexPhone = /^\+?\d{10,15}$/;
    if (!regexPhone.test(str)) {
      return 'Should contain between 10 and 15 digits';
    }
    return '';
  }
  