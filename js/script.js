let butoonSkills = document.querySelector('.skills-b');
let headerSkills = document.querySelector('.skills-header');
let contentSkills = document.querySelector('.skills-content');
let headerHeader = document.querySelector('.header-header');
let imgBiog = document.querySelector('.biog-img');
let textBiog = document.querySelector('.biog-text');

setTimeout(() => {
    headerHeader.style.color = 'green';
    headerHeader.innerHTML = 'Нужбо, зробіть якісь дії'
}, 10000)

setTimeout(() => {
    imgBiog.style.width = '100px';
    imgBiog.style.height = '130px';
    textBiog.innerHTML = 'Привіт, мене звати Сергій, це інтерактивний сайт в якому заховано безліч цікавих пасхалок, погнали! (тисни на фото)'
}, 3000)

butoonSkills.addEventListener('click', () => {
    headerSkills.innerHTML = 'Ось так:';
    headerSkills.style.color = 'gray';
    contentSkills.style.color = 'green';
    contentSkills.innerHTML = 'HTML, CSS, JS, Node.js, GIT, GitHub';
})

// ------------ Блок зображень ------------------

imgBiog.addEventListener('click', () => {
    headerHeader.style.color = 'green';
})

imgBiog.addEventListener('dblclick', () => {
    headerHeader.style.color = 'orange';
})

imgBiog.addEventListener('contextmenu', () => {
    headerHeader.style.color = 'black';
})

let imgArray = [
    'images/shm.JPG',
    'images/shm-2.JPG'
];

imgBiog.addEventListener('mouseenter', () => {
    imgBiog.src = imgArray[1];
})

imgBiog.addEventListener('mouseleave', () => {
    imgBiog.src = imgArray[0];
})

// ------------ Блок слайдера ------------------

let offset = 0;
const sliderContent = document.querySelector('.slider-content');

document.querySelector('.slider-next').addEventListener('click', () => {
    offset += 200;
    if (offset > 600) {
        offset = 0;
    }
    sliderContent.style.left = -offset + 'px';
})

document.querySelector('.slider-prew').addEventListener('click', () => {
    offset -= 200;
    if (offset < 0) {
        offset = 600;
    }
    sliderContent.style.left = -offset + 'px';
})

