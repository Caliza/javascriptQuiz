// list of declared variables, var questions is array of questions to be used in quiz.

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
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start");
var counterEl = document.querySelector(".timer-box")
var startBtn = document.querySelector("#start-btn");
var containerEl = document.querySelector(".container");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector("#answers");
var ulEl = document.querySelector("#ul");
var interval;
var scoreEl = document.querySelector(".high-score");
var counter = 60;
var id = document.getElementById("count");

//startBtn.add EvenListener starts the 60 secondtimer and hides the start button when start button is clicked.
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

//Iterrates through a for loop to ask student 5 questions.
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
//Deducts 12 seconds from timer if student answers question wrong. Once time is over, it ends game.
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
    } else {
        showQuestion()
    }

}

// function endQuiz is exicutded once user presses start button
function endQuiz() {
    clearInterval(interval)
    timerEl.classList.add("hide")
    containerEl.classList.add("hide")
    scoreEl.classList.remove("hide")
    document.getElementById("end-quiz").classList.remove("hide")
    document.getElementById("score").textContent = counter;
    var highScores = JSON.parse(localStorage.getItem("initials")) || []
    console.log(highScores);
    for (let index = 0; index < highScores.length; index++) {
        const element = highScores[index];
        //Trying to sort array highscores.
        highScores.sort(function (x, y) {
            return y.score-x.score;
        });

        var name = document.createElement("li");
        name.textContent += element.initials + " " + element.score;
        ulEl.appendChild(name);
    }
}

document.getElementById("log-button").addEventListener("click", function () {
    var highScores = JSON.parse(localStorage.getItem("initials")) || []
    let initials = {
        initials: document.getElementById("initials").value,
        score: counter
    }
    console.log('beta0', highScores);

    // for (let score = 0; score < array.length; score++) {
    //     const element = array[score];
    //     element.ma 
    // }
    
    highScores.push(initials)
    console.log('beta', initials);
    // Clear HTML
    ulEl.innerHTML = ''
    for (let index = 0; index < highScores.length; index++) {
        const element = highScores[index];
        var name = document.createElement("li");
        name.textContent += element.initials + " " + element.score;
        ulEl.appendChild(name);
    }
    localStorage.setItem("initials", JSON.stringify(highScores))
    document.getElementById('hide-content').classList.add('hide');
});

    // style.display = 'none'; = .classList.add('hide')

    function endQuiz() {
    clearInterval(interval)
    timerEl.classList.add("hide")
    containerEl.classList.add("hide")
    scoreEl.classList.remove("hide")
    document.getElementById("end-quiz").classList.remove("hide")
    document.getElementById("score").textContent = counter;
    var highScores = JSON.parse(localStorage.getItem("initials")) || []
    console.log(highScores);
    for (let index = 0; index < highScores.length; index++) {
        const element = highScores[index];
        //Trying to sort array highscores.
        highScores.sort(function (x, y) {
            return y.score-x.score;
        });

        var name = document.createElement("li");
        name.textContent += element.initials + " " + element.score;
        ulEl.appendChild(name);
    }
}