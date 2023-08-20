var login = document.querySelector(".login");
var signup = document.querySelector(".Register");
var slider = document.querySelector(".slider");
var formSection = document.querySelector(".form-section");



 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});


login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
