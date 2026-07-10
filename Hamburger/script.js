const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function () {

    overlay.classList.toggle("active");

    if (overlay.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});