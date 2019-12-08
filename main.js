//define variables
var startBtn = document.getElementById("start-btn");
var startContainer = document.getElementById("start-container");
var questionContainer = document.getElementById("question-container");
var timeEl = document.getElementById("timeleft");

var secondsLeft = 75;
var userScore = 0;


startBtn.addEventListener("click", startGame)

function startGame() {
    setTime();
    console.log("started")
    startContainer.classList.add("hide")
    questionContainer.classList.remove("hide")


}

function nextQuestion() {

}

function selectAnswer() {

}


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
      //send message when time is up function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }
  }

  function resetQuiz () {

  }


// // button to start quiz and set timer to 75 seconds

// //The first view of the application displays a button that starts the quiz.

// Clicking the start button displays a series of questions.


// Once the quiz begins, a timer starts.


// If a question is answered incorrectly, additional time is subtracted from the timer.


// The timer stops when all questions have been answered or the timer reaches 0.


// After the game ends, the user can save their initials and score to a highscores view using local storage.