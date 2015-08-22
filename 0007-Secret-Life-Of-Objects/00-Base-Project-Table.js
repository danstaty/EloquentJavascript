/*Первая часть программы вычисляет массивы минимальных ширин колонок и высот строк для матрицы ячеек.
    Переменная rows будет содержать массив массивов, где каждый внутренний массив – это строка ячеек.*/

function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}



//some change
