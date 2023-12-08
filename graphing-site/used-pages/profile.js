var completed = localStorage.getItem("completed");
console.log(completed);
var achievementsList = document.getElementById("achievementsList");

if (completed>=5){
    achievementsList.textContent="Baby Steps - Completed At Least 5 Tasks";
}
if (completed >= 10){
    achievementsList.textContent+=", Walking to Running - Completed At Least 10 Tasks";
}
if (completed >= 20){
    achievementsList.textContent+=", Superhero - Completed At Least 20 Tasks";
}
