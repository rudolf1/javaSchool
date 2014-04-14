function fetchList() {
    $.ajax({
        type: "GET",
        url: "api/resource/getList",
        success: success,
        processData: false
    });
}

function success(data) {
    var $table = $("<table><tr><th>ID</th><th>Name</th></tr></table>");
    for (var i in data) {
        var $tr = $("<tr />");
        var $td1 = $('<td class="idColumn"/>').text(data[i].id);
        var $td2 = $('<td />').text(data[i].name);
        $tr.append($td1);
        $tr.append($td2);
        $table.append($tr);
    }
    $("#tableContainer").html($table);
}

function fail(data) {
    alert('Server error');
}

$(document).ready(function () {

    $('#refreshList').click(fetchList);
    fetchList();
});


