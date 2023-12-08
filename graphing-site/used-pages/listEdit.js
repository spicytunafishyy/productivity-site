// console.log(localStorage);
//boolean to track if fun or not and add to our fun vs. work breakdown
var isFun = false;

//get the amount of completed tasks and store into a variable
var completed = localStorage.getItem("completed");

//counters to track fun and work
var funCount = localStorage.getItem("funCount");
var workCount = localStorage.getItem("workCount");
// console.log(funCount + " " + workCount);

//get the current day. this is what will display by default
var currentDay = new Date();
// currentDay.setDate(currentDay.getDate()+1);
var dayOfWeek = currentDay.toLocaleString('en-us', { weekday: 'long'});
//get the header for to-do list (to edit)
// dayH.textContent=dayOfWeek;

// console.log(currentDay);
// console.log(nextDay);

// console.log("Today is: " + dayOfWeek);

//store an array with the names of each day's data to load
// const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const def = "Default";
localStorage.setItem("Default", '');

//get all buttons
var subButton = document.querySelector("#submit");
var forward = document.querySelector("#forward");
var backward = document.querySelector("#backward");

//get the input and list of tasks to change
const inputBox = document.getElementById("inputBox");
const list = document.getElementById("list");

//add a task
function addTask(){
    if(inputBox.value== ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        if (isFun){
            if (funCount===null){
                funCount = 1;
                localStorage.setItem("funCount", funCount);
            }
            else{
                funCount++;
                localStorage.setItem("funCount", funCount);
            }
        }
        else{
            if (workCount===null){
                workCount = 1;
                localStorage.setItem("workCount", workCount);
            }
            else{
                workCount++;
                localStorage.setItem("workCount", workCount);
            }
        }
        console.log(localStorage);
    }
    inputBox.value = "";
    saveData();
}

//mark a task as complete
list.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // console.log(e.target);
        if (e.target.classList.contains("checked")){
            if (completed==='null'){
                completed=1;
                localStorage.setItem("completed", completed);
            }
            else{
                completed++;
                localStorage.setItem("completed", completed);
            }
        }
        else{
                completed--;
                localStorage.setItem("completed", completed);
        }
        saveData();
        console.log(completed);
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//save the data - basic
function saveData(){
    if (dayOfWeek=="Sunday"){
        localStorage.setItem("Sunday", list.innerHTML);
    }
    else if (dayOfWeek=="Monday"){
        localStorage.setItem("Monday", list.innerHTML);
    }
    else if (dayOfWeek=="Tuesday"){
        localStorage.setItem("Tuesday", list.innerHTML);
    }
    else if (dayOfWeek=="Wednesday"){
        localStorage.setItem("Wednesday", list.innerHTML);
    }
    else if (dayOfWeek=="Thursday"){
        localStorage.setItem("Thursday", list.innerHTML);
    }
    else if (dayOfWeek=="Friday"){
        localStorage.setItem("Friday", list.innerHTML);
    }
    else if (dayOfWeek=="Saturday"){
        localStorage.setItem("Saturday", list.innerHTML);
    }

    
}

function showTask(){
    if (dayOfWeek==="Sunday"){
        
        const sun = localStorage.getItem("Sunday");
        if (sun===null){
            list.innerHTML=localStorage.getItem("Default");
        }
        else{
            list.innerHTML=sun;
        }
        // console.log(localStorage.getItem("Sunday"));
    }
    else if (dayOfWeek==="Monday"){
        const mon = localStorage.getItem("Monday", list.innerHTML);
        if (mon===null){
            list.innerHTML=localStorage.getItem("Default");
        }
        else{
            list.innerHTML=mon;
        }
        // console.log(localStorage.getItem("Monday"));
    }
    else if (dayOfWeek==="Tuesday"){
        const tue = localStorage.getItem("Tuesday", list.innerHTML);
        if (tue===null){
            list.innerHTML=localStorage.getItem("Default");
        }
        else{
            list.innerHTML=tue;
        }
        // console.log(localStorage.getItem("Tuesday"));
    }
    else if (dayOfWeek==="Wednesday"){
        const wed = localStorage.getItem("Wednesday", list.innerHTML);
        if (wed===null){
            list.innerHTML=localStorage.getItem("Default");
        }
        else{
            list.innerHTML=wed;
        }
        // console.log(localStorage.getItem("Wednesday"));
    }
    else if (dayOfWeek==="Thursday"){
        const thu = localStorage.getItem("Thursday", list.innerHTML);
        if (thu===null){
            list.innerHTML=localStorage.getItem("Default");
        }
        else{
            list.innerHTML=thu;
        }
        // console.log(localStorage.getItem("Thursday"));
    }
    else if (dayOfWeek==="Friday"){
        const fri = localStorage.getItem("Friday", list.innerHTML)
        if (fri===null){
            list.innerHTML=localStorage.getItem("Default");
        }
        else{
            list.innerHTML=fri;
        }
        // console.log(localStorage.getItem("Friday"));
    }
    else if (dayOfWeek==="Saturday"){
        const sat = localStorage.getItem("Saturday", list.innerHTML);
        if (sat===null){
            list.innerHTML=localStorage.getItem("Default");
        }
        else{
            list.innerHTML=sat;
        }
        // console.log(localStorage.getItem("Saturday"));
    }
    // console.log(localStorage);//test
}

showTask();

//go forward a day
forward.addEventListener('click', () => {
   currentDay.setDate(currentDay.getDate()+1);
   dayOfWeek = currentDay.toLocaleString('en-us', { weekday: 'long'});
   dayH.textContent=dayOfWeek;
   showTask();
//    console.log(localStorage);
});

//go back a day
backward.addEventListener('click', () => {
    currentDay.setDate(currentDay.getDate()-1);
    dayOfWeek = currentDay.toLocaleString('en-us', { weekday: 'long'});
    dayH.textContent=dayOfWeek;
    showTask();
    // console.log(localStorage);
 });

 //change text of work/fun button, save in a boolean
 function changeTxt(){
    var button = document.getElementById("funOrNot");
    if (isFun===false){
        isFun=true;
        button.textContent="Fun";
    }
    else{
        isFun=false;
        button.textContent="Work";
    }
 }

// tester functions ------------
// this.subButton.addEventListener('click', () => {
//     console.log("Sub Clicked!");
// });

// this.forward.addEventListener('click', () => {
//     console.log("Forward Clicked!");
// });

// this.backward.addEventListener('click', () => {
//     console.log("Back Clicked!");
// });