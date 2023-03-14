var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:5, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:10, color:"purple"}
];


ctx.fillStyle = "#FF0000";
ctx.fillRect(20, 20, 600, 100);
ctx.font = "30px Garamond";
ctx.fillStyle = "#000000";
ctx.fillText("20", 60, 60);
ctx.fillText("Apple", 40, 90);

ctx.fillStyle = "#FFA500";
ctx.fillRect(20, 120, 300, 100);
ctx.font = "30px Garamond";
ctx.fillStyle = "#000000";
ctx.fillText("10", 70, 160);
ctx.fillText("Orange", 40, 190);

ctx.fillStyle = "#FFFF00";
ctx.fillRect(20, 220, 450, 100);
ctx.font = "30px Garamond";
ctx.fillStyle = "#000000";
ctx.fillText("15", 70, 260);
ctx.fillText("Banana", 40, 290);

ctx.fillStyle = "#00FF00";
ctx.fillRect(20, 320, 150, 100);
ctx.font = "30px Garamond";
ctx.fillStyle = "#000000";
ctx.fillText("5", 80, 360);
ctx.fillText("Kiwi", 55, 390);

ctx.fillStyle = "#0000FF";
ctx.fillRect(20, 420, 150, 100);
ctx.font = "30px Garamond";
ctx.fillStyle = "#000000";
ctx.fillText("5", 90, 460);
ctx.fillText("Blueberry", 35, 490);

ctx.fillStyle = "#A020F0";
ctx.fillRect(20, 520, 300, 100);
ctx.font = "30px Garamond";
ctx.fillStyle = "#000000";
ctx.fillText("10", 70, 560);
ctx.fillText("Grape", 50, 590);