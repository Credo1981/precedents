$(function(){

    $('#btnLoadGame').on("click", function() {
        LoadGame();
    });

    // раскомментировать эту строку если нужно чтобы отчёт загружался при загрузке страницы
    // LoadReport();

});

/**
 * Загружает отчёт ....
 */
function LoadGame() {
    var ans;
    ans = prompt("К какому семейству относится шрифт \"Times New Roman\" ?");
    if (ans === "serif") {
        document.write("Молодец! Следующий вопрос.");
    }
    
    // else{
        
    //     document.write("Не верно. Вернитесь к вопросу ещё раз");
    //     LoadGame();
    // }
    

    alert("Второй вопрос! ");


}

/**
 * Рендрит отчёт ....

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
*/