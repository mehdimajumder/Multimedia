var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Background color
var my_gradient=ctx.createLinearGradient(1100, 0, 0, 1100);
my_gradient.addColorStop(0, "white");
my_gradient.addColorStop(.3, "black");
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height)

//Caption text
ctx.font = "30px Garamond";
ctx.fillStyle = "#FFFFFF";
ctx.fillText("Moon Landing", 325, 50);

// Moon
ctx.beginPath();
ctx.arc(725, 75, 50, 0, Math.PI*2);
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.closePath();

// Earth
ctx.beginPath();
ctx.arc(400, 825,400, Math.PI, 2*Math.PI);
ctx.fillStyle = "#34A56F";
ctx.fill();
ctx.closePath();

// Trees
function drawTriangle(x, y) {
  ctx.fillStyle = "green";

  ctx.beginPath();

  ctx.moveTo(x, y);

  ctx.lineTo(x + 12.5, y-12.5);

  ctx.lineTo(x + 25, y);

  ctx.fill();
}


drawTriangle(302, 500);
drawTriangle(302, 510);
drawTriangle(302, 520);

drawTriangle(195, 540);
drawTriangle(195, 550);
drawTriangle(195, 560);

drawTriangle(250, 520);
drawTriangle(250, 530);
drawTriangle(250, 540);

drawTriangle(350, 520);
drawTriangle(350, 530);
drawTriangle(350, 540);

drawTriangle(450, 500);
drawTriangle(450, 510);
drawTriangle(450, 520);

drawTriangle(500, 530);
drawTriangle(500, 540);
drawTriangle(500, 550);

ctx.fillStyle = "brown";
ctx.fillRect(310, 520, 7, 12);
ctx.fillRect(204, 560, 7, 12);
ctx.fillRect(258, 540, 7, 12);
ctx.fillRect(358, 540, 7, 12);
ctx.fillRect(458, 520, 7, 12);
ctx.fillRect(508, 550, 7, 12);

// Stars
for(var i=0; i<100; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height/1.4;
    var radius = Math.random() * 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}

//Spaceship body                                                                                                                                                                                                                                              
ctx.fillStyle = "white";
ctx.fillRect(550, 350, 100, 50);
ctx.fillStyle = "blue";
ctx.fillRect(570, 370, 15, 20);

// Spaceship window
ctx.fillStyle = "red";
ctx.fillRect(570, 325, 55, 25);
ctx.fillStyle = "white";
ctx.fillRect(585, 335, 27, 10);


// Spaceship engine
ctx.fillStyle = "red";
ctx.fillRect(555, 400, 20, 30);
ctx.fillRect(625, 400, 20, 30);


// Planets
function planets() {
    const centerX = canvas.width/ 4;
    const centerY = canvas.height / 4;

    // Planet #1
    ctx.beginPath();
    ctx.fillStyle = "purple";
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
    ctx.fill();

    // Planet #2
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(centerX + 100, centerY, 10, 0, 2 * Math.PI);
    ctx.fill();

    // Planet #3
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(centerX - 150, centerY, 15, 0, 2 * Math.PI);
    ctx.fill();

    // Planet #4
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(centerX, centerY - 120, 15, 0, 2 * Math.PI);
    ctx.fill();

    // Planet #5
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.arc(centerX, centerY + 105, 5, 0, 2 * Math.PI);
    ctx.fill();
  }

  function animatePlanets() {
    setInterval(planets, 10);
  }

  animatePlanets();
