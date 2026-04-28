var canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw the ball
ctx.beginPath();
ctx.arc(window.innerWidth/2, window.innerHeight/2, 10, 0, 2 * Math.PI);

ctx.fillStyle = "white";
ctx.fill();

ctx.stroke();

//Leftside Paddle (Human Player)
ctx.beginPath();
ctx.rect(0, window.innerHeight/2, 10, 50);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();



//Rightside Paddle (Computer Player)
ctx.beginPath();
ctx.rect(canvas.width-25, window.innerHeight/2, 10, 50);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();