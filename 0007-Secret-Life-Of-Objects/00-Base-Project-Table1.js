/*Первая часть программы вычисляет массивы минимальных ширин колонок и высот строк для матрицы ячеек.
 Переменная rows будет содержать массив массивов, где каждый внутренний массив – это строка ячеек.*/


function rowHeights(rows) { //функция определяет высоту строк
        return rows.map(function(row) {
            return row.reduce(function(max, cell) { /*reduce функция сворачивания, проходится поочердно по каждому элементу
             массива*/
                return Math.max(max, cell.minHeight()); //возвращаем наибольшее из двух сравниваемых значений
            }, 0); // в самой первой итарации начальное значение 0
        });
    }

function colWidths(rows) { //функция определяет ширину колонок
        return rows[0].map(function(_, i) { // _ означает что этот аргумент не будет использоваться
            return rows.reduce(function(max, row) {
                return Math.max(max, row[i].minWidth()); //вызов свойству minWidth
            }, 0);
        });
}


//Код для вывода таблицы
function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo); //создает промежуток в один пробел между столбцами таблицы
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
    /*
    Простой пример, чтобы понять "return rows.map(drawRow).join("\n")"

    var arr = ['a', 'b', 'c'];

     function printArray(value, index) {
     console.log(index + ' ' + value);
     }

     arr.map(printArray);
     // prints
     // 0 a
     // 1 b
     // 2 c
     */
}

//Конструктор для ячеек

function repeat(string, times) { /*Используется вспомогательная функция repeat, которая строит строчку с заданным
значением, повторённым заданное количество раз. Метод draw использует её для создания отступов в строках, чтобы они
все были необходимой длины.*/
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) { //конструктор для ячеек содержащих текст - представляет собой интерфейс для ячеек
    this.text = text.split("\n"); //разбивает строчку в массив строк при помощи метода split, который режет строчку
//    каждый раз, когда встречает свой аргумент
}
TextCell.prototype.minWidth = function() { //находит максимальную ширину линии в массиве
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};


//Опыт с шахматной доской

/* var rows = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
        if ((j + i) % 2 == 0)
            row.push(new TextCell("##"));
        else
            row.push(new TextCell("  "));
    }
    rows.push(row);
}
console.log(drawTable(rows)); */

// → ##    ##    ##
//      ##    ##
//   ##    ##    ##
//      ##    ##
//   ##    ##    ##

//Выделяем верхнюю строку содержащую нзвания столбцов, задав тип ячеек, которые этим занимаются

function UnderlinedCell(inner) {
    this.inner = inner;
};
UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)]);
};


//Главная функция стоящая сетку ячеек

function dataTable(data) {
    var keys = Object.keys(data[0]); /*стандартная функция Object.keys возвращает массив имен свойств объекта. Работает
    по образцу for...in В нашем случае он вернет массив типа [name, height, country]. data[0] - означает, что мы ра-
    ботаем только с первым объектом в массиве. Иначе, результат был бы [0,1,2,3,4,5,6]*/
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body); /* headers в [] потому что мы говорим, что хотим объединить массивы headers и body
    в новый массив headers */
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

console.log(drawTable(dataTable(MOUNTAINS)));
// → name         height country
//   ------------ ------ -------------
//   Kilimanjaro  5895   Tanzania
//   … и так далее











