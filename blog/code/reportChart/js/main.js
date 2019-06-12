$(function () {

    $('#btnLoadReport').on("click", function () {
        LoadReport();
    });

    // раскомментировать эту строку если нужно чтобы отчёт загружался при загрузке страницы
    // LoadReport();

});

/**
 * Загружает отчёт ....
 */
function LoadReport() {
    $.getJSON("report.php", function (jsonData) {
        RenderReport(jsonData);
    }).fail(function (e) {
        alert("Ошибка загрузки: " + e.statusText + ', ' + e.responseText);
    })

}

/**
 * Рендрит отчёт ....
 */
function RenderReport(jsonData) {
    var labels = [];
    var data = [];

    for (var i = 0; i < jsonData.data.length; i++) {
        labels.push(jsonData.data[i][0])
        data.push(jsonData.data[i][1])
    }

    var ctx = document.getElementById("reportChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'какой-то показатель',
                data: data
            }]
        }
    });
}