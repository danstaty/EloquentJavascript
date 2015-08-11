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
    for(var i = someArray.length - 1; i >= 0; i-- ){
        list = {value: someArray[i], rest: list}
    }
    return list

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}


function listToArray(someList){
    var newArray = []
    for(var node = someList; node; node = node.rest){
        newArray.push(node.value)
    }
    return newArray
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]


function prepend(x, y){
    return list = {value: x, rest: y}

}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, pos) {
        if(pos === 0)
            return list.value
        else
            return nth(list.rest, pos - 1)


        }

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20



function deepEqual(a, b) {
    if(a === b) return true

    if(a == null || typeof a != "object" ||
        b == null || typeof  b != "object")
        return false
    var propsInA = 0;
    var propsInB = 0;

    for(prop in a)
        propsInA += 1
    for(prop in b)
        propsInB += 1
        if(!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false
    return propsInA == propsInB

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


















