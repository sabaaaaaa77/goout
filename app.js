const divs = document.querySelectorAll('.choice');

divs.forEach(div => {
    div.addEventListener('click', function() {
        window.location.href = 'ახალი_გვერდი.html'; // შეცვალე ახალი გვერდის მისამართით
    });
}); 
window.onscroll = function() {
    toggleHeaderSize();
};




function toggleHeaderSize() {
    const header = document.getElementById("header");

    if (window.pageYOffset > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
} 
function updateMetaTags(title, description, url, image) {
    document.title = title;
    
    document.querySelector('meta[name="description"]').setAttribute("content", description);
    document.querySelector('meta[property="og:title"]').setAttribute("content", title);
    document.querySelector('meta[property="og:description"]').setAttribute("content", description);
    document.querySelector('meta[property="og:url"]').setAttribute("content", url);
    document.querySelector('meta[property="og:image"]').setAttribute("content", image);
} 
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlidePosition() {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function autoSlide() {
    index = (index + 1) % totalSlides;
    updateSlidePosition();
}

setInterval(autoSlide, 3000);




