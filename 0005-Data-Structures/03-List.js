/**
 * Created by davey on 31.03.2015.
 */

var list = {

    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }

};
//First Solution
function arrayToList(array){
    var list = null;
    for(var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
    return list;
};
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

//Second Solution
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
        array.push(node.value);
    return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

//Third Solution
function prepend(add, list){
    return {value: add, rest: list}
};

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//Fourth Solution
function nth(list, position){
    if(!list)
    return undefined;
    else if(position == 0)
    return list.value;
    else
    return nth(list.rest, n-1)
};
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20




// try task
var list = {
    value: value,
    rest: {
        value: value,
        rest: null
    }
}


function arrayToList(someArray) {
    var list = null
    for(var i = 0; i < someArray.length; i++ ){
        list = {value: someArray[i], rest: list}
    }
    return list

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}


function listToArray(someList){

}



console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]




console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
























