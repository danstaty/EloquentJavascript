/**
 * Created by davey on 31.03.2015.
 */
//First version
function reverseArray(array){
    var newArray = [];
    for(var i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    };
    return newArray;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

//Second version
function reverseArrayInPlace(array) {
    for(var i = 0; i < Math.floor(array.length/2); i++){
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
    };
        return array;
};

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//try to task
function reverseArray(someArray){
    var newArray = []
    for(var i = someArray.length - 1; i >= 0; i--){
        newArray.push(someArray[i])
    }
    return newArray
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


function reverseArrayInPlace(someArray){
    for(var i = 0; i < Math.floor(someArray.length/2); i++){
        var old = someArray[i]
        someArray[i] = someArray[someArray.length - 1 -i]
        someArray[someArray.length - 1 -i] = old
    }
        return someArray
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]



//Test

function reverseArray(someArray){
    var newArray = []
    for(var i = someArray.length - 1; i > 0; i--){
        newArray.push(someArray.pop(i))
    }
    return newArray
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];



function reverseArrayInPlace(someArray){
    for(var i = someArray.length - 1; i > Math.floor(someArray.length/2); i--) {
        var old = someArray[i]
        someArray[i] = someArray.length - 1 - i;
        someArray.length - 1 - i = old
    }
    return someArray
}


var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]





















