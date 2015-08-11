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































