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





console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20