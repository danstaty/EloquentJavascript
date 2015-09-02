
function drawTable(rows){


}

function TextCell(text){
    this.text = text.split("\n")
}

function UnderlineCell(inner){
    this.inner = inner;
}


function dataTable(data){
    var keys = Object.keys(data[0]) //keys = ["name", "height", "country"]
    var headers = keys.map(function(name){
        return new UnderlineCell (new TextCell(name))
    })
    var body = data.map(function(row){
        return keys.map(function(name){
            return new TextCell(String(row[name]))
        })
    })
    return [headers].concat(body)
}


var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
    module.exports = MOUNTAINS;

console.log(drawTable(dataTable(MOUNTAINS)))









