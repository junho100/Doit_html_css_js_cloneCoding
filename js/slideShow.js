var slides = document.querySelectorAll("#slides > img");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
console.log(slides)
var idx = 0;

showSlides(idx);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(k){
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[k].style.display = "block";
}
function prevSlide(){
    if(idx == 0){
        idx = 2;
    }
    else{
        idx -= 1;
    }
    showSlides(idx);
}
function nextSlide(){
    if(idx == 2){
        idx = 0;
    }
    else{
        idx += 1;
    }
    showSlides(idx);
}