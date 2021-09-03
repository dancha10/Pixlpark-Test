const slides = document.querySelectorAll('.slide');
const arrSlider = []
for (let i = 0; i < slides.length; i++) {
    arrSlider[i] = slides[i].src;
    slides[i].remove();
}
let step = 0,
    offset = 0;

const drawImage = () => {
    const img = document.createElement('img');
    img.src = arrSlider[step];
    img.classList.add('slide');
    img.style.left = offset*755 + 'px';
    document.querySelector('.slider').appendChild(img);
    (step +1 === arrSlider.length) ? step = 0 : step++;
    offset = 1;
}

const nextSlide = () => {
    const SlidesView = document.querySelectorAll('.slide');
    let offsetView = 0;
    SlidesView.forEach(image => {
        image.style.left = offsetView*755 - 755 + 'px';
        offsetView++;
    })
    setTimeout(() => {
        SlidesView[0].remove();
        drawImage();
    }, 1500);
}

drawImage()
drawImage()
setInterval(nextSlide, 3000)












