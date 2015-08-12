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













