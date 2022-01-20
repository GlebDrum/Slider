const slidesPlugin = (activeSlide = 0) => {
    const slides = document.querySelectorAll('.slide');

    const clearActiveClasses = () => { // очищаем активные классы
        slides.forEach((slide) => {
             slide.classList.remove('active');
        })
    }

    slides[activeSlide].classList.add('active');
    
    for (const slide of slides) { // при клике на слайд мы убираем класс active со всех слайдов и применяем его к текущему
        slide.addEventListener('click', () => {
            clearActiveClasses ();
            slide.classList.add('active');// добавляем слайду класс active
        })
    }
    
}

slidesPlugin();
