/*  
    Проверить являются ли нормера телефонов российскими
*/

//верные

const num1 = "89297253364";
const num2 = "+79297253364";
const num3 = "+7(929)7253364";
const num4 = "+7(929) 725-33-64";
const num5 = "+7(929) 725-33-64    ";

//неверные

const wrongNum1 = "892972533";
const wrongNum2 = "+7d910d323-53-56";
const wrongNum3 = "9+9297253364";
const wrongNum4 = "89293g35356";

//===============================//

// Мое решение
function phoneValidator(phoneNumber) {
  const initialPhone = phoneNumber.startsWith("+")
    ? phoneNumber.slice(1, phoneNumber.length)
    : phoneNumber;
  let phone = "";
  for (const ph of initialPhone) {
    if (ph !== "(" && ph !== ")" && ph !== " " && ph !== "-") {
      phone += ph;
    }
  }
  const isNumber = !isNaN(phone);
  const isValidMask =
    !phone.startsWith("8") || !phone.startsWith("7") ? true : false;
  if (isNumber && isValidMask && phone.length === 11) {
    console.log(`${phone} прошел валидацию!`);
    return `${phone} прошел валидацию!`;
  } else {
    console.log(phone);
    return phone;
  }
}

// phoneValidator(num1);
// phoneValidator(num2);
// phoneValidator(num3);
// phoneValidator(num4);
// phoneValidator(num5);
// phoneValidator(wrongNum1);
// phoneValidator(wrongNum2);
// phoneValidator(wrongNum3);
// phoneValidator(wrongNum4);

/**
 * Решение преподавателя
 */

function isPhoneNumber(number) {
  number = number.trim();
  number = number.replace("+7", "8");
  if (!number.startsWith("8")) {
    return false;
  }
  number = number.replaceAll("(", "");
  number = number.replaceAll(")", "");
  number = number.replaceAll(" ", "");
  number = number.replaceAll("-", "");
  if (number.length !== 11) {
    return false;
  }
  let onlyNumbers = true;
  for (const char of number) {
    if (isNaN(Number(char))) {
      onlyNumbers = false;
      break;
    }
  }
  return onlyNumbers;
}

//все выведутся как true
console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));

//все выведутся как false
console.log(isPhoneNumber(wrongNum1));
console.log(isPhoneNumber(wrongNum2));
console.log(isPhoneNumber(wrongNum3));
console.log(isPhoneNumber(wrongNum4));
