$(document).ready(function () {
    function success(data) {
        alert('success: ' + data);
    }

    function fail(data) {
        alert('fail');
    }

    $('#makeAjax').click(function () {
        $.ajax({
            type: "GET",
            url: "api/resource",
            success: success,
            processData: false
        });
    })
})
