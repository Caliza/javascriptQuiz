var questions = [
    {
        title: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Nubers"],
        answer: "Alerts"
    },
    {
        title: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Nubers"],
        answer: "Alerts"
    },
    {
        title: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Nubers"],
        answer: "Alerts"
    }
];
var time = 30;
var timeInterval;
var currentIndex = 0
//El = htlm element
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start");
var startBtn = document.querySelector("#start-btn");
var containerEl = document.querySelector(".container");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector("#answers");

startBtn.addEventListener("click", function(){
    startEl.classList.add("hide")
    containerEl.classList.remove("hide")
    showQuestion()
});

function showQuestion(){
    questionEl.textContent = questions[currentIndex].title
    for (let index = 0; index < questions[currentIndex].choices.length; index++) {
        let choiceBtn = document.createElement("button")
        //choiceBtn.textContent = questions[currentIndex].choices[index];

    //console.log(questions[currentIndex].choices[index]);

    // answersEl.innerHTML += choiceBtn;
        answersEl.appendChild(choiceBtn);
        choiceBtn.innerHTML = questions[currentIndex].choices[index];
        choiceBtn.addEventListener("click", function(e){
            console.log(e.target.innerText);
            if (e.target.innerText==questions[currentIndex].answer) {
                console.log('meow');

            }
        });
}
} 

// function buttonSelect() {
//     for(var i = 0; i < optionText.length; i++){
//       var option = document.createElement("button");
//       document.body.appendChild(option);
//       option.innerHTML = optionText[i];
//     }
//   }