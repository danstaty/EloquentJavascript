/**
 * Created by davey on 23.03.2015.
 */

//Функция возводящая число в степень
var power = function(base, exponent){
    var result = 1;
    for(var i = 0; i < exponent; i++){
        result *= base;
    };
  return result
};
console.log(power(2, 10));



//Пример Closure. Перемножение двух чисел.
function multiplayer(factor){
    return function(number){
        return number * factor
    };
};
    var twice = multiplayer(5);
    console.log(twice(2));


//Рекурсия. Пример возведения числа в степень

function power(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8


//Решение загадки
function findSolution(target){
    function find(start, history){
        if(start == target)
        return history;
        else if(start > target)
        return null;
        else return find(start + 5, "(" + history + "+5)") ||
        find(start*3, "(" + history + "*3)");
    }
    return find(1, "1");
}

console.log(findSolution(24));


//Пример с фермой и животными
// Мое решение
function findSolution(quont, kind){
	var str = quont.toString();
  if(str.length == 3)
      return quont + kind;
  	else if(str.length == 2)
      return "0" + quont + kind;
  	else 
      return "00" + quont + kind;
}
console.log(findSolution(99, "cow"));

// Решение из книги
function zeroPad(number, width){
    var string = String(number);
    while(string.length < width)
    string = "0" + string;
    return string;
}

function printFarmInventory(cow, chiken, pig){
    console.log(zeroPad(cow, 3) + " Коров")
    console.log(zeroPad(chiken, 3) + " Куриц")
    console.log(zeroPad(pig, 3) + " Свиней")
}
printFarmInventory(7, 16, 3);



