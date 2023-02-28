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

let pipes_x = [cvs.width, cvs.width + 150];
let pipes_y = [0, -100];

let grav = 0.3;
let change = 5;

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
        /*rez = Math.floor(Math.random() * pipeUp.height) - pipeUp.height;*/
        random = 100;

        if (pipes_x[i] < 50) {
            ctx.drawImage(pipeUp, pipes_x[i] + 300, pipes_y[i]);
            ctx.drawImage(pipeBottom, pipes_x[i] + 300, pipes_y[i] + pipeUp.height + gap + random);
        }
    }
    ctx.drawImage(fg, 0, 450)
    ctx.drawImage(bird, xPos, yPos);

    requestAnimationFrame(draw);
}
draw();

window.onkeypress = function (e) {
    if (e.keyCode == 32) {
        console.log(1)
    }
    else {
        console.log(0)
    }
};