const backToTopBtn2 = document.getElementById("backToTopBtn2");
const homeBtn = document.getElementById("homeBtn");

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    preloader.classList.add('preloader-hidden');
    
    setTimeout(() => {
        preloader.remove();
    }, 500); 
});

backToTopBtn2.addEventListener("click", () => {
  window.scrollTo({top:0, behavior: "smooth"});
});

homeBtn.addEventListener("click", () => {
    window.location.href = "/";
});