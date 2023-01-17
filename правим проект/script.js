let totoro = document.querySelector('.totoro');
let fire = document.querySelector('.fire');
let chernushka = document.querySelector('.chernushka');

totoro.addEventListener('mousemove', run);
fire.addEventListener('mousemove', run2);
chernushka.addEventListener('mousemove', run3);


function run() {
    anime({
        targets: ('.totoro'),
        translateX: ('200px'),
        rotate: ('75'),
        duration: 1000,
        direction: 'alternate',
        easing: 'easeInOutExpo',
    });
}

function run2() {
    anime({
        targets: ('.fire'),
        translateX: ('-200px'),
        translateY: ('150px'),
        scale: (1.5),
        duration: 1000,
        direction: 'alternate',
        easing: 'easeInOutExpo',
    });
}

function run3() {
    anime({
        targets: ('.chernushka'),
        translateY: ('50px'),
        duration: 500,
        direction: 'alternate',
        easing: 'easeInOutExpo',
        delay: anime.stagger(150), // задержка каждого элемента, чтобы прямоугольники “росли” по очереди
    });
}