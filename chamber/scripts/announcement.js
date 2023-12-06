document.addEventListener("DOMContentLoaded", function() {
    var banner = document.querySelector("#announcement");
    var closeButton = document.querySelector("#close");

    var today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        banner.style.display = "block";
    }

    closeButton.addEventListener("click", function() {
        banner.style.display = "none";
    });
});