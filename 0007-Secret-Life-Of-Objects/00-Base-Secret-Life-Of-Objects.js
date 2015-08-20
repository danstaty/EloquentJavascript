//Методы - свойства содержащие функции

var rabbit = {};
rabbit.speak = function(line){
    console.log("Кролик говорит " + line)
}

rabbit.speak("Я живой")
// → Кролик говорит 'Я живой.'

function speak(line){
    console.log("A" + this.type + "кролик говорит" + line)
}

var whiteRabbit = {type: "белый", speak: speak}
var fatRabbit = {type: "толстый", speak: speak}

whiteRabbit.speak("Ушки мои и усики, " +  "я же наверняка опаздываю!");
// → А белый кролик говорит ' Ушки мои и усики, я же наверняка опаздываю!'
fatRabbit.speak("Мне бы сейчас морковочки.");
// → А толстый кролик говорит ' Мне бы сейчас морковочки.'


//Call and Apply

speak.apply(fatRabbit, ["Отрыжка"])
// → А толстый кролик говорит ' Отрыжка!'
speak.call({type: "старый"}, "О, Господи")
// → А старый кролик говорит 'О, господи.'

//Прототипирование

var protoRabbit = {
    speak: function(line) {
        console.log("А " + this.type + " кролик говорит '" +  line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "убийственный";
killerRabbit.speak("ХРЯЯЯСЬ!");
// → А убийственный кролик говорит ' ХРЯЯЯСЬ!'

//Конструкторы
function Rabbit(type){
    this.type = type
}

var blackRabbit = new Rabbit("черный")

console.log(blackRabbit.type);
// → чёрный

Rabbit.prototype.speak = function(line) { /* запись типа rabbit.prototype.speak говорит, что, я хочу чтобы при создани
экземпляра Rabbit ему передавалась эта функция*/
    console.log("А " + this.type + " кролик говорит '" +   line + "'");
};

blackRabbit.speak("Всем капец...");
// → А чёрный кролик говорит ' Всем капец...'























