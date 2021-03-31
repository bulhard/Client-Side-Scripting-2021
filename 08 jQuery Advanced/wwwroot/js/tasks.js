function Hide() {
    $("#p1").hide(100);
    $("#p2").hide(500);
    $("#p3").hide(1500);
    $("#p4").hide(2000);
    $("#p5").hide(2500);
}

function Show() {
    $("#p1").show(100);
    $("#p2").show(500);
    $("#p3").show(1500);
    $("#p4").show(2000);
    $("#p5").show(2500);
}

function Toggle() {
    $("#p1").toggle(1500);
    $("#p2").toggle(1500);
    $("#p3").toggle(1500);
    $("#p4").toggle(1500);
    $("#p5").toggle(1500, callbackFunction);
}

var callbackFunction = function () {
    alert("Done");
}