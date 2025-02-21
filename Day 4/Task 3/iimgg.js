    const slides = document.querySelectorAll(".slides img");
    let slideIndex = 0;
    let intervalId = null;

    //initializeone();
    document.addEventListener("DOMContentLoaded",initializeone);

    function initializeone(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displayslide");
        intervalId = setInterval(nextslide,1000);
    }
    }

    function showslide(index){

    if(index >= slides.length){
    slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;

    }
        slides.forEach(slide => {
        slide.classList.remove("displayslide")
        });
        slides[slideIndex].classList.add("displayslide");
    }
    function prevslide(){
    clearInterval(intervalId);  
    slideIndex--;
    showslide(slideIndex);
    }
    function nextslide(){
        slideIndex++;
        showslide(slideIndex);
    }