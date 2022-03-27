function PalindromeNumber(num) {
    if (num < 10) {
      throw new Error('num must be more than one digit positive num');
      }
    for (let i = num; i < Infinity; i++) {
       if (i === parseInt(i.toString().split("").reverse().join(""))) {
         return i;
      }
   }
 }

console.log(PalindromeNumber(245));
