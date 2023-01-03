var questions = [
    {
        title: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Nubers"],
        answer: "Alerts"
    },
    {
        title: "________ is commonly used to end a line of code.",
        choices: ["Comma", "Semicolon", "Parentheses", "Period"],
        answer: "Semicolon"
    },
    {
        title: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Nubers"],
        answer: "Alerts"
    }
];

var timer;
var timerCount;
var currentIndex = 0
//El = htlm element
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start");
var counterEl = document.querySelector(".timer-box")
var startBtn = document.querySelector("#start-btn");
var containerEl = document.querySelector(".container");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector("#answers");

var interval;

var counter = 10;
var id = document.getElementById("count");

startBtn.addEventListener("click", function () {
    startEl.classList.add("hide")
    containerEl.classList.remove("hide")
    timerEl.classList.remove("hide")

    interval = setInterval(function () {
        counter--;

        id.innerHTML = counter;
        if (counter <= 0) {
            endQuiz();
        }

    }, 1000);

    showQuestion()
});

function showQuestion() {
    questionEl.textContent = questions[currentIndex].title
    answersEl.innerHTML = "";
    for (let index = 0; index < questions[currentIndex].choices.length; index++) {
        let choiceBtn = document.createElement("button")
        answersEl.appendChild(choiceBtn);
        choiceBtn.innerHTML = questions[currentIndex].choices[index];

        choiceBtn.setAttribute("value", questions[currentIndex].choices[index])
        choiceBtn.addEventListener("click", selectedAnswer)

    }
}

function selectedAnswer(e) {
    var selectedBtn = e.target
    if (this.value !== questions[currentIndex].answer) {
        counter -= 2;
        id.innerHTML = counter;
        if (counter <= 0) {
            counter = 0;
            endQuiz();
        }
    } else {
        //user got question correct
    }
    currentIndex++
    if (currentIndex >= questions.length) {
        endQuiz();
    }else{
         showQuestion()
    }
   
}

function endQuiz(){
    clearInterval(interval)
    containerEl.classList.add("hide")
    document.getElementById("end-quiz").classList.remove("hide")
    document.getElementById("score").textContent = counter;
    document.getElementById("log-button").addEventListener("click", function(){
    //save to local storage    "loacalStorage.setItem" make object out of score pull initial out of input box. Array of scores
    });
}