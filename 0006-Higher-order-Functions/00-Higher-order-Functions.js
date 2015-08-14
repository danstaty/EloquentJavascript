//try to rewrite gatherCorrelations

//first version with for(...)
function gatherCorrelations(journal) {
    var phis = {};
    for (var entry = 0; entry < journal.length; entry++) {
        var events = journal[entry].events;
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}

//second version with forEach


function gatherCorrelations(journal) {
    var phis = {}
    journal.forEach(function(entry){
        entry.events.forEach(function(event){
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        })
    })
    return phis
}


//function change another function
function noisy(f){
    /*Не нужно забывать о принципе наследования. Когда вложенная функция помнит все окружение и может использовать аргу
    * менты объявленные выше. Таким образом параметр f - принимает значение Boolean, а параметр arg принимает значение 0*/
    return function(arg){
             console.log("calling with " + arg)
        var val = f(arg)
        console.log("called with " + arg + "-got" + val)
        return val
    }
}

noisy(Boolean)(0);
/*Это выражение можно написать иначе
*var temp = noisy(Boolean);
 temp(0);
* */


// → calling with 0
// → called with 0 - got false

function unless(test, then) {
    if (!test) then()
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i)
}

repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even


//Чтение JSON

var ancestry = JSON.parse(ANCESTRY_FILE)
console.log(ancestry.length)

//Фильруем массив

    function filter(array, testt){
        var passed = []
        for(var i = 0; i < array.length; i++)
            if(testt(array[i]))
                passed.push(array[i])
        return passed
    }


console.log(filter(ancestry, function(person){
    person.born > 1900 && person.born < 1925;
}))
// → [{name: "Philibert Haverbeke", …}, …]


//используем стандартный метод массивов .filter

    console.log(ancestry.filter(function(person){
        return person.father == "Carel Haverbeke"
    }))

//Преобразование при помощи map

    function map(array, transform){
        var mapped = []
        for(var i = 0; i < array.length; i++)
            if(!transform(array[i])
                return mapped.push(array[i])
        return mapped
           }

var overNinety = ancestry.filter(function(person){
        return person.died - person.born > 90
})

console.log(map(overNinety, function(person){
        return person.name
}))

// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]

//используем стандартный метод map

var overNinety = ancestry.filter(function(person){
        return person.died - person.born > 90
})

console.log(overNinety.map(function(person){
        return person.name
}))

// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]


//суммирование с reduce

function reduce (array, combine, start){
    var current = start;
    for(var i = 0; i < array.length; i++)
        current = combine(current, array[i])
    return current
}

console.log(reduce([1, 2, 3, 4], function(a, b){
    return a + b,
        0
}))
// → 10

//стандартый метод reduce

console.log(ancestry.reduce(function(cur, min){
    if(cur.born < min.born)
        return cur
    else
        return min

}))

// → {name: "Pauwels van Haverbeke", born: 1535, …}


//определение среднего возраста мужчин и женщин

function average(array){
    function plus(a, b){return a + b}
    return array.reduce(plus) / array.length
}

function age(p){return p.died - p.born}
function male(p){return p.sex == "m"}
function female(p){return p.sex == "f"}

console.log(average(ancestry.filter(male).map(age)));
// → 61.67
console.log(average(ancestry.filter(female).map(age)));
// → 54.56


//Строим объект сопостовляющий имена и людей
var byName = []
ancestry.forEach(function(person){
    byName[name.person] = person
})


console.log(byName["Philibert Haverbeke"]);
// → {name: "Philibert Haverbeke", …}

//Подсчет ДНК

function reduceAncestors(person, f, defaultValue){
    function valueFor(person){
        if(person == null)
            return defaultValue;
        else
            return f(person, valueFor(person.mother), valueFor(person.father))
    }
    return valueFor
}

function sharedDNA(person, fromMother, fromFather){
    if(person.name == "Pauwels van Haverbeke")
        return 1;
    else
        return (fromFather + fromMother) / 2
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
// → 0.00049

// % > 70 years
function reduceAncestors(person, f, defaultValue){
    function valueFor(person){
        if(person == null)
            return defaultValue
        else
            return f(person, valueFor(person.mother), valueFor(person.father)
    }
        return valueFor
}

function countAncestor(person, test){
    function combine(person, fromMother, fromFather){
       var thisOneCounts = test(person)
        return fromFather + fromMother + (thisOneCounts ? 1 : 0)
    }
    return reduceAncestors(person, combine, 0)
}

function longLivingPercentage(person){
    var all = countAncesstor(person, function(person){
        return true
    })

    var longLiving = countAncesstor (person, function(person){
        return (person.died - person.born) >= 70
    })
}

console.log(longLivingPercentage(byName["Emile Haverbeke"]));
// → 0.145

//Связывание

var theSet = ["Carel Haverbeke", "Maria van Brussel",
    "Donald Duck"];
function isInSet(set, person) {
    return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
    return isInSet(theSet, person);
}));
// → [{name: "Maria van Brussel", …},
//    {name: "Carel Haverbeke", …}]
console.log(ancestry.filter(isInSet.bind(null, theSet)));
// → … same result





































