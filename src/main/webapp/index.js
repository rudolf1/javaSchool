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
        $table.append($("<tr><td>" + data[i].id + "</td><td>" + data[i].name + "</td></tr>"));
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


