"use strict"

function demo() {
    // debugger;

    var PI = Math.PI, // 3.141592653589793
        minValue = Number.MIN_VALUE, // 5e-324
        maxValue = Number.MAX_VALUE, // 1.79e+308
        div0 = PI / 0, // Infinity
        divMinus0 = -PI / 0, // -Infinity
        unknown = div0 / divMinus0, // NaN
        a = 0.1,
        b = 0.2,
        sum = 0.3,
        equal = (a + b == sum); // false!!!

    console.log('a+b = ' + (a + b) + ', sum = ' + sum + ', sum == a + b ? is ' + equal);
}

function demo2() {
    let a = Number(document.getElementById("numberOne").value);
    let b = Number(document.getElementById("numberTwo").value);

    let resultMessage = "<hr>Bigger number is ";
    if (a > b) {
        resultMessage = resultMessage + a;
    }
    else {
        resultMessage = resultMessage + b;
    }

    document.getElementById("result").innerHTML = resultMessage;
}

function demo3() {
    let a = Number(document.getElementById("valueOne").value);
    let b = Number(document.getElementById("valueTwo").value);
    let c = Number(document.getElementById("valueThree").value);

    let x = 10;

    var myNumbers = [];
    myNumbers.push(a);
    myNumbers.push(b);
    myNumbers.push(c);

    let g;

    g = x > a ? x : a;
    document.getElementById("result3").innerHTML += "<br>Comparing " + x + " and " + a + " we found that bigger is " + g;

    g = x > b ? x : b;
    document.getElementById("result3").innerHTML += "<br>Comparing " + x + " and " + b + " we found that bigger is " + g;

    g = x > c ? x : c;
    document.getElementById("result3").innerHTML += "<br>Comparing " + x + " and " + c + " we found that bigger is " + g;
}