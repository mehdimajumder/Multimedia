// Define the dataset
var dataset = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Create the doughnut chart
var doughnutChart = new Chart(document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: {
    labels: ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8', 'Value 9', 'Value 10'],
    datasets: [{
      data: dataset,
      backgroundColor: ['#FF6388', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0', '#9966FF', '#C9CBCF', '#8A2BE2', '#FFA500', '#87CEEB']
    }]
  },
  
});

// Create the horizontal bar chart
var barChart = new Chart(document.getElementById('bar-chart'), {
    type: 'horizontalBar',
    data: {
      labels: ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8', 'Value 9', 'Value 10'],
      datasets: [{
        data: dataset,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0', '#9966FF', '#C9CBCF', '#8A2BE2', '#FFA500', '#87CEEB']
      }]
    },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
  });
