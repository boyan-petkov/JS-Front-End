
function passwordValidator(password) {
  let condition1;
  let condition2;
  let condition3;
  let passwordValid = true;

  passwordLength(password);
  lettersAndDigits(password);
  function passwordLength(password) {
    if (password.length >= 6 && password.length <= 10) {
      condition1 = true;
    } else {
      condition1 = "Password must be between 6 and 10 characters";
      passwordValid = false;
    }
  }

  function lettersAndDigits(password) {
    for (let i = 0; i < password.length; i++) {
      let currentChar = password[i];
      
    }
  }
}

passwordValidator("b1oya1");
