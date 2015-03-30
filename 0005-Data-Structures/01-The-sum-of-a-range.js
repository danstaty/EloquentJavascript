/**
 * Created by davey on 30.03.2015.
 */
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


console.log(range(5, 2, -1));
// → [5, 4, 3, 2]