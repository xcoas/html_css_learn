var button = document.getElementsByClassName("button");
var carousel = document.getElementById("carousel");

button[0].onclick = function(){
    carousel.style.transform = "translateX(0px)";
    button[0].classList.add("active");
    button[1].classList.remove("active");
    button[2].classList.remove("active");
}
button[1].onclick = function(){
    carousel.style.transform = "translateX(-70vw)";
    button[1].classList.add("active");
    button[0].classList.remove("active");
    button[2].classList.remove("active");
}
button[2].onclick = function(){
    carousel.style.transform = "translateX(-140vw)";
    button[2].classList.add("active");
    button[1].classList.remove("active");
    button[0].classList.remove("active");
}