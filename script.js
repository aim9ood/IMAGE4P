document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-image-container');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    const totalImages = images.length;

    // 도트 생성
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => goToImage(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToImage(index) {
        currentIndex = index;
        updateCarousel();
    }

    function goToPrevious() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    prevButton.addEventListener('click', goToPrevious);
    nextButton.addEventListener('click', goToNext);

    // 자동 슬라이드
    setInterval(goToNext, 60000);

    updateCarousel();
});
