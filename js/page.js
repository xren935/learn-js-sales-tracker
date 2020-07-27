//looking for our monthly sale 
let ctx = document.getElementById('monthlySales').getContext('2d'); 
//do the same for the pie chart 
let pieCtx = document.getElementById('deptSales').getContext('2d'); 
//additional things needed for chart.js
//define as 2D
//build the chart 

//create a bar chart 
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0 //starting at 0 
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Create a pie chart using chart js 
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})