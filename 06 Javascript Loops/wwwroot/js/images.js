var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

document.addEventListener("DOMContentLoaded", function () {
    ReloadGallery(0);
});

function ReloadGallery(index) {
    document.getElementById("bigImage").src = 'images/' + images[index];

    var thumbIndex = 1;
    for (var i = 0; i < images.length; i++) {
        if (i != index) {
            var thumbId = "thumb" + thumbIndex;

            document.getElementById(thumbId).src = 'images/' + images[i];

            thumbIndex++;
        }
    }
}