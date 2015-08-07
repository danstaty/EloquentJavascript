/**
 * Created by davey on 26.03.2015.
 */

//
// Добавляем данные в журнал

var Journal = [];

function addEntry(events, didTurnIntoSquirrel){
    Journal.push(
        {
            event: events,
            squirrel: didTurnIntoSquirrel
        }
    );
};

//Описываем функцию получения корреляции

function phi(table){

    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));
};

console.log(phi([76, 9, 4, 1]));
// → 0.068599434


//Находим корреляцию для конкертного события

    function hasEvent(event, entry){
        return entry.events.indexOf(event) != -1;
    };


    function tableFor(event, journal) {
        var table = [0, 0, 0, 0];
        for(var i = 0; i < journal.length; i++){
            var entry = table[i], index = 0;
            if(hasEvent(event,entry)) index += 1;
            if(journal.squirrel) index += 2;
            table[index] += 1;
        };
        return table;
    };


console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

// Final analysis
function gatherCorrelations(journal) {
        var phis = {};
        for(var entry = 0; entry < journal.length; entry++){
            var events = journal[entry].events;
            for(i=0; i < events.length; i++){
                var event = events[i];
                if(!(event in phis))
                phis[event] = phi(tableFor(event,journal));
            };
        };
        return phis;
};

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);
// → 0.068599434



//Добавляем данные в журнал
var JOURNAL = []

function addEntry(event, didTurnIntoToSquirrel){
    JOURNAL.push({
        events: event,
        squirriel: didTurnIntoToSquirrel
    })
}


//Вычисляем корреляцию
function phi(table){
    return (table[0])
}


//Находим событие

function hasEvent(event, entry){
    return entry.events.indexOf(event) !=-1;
}

function tableFor(event, journal){
    var table = [0, 0, 0, 0]
    for(var i = 0; i < journal.length; i++){
        var entry = journal[i], index = 0;
        if(hasEvent(event, entry)) index +=1:
        if(entry.squirrel) index +=2;
        table[index] += 1;
    }
    return table;
}

//Итоговая корреляция

function gatherCorrelations(journal){
    var phis = {}
    for(var entry = 0; entry < journal.length; entry++){
        var events = journal[entry].events
            for(var i = 0; i < events.length; i++){
                if(!(events in phis))
                    phis[events] = phi(tableFor(event, journal))
            }
    }
    return phis
}

var correlations = gatherCorrelations(JOURNAL)
)
console.log(correlations.pizza)































