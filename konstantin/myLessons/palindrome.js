// моя первая версия
function isPalindrome(text) {
  text = text.toLowerCase();
  let reversedText = "";
  for (let i = text.length; i > 0; i--) {
    reversedText += text.charAt(i - 1);
  }
  return text === reversedText;
}

console.log(isPalindrome("KaZAk"));

// улучшенный вариант (но по хорошему еще надо сделат replace() с regexp после toLowerCase() чтобы палиндром был полноценный)
function isPalindromeExtra(text) {
  text = text.toLowerCase();
  return text === [...text].reverse().join("");
}

console.log(isPalindromeExtra("kazzaak"));
