const checkPalindrome = (x) => {
  const strX = x.toString(); // convert to string
  const negatif = strX.includes("-"); // check number is negative or not

  const reverseStrX = strX.split("").reverse().join(""); // reverse numbers

  const explanation =
    negatif === true
      ? `From left to right, it reads ${strX}. From right to left, it becomes ${reverseStrX}. Therefore it is not a palindrome.`
      : strX === reverseStrX
      ? `${strX} reads as ${reverseStrX} from left to right and from right to left.`
      : `Reads ${reverseStrX} from right to left. Therefore it is not a palindrome.`;

  return `input : ${strX} \noutput : ${
    strX === reverseStrX
  }\nexplanation : ${explanation}\n`;
};

console.log(checkPalindrome(121));
console.log(checkPalindrome(-121));
console.log(checkPalindrome(10));
