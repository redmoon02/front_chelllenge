let currentSlide = 0;
const slides = document.querySelectorAll('#slider img');
const totalSlides = slides.length;

document.getElementById('prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
});

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// 자동으로 슬라이드 변경
function autoSlide() {
    setInterval(() => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    }, 2000); // 2초마다 변경
}

// 초기화 함수
function initSlider() {
    updateSlider();
    autoSlide(); // 자동 슬라이드 활성화
}

// 창 크기 변경 시 슬라이더 초기화
window.addEventListener('resize', initSlider);

// 페이지 로드 시 슬라이더 초기화
document.addEventListener('DOMContentLoaded', initSlider);


