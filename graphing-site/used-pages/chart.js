//get the current day. this is what will display by default
const currentDay = new Date().getDay();
console.log(currentDay);

// localStorage.clear(); // for testing purposes only
//import graph from saved data
var storedData = localStorage.getItem("graphData");

const ctx = document.getElementById('myChart');


// DEFAULT DATASET UPON OPENING APPLICATION
var dataB = [0, 0, 0, 0, 0, 0, 0];
//loop and initialize dataB
if (storedData!=null){
    var dataC = localStorage.getItem("graphData").split(",");
    for (let i = 0; i < dataB.length; i++){
        dataB[i] = parseInt(dataC[i]);
    }
}
console.log(dataB);

// dataB=dataC;
// console.log("Data is " + dataC);
Chart.defaults.backgroundColor = '#bdeac2';
Chart.defaults.font.size = 16;

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [{
            label: 'Number of Events',
            data: dataB,
            borderWidth: 5,
            borderColor: '#000000',
            pointBackgroundColor: '#000000',
            fill: true
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        tension: .3,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                font: {
                    family: 'Sunny'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Sunny',
                        size: '20px',

                    }
                }
            }
        }
    }
});

function showGraph(){
    return localStorage.getItem("data");
}