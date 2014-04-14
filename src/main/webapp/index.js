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
        $table.append($("<tr><td class='id'>" + data[i].id + "</td><td class='name'>" + data[i].name + "</td><td><a href='#' itemId='" + data[i].id + "'>Edit</a></td></tr>"));
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
        var id = $(this).parent().parent().find(".id").text();
        var name = $(this).parent().parent().find(".name").text();
        $("#popup").show();
        $('#pID').html(id);
        $('#pName').val(name);
    })
    $('#pSubmit').click(function() {
        alert('Update');
    })
});


