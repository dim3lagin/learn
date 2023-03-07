let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");

let bird = document.createElement('img');
bird.src = "images/bird.png";

let pipeBottom = document.createElement('img');
pipeBottom.src = "images/pipeBottom.png";

let pipeUp = document.createElement('img');
pipeUp.src = "images/pipeUP.png";

let bg = document.createElement('img');
bg.src = "images/bg.png";

let fg = document.createElement('img');
fg.src = "images/fg.png"

let xPos = 50;
let yPos = 250;

let gap = 110;
let x = 100;
let y = 0;

let pipes_x = [cvs.width, cvs.width + 200];
let pipes_y = [0, -100];

let fg_height = fg.height;

let grav = 0.3;
let change = 5;
let random = 100;

let other = 62;
function draw() {
    ctx.drawImage(bird, xPos, yPos);
    xPos = xPos + 1;
    yPos = yPos - change;
    change = change - grav;

    ctx.drawImage(bg, 0, 0);

    for (i = 0; i < pipes_x.length; i++) {
        ctx.drawImage(pipeUp, pipes_x[i], pipes_y[i]);
        ctx.drawImage(pipeBottom, pipes_x[i], pipes_y[i] + pipeUp.height + gap);
        pipes_x[i] = pipes_x[i] - 2;

        if (pipes_x[i] < 50) {
            main_up = ctx.drawImage(pipeUp, pipes_x[i] + 400, pipes_y[i]);
            main_bottom = ctx.drawImage(pipeBottom, pipes_x[i] + 400, pipes_y[i] + fg_height + gap + random);
        }
    }


    /*for (var i = 0; i < pipe.length; i++) {
       ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
       ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

       pipe[i].x--;

       if (pipe[i].x == 125) {
           pipe.push({
               x: cvs.width,
               y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
           });
       }*/

    ctx.drawImage(fg, 0, 450)
    ctx.drawImage(bird, xPos, yPos);
    requestAnimationFrame(draw);
}

draw();
/*random = Math.floor(Math.random() * pipeUp.height) - pipeUp.height;*/

window.onkeypress = function (e) {
    if (e.keyCode == 32) {
        console.log(1)
    }
    else {
        console.log(0)
    }
};


/*
var cvs = document.getElementById("flappybird");
var ctx = cvs.getContext("2d");

let bird = document.createElement('img');
bird.src = "images/bird.png";

let pipeBottom = document.createElement('img');
pipeBottom.src = "images/pipeBottom.png";

let pipeUp = document.createElement('img');
pipeUp.src = "images/pipeUP.png";

let bg = document.createElement('img');
bg.src = "images/bg.png";

let fg = document.createElement('img');
fg.src = "images/fg.png"

var gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 25;
}

// Создание блоков
var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

var score = 0;
// Позиция птички
var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if (pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        // Отслеживание прикосновений
        if (xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
            location.reload(); // Перезагрузка страницы
        }

        if (pipe[i].x == 5) {
            score++;
            score_audio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillText("Счет: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;
*/