function GetStudent() {
    var studentId = $("#studentId").val()

    var submitData = {
        id: studentId
    };

    $("#result").load("/home/GetStudent", submitData);

    $.get("/home/GetStudent?id=" + studentId, function (responseData, status) {
        // console.log(responseData);
        console.log("Get response: " + responseData.name + "\nStatus: " + status);
    });

    $.post("/home/GetStudent", submitData,
        // console.log(responseData);
        function (responseData, status) {
            console.log("Post response: " + responseData.name + "\nStatus: " + status);
        });

    $.ajax(({
        method: "POST",
        url: "/home/GetStudent",
        data: submitData
    }))
        .done(function () {
            alert("success");
        })
        .fail(function () {
            alert("error");
        })
        .always(function () {
            alert("complete");
        });
}