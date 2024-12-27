const slider = document.getElementById('slider')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const Slide_img = document.getElementsByClassName('Slide_img')

let counter = 1;

next.addEventListener('click', () => {
    if (counter < Slide_img.length) {
        slider.style.transform = `translateX(-${counter * 100}%)`
        counter++
    }
})

prev.addEventListener('click', () => {
    if (counter > 1) {
        slider.style.transform = `translateX(-${(counter - 2) * 100}%)`
        counter--
    }
})