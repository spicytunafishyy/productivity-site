const ctx = document.getElementById('myChart');

var funTime = localStorage.getItem("funCount");
var workTime = localStorage.getItem("workCount");
console.log("Funtime is: " + funTime);
console.log("Worktime is: " + workTime);
console.log(localStorage);
// DEFAULT DATASET UPON OPENING APPLICATION
var dataB = [funTime, workTime];


// dataB=dataC;
// console.log("Data is " + dataC);
Chart.defaults.backgroundColor = '#bdeac2';
Chart.defaults.font.size = 16;

const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Fun-time', 'Work-time'],
        datasets: [{
            label: 'Number of Events',
            data: dataB,
            pointBackgroundColor: '#000000',
            fill: true
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        tension: .3,
        
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

updateText();

function updateText(){
    var text = document.getElementById("customDescription");
    if (funTime>workTime){
        text.innerText="Glad to know you're feeling relaxed lately! Do you have any work tasks to complete?"
    }
    else if (workTime>funTime){
        text.innerText="You've been working really hard. Be sure to take a break: go for a walk, listen to music, or get creative and try painting or playing a musical instrument."
    }
    else if (workTime==0 && funTime==0){
        text.innerText="You have reset your fun-time and work-time, so there is no balance to be displayed."
    }
    else{
        text.innerText="You have a 50-50 balance of work tasks and fun tasks. This is great!"
    }
}

function reset(){    
    localStorage.setItem("funCount", 0);
    localStorage.setItem("workCount", 0);
    location.reload();
}