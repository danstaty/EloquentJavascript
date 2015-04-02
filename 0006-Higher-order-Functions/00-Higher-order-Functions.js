/**
 * Created by davey on 01.04.2015.
 */
//Version 1
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    var current = array[i];
    console.log(current);
}

//Verison 2
function logEach(array) {
    for (var i = 0; i < array.length; i++)
        console.log(array[i]);
}

//Version 3
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

forEach(["Тили", "Мили", "Трямдия"], console.log);
// → Тили
// → Мили
// → Трямдия

//Calculation sum numbers of array.
var numbers = [1, 2, 3, 4, 5], sum = 0;
rofHcae(numbers, function(number) {
    sum += number;
});
console.log(sum);
// → 15


//Conversion code from chapter 4 - "Final analysis"
//---> old version
function gatherCorrelations(journal) {
    var phis = {};
    for(var entry = 0; entry < journal.length; entry++){
        var events = journal[entry].events;
        for(var i = 0; i < events.length; i++){
            var event = events[i];
            if(!(event in phis))
            phis[event] = phi(tableFor(entry,journal));
        }
        return phis;
    }
}


//---> new version with array method forEach
function gatherCorrelations(journal) {
        var phis = {};
        journal.forEach(function(entry){
            entry.events.forEach(function(event){
                if(!(event in phis))
                phis[event] = phi(tableFor(entry,journal))
            })
        })
    return phis;
}


//Create new function
function greaterThan(n) {
    return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

//Function change another functions
function noisy(f) {
    return function(arg){
        console.log("calling with " + arg)
        var val = f(arg)
        console.log("called with " + arg + " - got " + val)
    };


}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false


//Create New Streams
function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even




//Work with JSON

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980


//Work with list ancestors
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);
// → 39


//Try to understand methods .call() and apply() - callbacks
function forCall(array, meFunction){
    for(var i = 0; i < array.length; i++)
        meFunction.call(this, array[i]);
};

forCall([1, 2, 3], function(data){
    console.log("Hello from a callback. Processing the value " + data);
});

/*Hello from a callback. Processing the value 1
Hello from a callback. Processing the value 2
Hello from a callback. Processing the value 3*/


//Filter Array
function filter(array, test) {
    var passed = [];
    for(var i = 0; i < array.length; i++){
        if(test(array[i]))
        passed.push(array[i])
    };
    return passed;
};

console.log(filter(ancestry, function(person) {
    return person.born > 1900 && person.born < 1925;
}));
// → [{name: "Philibert Haverbeke", …}, …]


//Standart Method .filter()
console.log(ancestry.filter(function(person){
   return person.father == "Carel Haverbeke";
}));


//Using hand-made map
function map(array, transform){
    var mapped = [];
    for(var i = 0; i < array.length; i++){
        mapped.push(transform(array[i]))
    };
    return mapped;
};

var overNinety = ancestry.filter(function(person){
    return person.died - person.born > 90;
})

console.log(map(overNinety, function(person){
    return person.name;
}))

// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]

//Using method .map()

var overNinety = ancestry.filter(function(person) {
    return person.died - person.born > 90;
})
console.log(overNinety.map(function(person){
    return person.name;
}));


//Used hand-made reduce

function reduce(array, combine, start) {
    var current = start;
    for(var i = 0; i < array.length; i++){
        current = combine(current, array[i])
    };
    return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b){
    return a + b;
}, 0))

//Using method .reduce()

console.log(ancestry.reduce(function(min, cur){
    if(min.born < cur.born) return min
    else return cur;
}))

// → {name: "Pauwels van Haverbeke", born: 1535, …}


//Composability
function average(array){
    function plus(a, b){return a + b;};
    return array.reduce(plus) / array.length;
};

function age(p){return p.died - p.born}
function male(p){return p.sex == "m";}
function female(p){return p.sex == "f";}

console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56


















