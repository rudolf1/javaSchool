function fetchList() {
    $.ajax({
        type: "GET",
        url: "api/resource/getList",
        success: success,
        processData: false
    });
}

function success(data) {
    var $table = $("<table><tr><th>ID</th><th>Name</th><th></th></tr></table>");
    for (var i in data) {
        $table.append($("<tr><td>" + data[i].id + "</td><td>" + data[i].name + "</td><td><a href='#' itemId='" + data[i].id + "'>Delete</a></td></tr>"));
    }
    $("#tableContainer").html($table);
}

function fail(data) {
    alert('Server error');
}

$(document).ready(function () {

    $('#refreshList').click(fetchList);
    fetchList();
    $("#tableContainer").on('click', 'a', function () {
        var id = $(this).attr('itemId');
        var x = confirm("Are you shure to delete item?");
        if (x) {
            $.ajax({
                type: "GET",
                url: "api/resource/removeItem/" + id,
                success: function () {
                    fetchList();
                    alert('Item ' + id + 'deleted');
                },
                processData: false
            });
        }

    })
});


