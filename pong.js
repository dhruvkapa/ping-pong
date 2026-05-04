var canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw the ball
function drawBall(){
ctx.beginPath();
ctx.arc(window.innerWidth/2, window.innerHeight/2, 10, 0, 2 * Math.PI);

ctx.fillStyle = "white";
ctx.fill();

ctx.stroke();

}
drawBall();
//Left Paddle
// can i have some sort of function that gets called whenever i want to move the paddle



function leftPaddle(x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
}

let initialLeftPaddlePositionX = 0;
let initialLeftPaddlePositionY = window.innerHeight/2;
let initialLeftPaddleHeight = 50;
//Initial leftPaddle
leftPaddle(initialLeftPaddlePositionX, initialLeftPaddlePositionY, 10, initialLeftPaddleHeight);
//Rightside Paddle (Computer Player)

let initialRightPaddlePositionX = canvas.width-25;
let initialRightPaddlePositionY = window.innerHeight/2;
let initialRightPaddleHeight = 50;

function rightPaddle(x,y,width,height){
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
}

//Inital rightPaddle
rightPaddle(initialRightPaddlePositionX, initialRightPaddlePositionY, 10, initialRightPaddleHeight);


window.addEventListener("keydown", function(){
    //how much should it go down by
    // it should go down by a whole block
    // so basically the X position stays the same
    // the Y position changes to go down by a whole block 
    // 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rightPaddle(initialRightPaddlePositionX, initialRightPaddlePositionY, 10, initialRightPaddleHeight);
    drawBall();

    leftPaddle(initialLeftPaddlePositionX,initialRightPaddlePositionY+initialRightPaddleHeight,10,initialRightPaddleHeight);
})

window.addEventListener("keyup", function(){
    //how much should it go down by
    // it should go down by a whole block
    // so basically the X position stays the same
    // the Y position changes to go down by a whole block 
    // 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rightPaddle(initialRightPaddlePositionX, initialRightPaddlePositionY, 10, initialRightPaddleHeight);
    drawBall();

    leftPaddle(initialLeftPaddlePositionX,initialRightPaddlePositionY-initialRightPaddleHeight,10,initialRightPaddleHeight);
})