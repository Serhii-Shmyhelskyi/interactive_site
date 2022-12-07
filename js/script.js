const butoonSkills = document.querySelector('.skills-b');
const headerSkills = document.querySelector('.skills-header');
const contentSkills = document.querySelector('.skills-content');
const headerHeader = document.querySelector('.header-header');
const imgBiog = document.querySelector('.biog-img');
const textBiog = document.querySelector('.biog-text');

setTimeout(() => {
    headerHeader.style.color = 'green';
    headerHeader.innerHTML = 'Нужбо, зробіть якісь дії'
}, 10000)

setTimeout(() => {
    imgBiog.style.width = '100px';
    imgBiog.style.height = '130px';
    textBiog.innerHTML = 'Привіт, мене звати Сергій, це інтерактивний сайт в якому заховано безліч цікавих пасхалок, погнали!'
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
