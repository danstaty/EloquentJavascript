// My solution
function isEven(num){
  while(num > 1)
  num -= 2;
  if(num == 1)
  return false;
  else if(num == 0)
  return true;
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
