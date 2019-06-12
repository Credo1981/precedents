$(function(){

    $('#btnLoadReport').on("click", function() {
        LoadReport();
    });

    // раскомментировать эту строку если нужно чтобы отчёт загружался при загрузке страницы
    // LoadReport();

});

/**
 * Загружает отчёт ....
 */
function LoadReport() {
    $.getJSON("report.php", function(jsonData) {
        RenderReport(jsonData);
    }).fail(function(e) {
        alert("Ошибка загрузки: " + e.statusText + ', ' + e.responseText);
    })

}

/**
 * Рендрит отчёт ....
 */
function RenderReport(jsonData) {
    var reportTable = '<table width="100%" border="1">';
    reportTable += '<tr>';
    reportTable += '<th>Дата</th><th>Значение</th>';
    for(var i=0; i<jsonData.data.length; i++) {
        reportTable += '<tr>';
        reportTable += '<td>' + jsonData.data[i][0] + '</td>';
        reportTable += '<td>' + jsonData.data[i][1] + '</td>';
        reportTable += '</tr>';
    }
    reportTable += '</tr>';
    reportTable += '</table>';
    $('#report').html(reportTable);
}
