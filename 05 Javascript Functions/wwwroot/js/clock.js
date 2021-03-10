function displayTime() {
    var d = new Date();

    var hour = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    document.getElementById("currentTime").innerHTML = "The current time is: " + hour;
}

setInterval(displayTime, 1000);