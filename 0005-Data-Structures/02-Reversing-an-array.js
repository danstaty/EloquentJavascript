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


var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]