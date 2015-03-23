/**
 * Created by davey on 23.03.2015.
 */


//My solution
var size = 8;
var output = "";

for(var i = 1; output.length <= size; i++){
    if(i % 2 == 0) {
        output += "#"
    }
    else{
        output += " ";
    };
};

for(var n = 1; n <= size; n++) {
    if(n % 2 == 0){
        console.log(output);
    }
    else{
        console.log(" " + output)
    };
};

//Book solution

var size = 8;
var board= "";

for(var x = 0; x < size; x++){
    for(var y = 0; y < size; y++){
         if((x+y) % 2 == 0)
         board += " ";
        else
         board +="#";
    };
    board += "\n";
};
    console.log(board);













