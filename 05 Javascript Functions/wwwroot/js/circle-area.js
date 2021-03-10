console.log(calcCircleArea(7));
console.log(calcCircleArea(1.5));
console.log(calcCircleArea(20));

function calcCircleArea(r) {
    var area = Math.PI * r * r;
    return area;
}