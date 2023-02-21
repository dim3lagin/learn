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
ctx.drawImage(bg, 0, 0);


let xPos = 50;
let yPos = 250;

let gap = 110;
let x = 100;
let y = 0;

let pipes_x = [cvs.width, cvs.width + 150];
let pipes_y = [0, -100];

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bird, xPos, yPos);
    xPos = xPos + 1;

    ctx.drawImage(bg, 0, 0);
    for (i = 0; i < pipes_x.length; i++) {
        ctx.drawImage(pipeUp, pipes_x[i], pipes_y[i]);
        ctx.drawImage(pipeBottom, pipes_x[i], pipes_y[i] + pipeUp.height + gap);
        pipes_x[i] = pipes_x[i] - 2;
        if (pipes_x[i] < 50) {
            rez = Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            ctx.drawImage(pipeUp, pipes_x + 50, pipes_y + rez);
            ctx.drawImage(pipeBottom, pipes_x + 50, pipes_y + 50 + pipeUp.height + gap);
        }
    }
    ctx.drawImage(bird, xPos, yPos);

    requestAnimationFrame(draw);
}
draw();


/**/