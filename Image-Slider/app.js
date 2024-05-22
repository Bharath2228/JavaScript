
const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalID = null;

document.addEventListener("DOMContentLoaded", intializesilder)

function intializesilder(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displayslide");
        intervalID = setInterval(nextslide, 5000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1; 
    }

    slides.forEach(slide => {
        slide.classList.remove("displayslide")
    })
    slides[slideIndex].classList.add("displayslide")
}

function prevslide(){
    clearInterval(intervalID)
    slideIndex--
    showSlide(slideIndex)
    intervalID = setInterval(nextslide, 5000);
}

function nextslide(){
    slideIndex++
    showSlide(slideIndex)
}