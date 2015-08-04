// 2^10
var numberResult = 2;
var numberCounter = 0;

while(numberCounter < 10){
    numberResult *= 2;
    numberCounter += 1;
}
console.log(numberResult);


//What is your name/

do{
    var name = prompt("What is your name?")
}
while(!name);
console.log(name);

//0 to 12 use for

for(var number = 0; number <= 12; number +=2){
    console.log(number);
};


//2^10 use for
var number = 1;
for(var count = 0; count < 10; count++){
    number *= 2
}
console.log(number);


//try to find number more then 20 and what we can devide on 7 without residue
for (var current = 20; ; current++) {
    if (current % 7 == 0)
        break;
}
console.log(current);



































