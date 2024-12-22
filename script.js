let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function showMessage() {
    const messages = [
        "祝你生日快乐！",
        "愿你的生活充满爱与欢笑！",
        "生日快乐！",
        "愿你的每一天都像今天一样特别！",
        "祝你心想事成，万事如意！",
        "愿你拥有一个美好的一天！",
        "祝你生日快乐！"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').innerText = messages[randomIndex];
}

// Initialize the carousel
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds
