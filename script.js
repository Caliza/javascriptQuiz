var questions = [
    {
        title: "Commonly used data types do not include?",
        choices: ["Strings", "Booleans", "Alerts", "Nubers"],
        answer: "Alerts"
    },
    {
        title: "________ is commonly used to end a line of code?",
        choices: ["Comma", "Semicolon", "Parentheses", "Period"],
        answer: "Semicolon"
    },
    {
        title: "A function is prefaced with the word?",
        choices: ["Function", "Object", "Method", "Index"],
        answer: "Function"
    },
    {
        title: "An array is defined by?",
        choices: ["()", "{}", "||", "[]"],
        answer: "[]"
    },
    {
        title: "A global variable is declared ________ a function",
        choices: ["In HTML", "In CSS", "Outside", "Insude"],
        answer: "Outside"
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
var ulEl = document.querySelector("#ul");
var interval;
var scoreEl = document.querySelector("#high-score");
var counter = 60;
var id = document.getElementById("count");

// scoreEl.classList.add("hide")

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
        choiceBtn.className += "btn-style";
        answersEl.appendChild(choiceBtn);
        choiceBtn.innerHTML = questions[currentIndex].choices[index];

        choiceBtn.setAttribute("value", questions[currentIndex].choices[index])
        choiceBtn.addEventListener("click", selectedAnswer)

    }
}

function selectedAnswer(e) {
    var selectedBtn = e.target
    if (this.value !== questions[currentIndex].answer) {
        counter -= 12;
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
    // line 95??
    //document.getElementById("initials").textContent = initials;
    var highScores = JSON.parse(localStorage.getItem("initials")) || []
    console.log(highScores);
    for (let index = 0; index < highScores.length; index++) {
        const element = highScores[index];
        var name =document.createElement("li");
        name.textContent += element.initials+ " " + element.score;
        ulEl.appendChild(name);
    }
}
document.getElementById("log-button").addEventListener("click", function(){
    var highScores = JSON.parse(localStorage.getItem("initials")) || []
    let initials = {
        initials: document.getElementById("initials").value,
        score: counter

    }  
    highScores.push(initials) 
    localStorage.setItem("initials", JSON.stringify(highScores))
    //save to local storage    "loacalStorage.setItem" make object out of score pull initial out of input box. Array of scores
    });