//Методы - свойства содержащие функции

var rabbit = {};
rabbit.speak = function(line){
    console.log("Кролик говорит " + line)
}

rabbit.speak("Я живой")
// → Кролик говорит 'Я живой.'

function speak(line){ //метод мы можем описать отдельно, а затем присвоить его свойству
    console.log("A" + this.type + "кролик говорит" + line) /*словечко this ссылается на тот объект в контексте которого
    будет вызван данный метод*/
}

var whiteRabbit = {type: "белый", speak: speak} //свойству speak присваиваем метод speak
var fatRabbit = {type: "толстый", speak: speak}

whiteRabbit.speak("Ушки мои и усики, " +  "я же наверняка опаздываю!");
// → А белый кролик говорит ' Ушки мои и усики, я же наверняка опаздываю!'
fatRabbit.speak("Мне бы сейчас морковочки.");
// → А толстый кролик говорит ' Мне бы сейчас морковочки.'


//Call and Apply

speak.apply(fatRabbit, ["Отрыжка!"]); // apple вызывает функцию методом которой является, принимает в качестве второго
// аргумента массив
// → А толстый кролик говорит ' Отрыжка!'
speak.call({type: "старый"}, " О, господи."); /*call вызывает функцию методом которой является, а аргументы принимает
как обычно, не в виде массивов*/
// → А старый кролик говорит 'О, господи.'


//Прототипирование

var empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]






var protoRabbit = {
    speak : function(line){
        console.log(А + this.type + кролик + line + Хрясь)
    }
}

var killerRabbit = Object.create(protoRabbit)

killerRabbit.type = "убийственный";
killerRabbit.speak("ХРЯЯЯСЬ!");
// → А убийственный кролик говорит ' ХРЯЯЯСЬ!'



//Конструкторы
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("убийственный");
var blackRabbit = new Rabbit("чёрный");
console.log(blackRabbit.type);
// → чёрный



Rabbit.prototype.speak = function(line) { /* запись типа rabbit.prototype.speak говорит, что, я хочу чтобы при создани
экземпляра Rabbit ему передавалась эта функция*/
    console.log("А " + this.type + " кролик говорит '" +   line + "'");
};

blackRabbit.speak("Всем капец...");
// → А чёрный кролик говорит ' Всем капец...'


//Перезагрузка унаследованных свойств
Rabbit.prototype.teeth = "мелкие"
console.log(killerRabbit.teeth);
// → мелкие
killerRabbit.teeth = "длинные, острые и окровавленные ";
console.log(killerRabbit.teeth);
// → длинные, острые и окровавленные
console.log(blackRabbit.teeth);
// → мелкие
console.log(Rabbit.prototype.teeth);
// → мелкие




//Если нашим кролика потребуется танец

Rabbit.prototype.dance = function() {
    console.log("А " + this.type + " кролик танцует джигу.");
};
killerRabbit.dance();
// → А убийственный кролик танцует джигу.


//Если нам нужен свежий объект без прототипа, мы в Object.create(null) передаем параметр null
var map = Object.create(null);
map["пицца"] = 0.069;
console.log("toString" in map);
// → false
console.log("пицца" in map);
// → true



var rabbit = {}

rabbit.speak = function(line){
    console.log("Я живой" + line)
}

rabbit.speak("Я живой.");
// → Кролик говорит 'Я живой.'
































