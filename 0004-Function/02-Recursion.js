// My solution
function isEven(num){
  while(num > 1)
  num -= 2;
  if(num == 1)
  return false;
  else if(num == 0)
  return true;
  else if(num < 0)
  return isEven(-num);
  };

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Book Solution
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
