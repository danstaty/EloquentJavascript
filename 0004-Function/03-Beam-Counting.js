// My solution
function countBs(name){
  var count = 0;
  for(i=0; i<name.length; i++)
  if(name.charAt(i) === "B")
  count += 1;
  return count;
};

function countChar(name, char){
    var count = 0;
  for(i=0; i<name.length; i++)
  if(name.charAt(i) === char)
  count += 1;
  return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
