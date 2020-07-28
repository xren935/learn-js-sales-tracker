//looking for our monthly sale 
let ctx = document.getElementById('monthlySales').getContext('2d'); 
//do the same for the pie chart 
let pieCtx = document.getElementById('deptSales').getContext('2d'); 
//additional things needed for chart.js; define as 2D
let yearlyLabel = document.getElementById('yearlyTotal');

let monthlySales = Array.of(12,9,3); 
let monthlyLabels = Array.of('Oct','Nov','Dec'); 

let deptSales = Array.of(12,9,3); 
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0; 

function addYearlyTotal(x){
    yearlyTotal = x + yearlyTotal; 
}

monthlySales.forEach(addYearlyTotal); 

let octNums = Array.of(1200, 1000, 9000); 
let novNums = Array.of(1200, 1000, 9000); 
let decNums = Array.of(1200, 1000, 9000); 

let total = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));
//use ... to separate the parameters 
//now the elements in monthlySales are passed in one at a time 
let yearlyTotal = addYearlyTotal(...monthlySales); 
yearlyLabel.innerHTML = "$" + yearlyTotal;  

function findOver1000(){
    let firstThousand = monthlySales.findIndex(element => element > 1000); //findIndex VS find 
}

//reset data 
function resetNum(){
    monthlySales.fill(0); //to fill an array with 0's 
    monthlySalesChart.update(); 
}

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