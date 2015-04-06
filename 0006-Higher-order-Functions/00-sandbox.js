/**
 * Created by davey on 06.04.2015.
 */

var ancestry = JSON.parse(ANCESTRY_FILE);

//Continued work on ancestry.js. Find steps to DNA
var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});
console.log(byName["Philibert Haverbeke"]);
// → {name: "Philibert Haverbeke", …}


//Create tree of ancestors
function reduceAncestors(person, f, defaultValue) {
    function valueFor(person) {
        if (person == null)
            return defaultValue;
        else
            return f(person, valueFor(byName[person.mother]),
                valueFor(byName[person.father]));
    }
    return valueFor(person);
}

//Calculate DNA
function sharedDNA(person, fromMother, fromFather) {
    if (person.name == "Pauwels van Haverbeke")
        return 1;
    else
        return (fromMother + fromFather) / 2;
}
var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
// → 0.00049