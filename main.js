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

var highScoresContainer = document.getElementById("high-scores-container");
var userScoreInput = document.getElementById("user-score");
var submitInitalsBtn = document.getElementById("initals-submit");
var topClassList = document.getElementById("high-scores-list");
var nameEl = document.getElementById("name");
var people = [{ name: secondsLeft }];
var highScoresBtn = document.getElementById("highscores-btn");


startBtn.addEventListener("click", startGame);


highScoresBtn.addEventListener("click", function() {
    startContainer.classList.add("hide");
    questionContainer.classList.add("hide");
    highScoresContainer.classList.remove("hide");
});

function startGame() {
    setTime();
    startContainer.classList.add("hide")
    questionContainer.classList.remove("hide")
    nextQuestion();

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
    })
}

function nextQuestion() {
    showQuestion(questions[currentQuestIndex])
}

function showQuestion(question) {

    if(currentQuestIndex == questions.length) {
       questionContainer.classList.add("hide");
       highScoresContainer.classList.remove("hide");
    }

    questionEl.innerText = question.title
    answerBtnOne.innerText = questions[currentQuestIndex].choices[0]
    answerBtnTwo.innerText = questions[currentQuestIndex].choices[1]
    answerBtnThree.innerText = questions[currentQuestIndex].choices[2]
    answerBtnFour.innerText = questions[currentQuestIndex].choices[3]

}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0 || currentQuestIndex == questions.length) {
        userScoreInput.append(secondsLeft);
        clearInterval(timerInterval);
        highScoresContainer.classList.remove("hide");
        questionContainer.classList.add("hide");
      }
      //if have time user score is 0 add a gif sendmessage()// 
  
    }, 1000);
  }

function addHighScores() {
    // event.preventDefault();
    var name = nameEl.value;
    var li = document.createElement("div");
    li.id = people.length;
    li.innerHTML = name + ":   " + secondsLeft;
    people.push({ name: secondsLeft });
    topClassList.append(li);
  }

submitInitalsBtn.addEventListener("click", addHighScores);


//   function sendMessage() {
//       //send message when time is up function 
// //   gameContainer.textContent = "OH NO! You're a Muggle!";

// //   var imgEl = document.createElement("img");

// //   imgEl.setAttribute("src", "https://media.giphy.com/media/A0GlPP8gwO4VO/giphy.gif");
// //   mainEl.appendChild(imgEl);

// // }
//   }
