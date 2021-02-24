function demo() {

    // BEGIN printMax demo
    let a = 1;
    let b = 2;
    let c = 3;
    let oldQuantity = 100;
    let quantity = 200;

    printMax(-5, -10);
    printMax(a + b, c);
    printMax(2 + 3, 10);
    printMax(100, 200);
    printMax(oldQuantity * 1.5, quantity * 2);

    printMax(1, 2, 3, 4);
    // END printMax demo


    // BEGIN printLine demo
    var n = 5;

    for (var line = 1; line <= n; line++) {
        printLine(1, line);
    }

    for (line = n - 1; line >= 1; line--) {
        printLine(1, line);
    }
    // END printLine demo

    // BEGIN printArguments
    printArguments(1, 2, 3, 4); // 1, 2, 3, 4
    // END printArguments


    // BEGIN createStudent demo
    var student = createStudent("Deyan", 21, "male");

    console.log(student);

    console.log(student.age);
    // END createStudent demo


    // BEGIN
    var studentsArr = [
        { name: 'Ivan', age: 16, gender: 'male' },
        { name: 'George', age: 15, sex: 'male' },
        { name: 'Maria', age: 22, gender: 'female' }
    ];

    var avgStudentsAge = findAverageAge(studentsArr);
    console.log(avgStudentsAge);

    // END
}

function printMax(number1, number2) {
    var max = number1;
    if (number2 > number1)
        max = number2;
    console.log('Maximal number: ' + max);
}

function printLine(start, end) {
    var line = '';
    for (var i = start; i <= end; i++) {
        line += ' ' + i;
    }
    console.log(line);
};

function printArguments() {
    for (var i in arguments) {
        console.log(arguments[i]);
    }
}

function createStudent(name, age, gender) {
    var obj =
    {
        name: name,
        age: age,
        gender: gender
    };
    return obj;
}


function findAverageAge(studentsArr) {
    var sum = 0;
    for (var i = 0; i < studentsArr.length; i++) {
        sum += studentsArr[i].age;
    }
    return sum / studentsArr.length;
}







