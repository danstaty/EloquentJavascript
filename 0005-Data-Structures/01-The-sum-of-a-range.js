/**
 * Created by davey on 30.03.2015.
 */
//first version without step
function range(start, fin) {
    var arrayMe = [];
    for(var i = start; i <= fin; i++){
        arrayMe.push(i);
    };
    return arrayMe;
};

function sum(array){
    var summer = 0;
    for(var i = 0; i < array.length; i++){
       summer = summer + array[i];
    };
    return summer;
};



console.log(sum(range(1, 10)));
// → 55



//Second version with step

function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];

    if (step > 0) {
        for (var i = start; i <= end; i += step)
            array.push(i);
    } else {
        for (var i = start; i >= end; i += step)
            array.push(i);
    }
    return array;
}

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]






//some test

function range(start, end){
    var someArray = []
    for(var i = start; i <= end; i++) {
        someArray.push(i)
    }
    return someArray
}

function sum(someArray){
    var arraySum = 0
    for(var t = 0; i < someArray.length; i++){
        arraySum += someArray[i]
    }
    return arraySum

}


console.log(sum(range(1, 10)));
// → 55

function range(start, end, step){
    var someArray = []
    if(step === null)
        step = 1
    if(end > start)
        for(var i = start; i <= end; i++) {
            someArray.push(i)
        }
    else
        for(var i = start; i >= end; i-- ){
            someArray.push(i)
        }

    return someArray
}

function sum(someArray){
    var arraySum = 0
    for(var t = 0; i < someArray.length; i++){
        arraySum += someArray[i]
    }
    return arraySum

}

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]






















