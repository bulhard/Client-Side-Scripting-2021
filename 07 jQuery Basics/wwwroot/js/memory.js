const x = 2;
const y = 3;

var openedImages = 0;
var firstImageValue = 0;
var score = 0;
var moves = 0;
var playground;

function StartNewGame() {
    openedImages = 0;
    firstImageValue = 0;
    score = 0;
    moves = 0;
    // ToDo: Create HTML Table and images
    playground = generatePlayground(x, y);
    populatePlayground(x, y);
}

function generatePlayground(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i] = [];
        }
    }

    return arr;
}

function populatePlayground(a, b) {
    // inserting elements to array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            let number;
            do {
                number = getRandomInt(x * y / 2) + 1;
            } while (!checkCardsNumber(number));

            playground[i][j] = number;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function checkCardsNumber(number) {
    counter = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (playground[i][j] == number) {
                counter++
            }
        }
    }
    if (counter >= 2) {
        return false;
    }
    return true;
}

function closeAllImages() {
    firstImageValue = 0;
    openedImages = 0;
    $("img").attr("src", "images/back.png");
    $("img").attr("selected", false);
    $("img").removeClass("flip");
}

$(document).ready(function () {
    $("img").click(function () {
        if ($(this).attr("selected")) {
            // image is selected
            return;
        }

        if (openedImages >= 2) {
            // there are 2 selected images, so we close all
            closeAllImages();
            return;
        }

        openedImages++;

        $(this).hide();
        $(this).addClass("flip");

        let x = $(this).data("x");
        let y = $(this).data("y");

        if (firstImageValue == 0) {
            firstImageValue = playground[x][y];

            $(this).attr("selected", true);
        }
        else {
            moves++;
            $("#moves").text(moves);

            if (firstImageValue == playground[x][y]) {
                $(this).attr("selected", true);
                // Remove images

                setTimeout(() => {
                    $("img[selected='selected']").fadeOut(1500, function () {
                        $("img[selected='selected']").remove();
                    });

                    openedImages = 0;
                    firstImageValue = 0;

                    score++;
                    $("#score").text(score);
                }, 500);
            }
        }

        $(this).attr("src", "images/img" + playground[x][y] + ".jpg");
        $(this).show();
    });
});