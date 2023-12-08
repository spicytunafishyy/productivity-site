function input() {
    var userInput = document.getElementById("userInput").value;
    if (userInput == '') {
        alert("You must write something!");
    }
    else {
        console.log(userInput); // test line
        main(userInput);
    }
}

function main(userInput) {
    //Activity[work/play,hours,urgent/minor]
    const userInput = userInput;
    const userMess = { role: "user", content: userInput };
    const systemMess = { role: "system", content: "INPUT FORMAT: Activity[work/play,hours,urgent/minor] TASK: Serve as a secretary and make a week schedule to keep a balanced life by analyzing each activity's metadata RULES FOR EACH DAY: for every two work activities, there must be a play activity; must have at least 3 activities; total hours < 13; urgent tasks are scheduled sooner; if not enough data is provided, repeat minor activities." };
    const messages = [systemMess, userMess];
    const completion = openai.chat.completions.create({
        messages,
        model: "gpt-4",
    });
    console.log(completion.choices[0].message.content);
}