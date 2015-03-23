/**
 * Created by davey on 23.03.2015.
 */

//My first solution
var result = 0;
for(var i = 0; i < 100; i++){
    result += 1;
    if(result % 3 == 0){
        if(result % 5 == 0){
        console.log("FizzBuzz");
        };
        console.log("Fizz");
    }
    else if(result % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(result);
    };

};


//Book solution

for (var i = 1; i < 100; i++){
    var output = "";
    if(i % 3 == 0)
    output += "Fizz";
    if(i % 5 == 0)
    output += "Buzz";
    console.log(output || i);
}