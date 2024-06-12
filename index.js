let headerBackgrounds = document.querySelectorAll(".background");

let imageIndex = 0;

function changeBackground() {
    // remove .showing class from current background
    headerBackgrounds[imageIndex].classList.remove("showing");

    // Increment the image index by one
    imageIndex++;

    // if the image index is more than there are element, set it to 0
    if (imageIndex >= headerBackgrounds.length) {
        imageIndex = 0;
    }

    // add the .showing class to the next background
    headerBackgrounds[imageIndex].classList.add("showing");
}

setInterval(changeBackground, 3000);