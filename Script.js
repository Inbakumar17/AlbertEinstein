document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu");
    const sidebar = document.querySelector(".sidebar");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("active");
        navbar.classList.add("active");
    });

    navbar.addEventListener("click", function () {
        sidebar.classList.remove("active");
        navbar.classList.remove("active");
    });
});
