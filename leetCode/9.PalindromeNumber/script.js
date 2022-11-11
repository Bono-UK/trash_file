const input1 = 1221;
const input2 = -121;
const input3 = 10;

const isPalindromNumber = function(x) {
  if (x < 0) return false;
  if (x % 10 === 0)  return false;
  if (x < 10) return true;

  let rev = 0;
 
  while (x > rev) {
    console.log(x,rev);
    rev *= 10;
    rev += x % 10;
    x = Math.trunc(x/10)
    
  }
  console.log(x,rev);
  return x === rev || x=== Mach.trunc(rev/10)
};

console.log(isPalindromNumber(input1));
console.log(isPalindromNumber(input2));
console.log(isPalindromNumber(input3));








//
