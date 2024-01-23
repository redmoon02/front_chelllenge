let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// 이미지 경로 배열 (원하는 이미지 경로로 변경)
const imagePaths = ["image1.jpg", "image2.jpg", "image3.jpg"];

// 이미지를 슬라이더에 추가
for (let i = 0; i < imagePaths.length; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const img = document.createElement('img');
    img.src = imagePaths[i];
    img.alt = "Slide " + (i + 1);
    slide.appendChild(img);
    document.getElementById('slider').appendChild(slide);
}

// 첫 번째 슬라이드를 보이도록 설정
slides[currentSlide].style.display = 'flex';

// 자동으로 슬라이드 변경 함수
function autoSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
}

// 2초마다 자동으로 슬라이드 변경
autoSlideInterval = setInterval(autoSlide, 2000);

// 마우스가 슬라이더에 들어갔을 때, 자동 슬라이드 멈춤
document.getElementById('slider-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// 마우스가 슬라이더에서 나갔을 때, 자동 슬라이드 다시 시작
document.getElementById('slider-container').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(autoSlide, 2000);
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
});

function updateSlider() {
    slides.forEach(slide => (slide.style.display = 'none'));
    slides[currentSlide].style.display = 'flex';
}

// 초기화 함수
function initSlider() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 2000);
}

// 창 크기 변경 시 슬라이더 초기화
window.addEventListener('resize', initSlider);
