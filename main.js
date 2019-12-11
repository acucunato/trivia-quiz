//define variables
var gameContainer = document.getElementById("game-container");
var startBtn = document.getElementById("start-btn");
var startContainer = document.getElementById("start-container");
var questionContainer = document.getElementById("question-container");

var timeEl = document.getElementById("timeleft");
var questionEl = document.getElementById("question");
var answerBtnGroup = document.getElementById("answerBtnGroup");

var answerBtnOne = document.getElementById("answerBtn1");
var answerBtnTwo = document.getElementById("answerBtn2");
var answerBtnThree = document.getElementById("answerBtn3");
var answerBtnFour = document.getElementById("answerBtn4");


var secondsLeft = 75;
var userScore = 0;
var currentQuestIndex = 0;


startBtn.addEventListener("click", startGame)

function startGame() {
    setTime();
    startContainer.classList.add("hide")
    questionContainer.classList.remove("hide")
    nextQuestion();

}

function nextQuestion() {
    showQuestion(questions[currentQuestIndex])
}

function showQuestion(question) {

    if(currentQuestIndex == questions.length) {
       questionContainer.style.display = "none";
       // high scores function
    }

    questionEl.innerText = question.title
    answerBtnOne.innerText = questions[currentQuestIndex].choices[0]
    answerBtnTwo.innerText = questions[currentQuestIndex].choices[1]
    answerBtnThree.innerText = questions[currentQuestIndex].choices[2]
    answerBtnFour.innerText = questions[currentQuestIndex].choices[3]

    answerBtnGroup.addEventListener("click", function (e){
        var buttonAnswer = e.target.innerText;
        if(buttonAnswer === (questions[currentQuestIndex].answer)) {
            currentQuestIndex++;
            nextQuestion();
        } else {
            secondsLeft -= 10;
            currentQuestIndex++;
            nextQuestion();
        }

    })}

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
      //send message when time is up function 
//   gameContainer.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }
  }

  function resetQuiz () {

  }