var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// data for the chart
var data = {
  "Apples": 20,
  "Oranges": 10,
  "Bananas": 15,
  "Kiwi": 5,
  "Blueberry": 5,
  "Grapes": 10
};

// dimensions of the chart
var chartWidth = 600;
var chartHeight = 400;
var chartX = 50;
var chartY = 50;

// bar colors
var colors = {
  "Apples": "red",
  "Oranges": "orange",
  "Bananas": "yellow",
  "Kiwi": "green",
  "Blueberry": "blue",
  "Grape": "purple"
};

// draw the bars, names, and quantities
var barHeight = chartHeight / Object.keys(data).length;
var y = chartY + barHeight / 2;
ctx.font = "12px Arial";

for (var fruit in data) {
  var barWidth = data[fruit] * chartWidth / 25;
  ctx.fillStyle = colors[fruit];
  ctx.fillRect(chartX, y - barHeight / 2, barWidth, barHeight);
  ctx.fillStyle = "black";
  ctx.fillText(data[fruit] + " " + fruit, chartX + barWidth + 10, y + 4);
  y += barHeight;
}

// chart title
ctx.font = "bold 16px Arial";
ctx.fillText("Fruit Lab", chartX + chartWidth / 2 - 50, chartY - 20);
