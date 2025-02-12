const music = document.getElementById('background-music');

// Butonları al
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');

// Oynat butonu tıklama olayı
playButton.addEventListener('click', () => {
    music.play();
});

// Durdur butonu tıklama olayı
pauseButton.addEventListener('click', () => {
    music.pause();
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu-bar");
    const sections = document.querySelectorAll(".wrapper-item");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");

            // Hide all sections and remove active class from all buttons
            sections.forEach(section => section.classList.remove("wrapper-item__visible"));
            buttons.forEach(btn => btn.classList.remove("menu-bar--active"));

            // Show the target section and set the clicked button as active
            document.getElementById(targetId).classList.add("wrapper-item__visible");
            button.classList.add("menu-bar--active");
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullet: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});


const body = document.body;

const redButton = document.querySelector('.theme-btn__red');
const greenButton = document.querySelector('.theme-btn__green');
const purpleButton = document.querySelector('.theme-btn__purple');

document.addEventListener('DOMContentLoaded', () => {
    body.classList.add('primary-1');
});

// Butona tıklama işlemleri
redButton.addEventListener('click', () => {
    body.className = '';
    body.classList.add('primary-1');
});

greenButton.addEventListener('click', () => {
    body.className = '';
    body.classList.add('primary-2');
});

purpleButton.addEventListener('click', () => {
    body.className = '';
    body.classList.add('primary-3');
});
