var questionOne = {
  question: "Which team did Hinata play for during the series? ",
  answer: "Karasuno",
}
var questionTwo = {
  question: "Who was the name of Karasuno's senior manager? ",
  answer: "Shimizu",
}
var questionThree = {
  question: "Who was the #1 libero's name? ",
  answer: "Komori",
}
var questionFour = {
  question: "What was the name of Nishinoya senpai's junior school? ",
  answer: "Chidoriyama",
}
var questionFive = {
  question: "Name of guess blocker in Shiratorizawa? ",
  answer: "Tendo",
}
var highScore = [{name: "Jagrut",
                 score: 5},
                 {name: "Akashi",
                 score: 3}]
var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function intro()
  {
    var userName = readlineSync.question("Hi! Can I have your name please? ");
    console.log("\n" + "Welcome! " + userName + ", to the HAIKYUU quiz!" + "\n" + "*drumroll*" + "\n");
    console.log("Instructions: " + "Just write first name, eg: Hinata, Kageyama, Asahi");
  }

function question(indexValue)
  {
    var userAnswer = readlineSync.question(quiz[indexValue].question);
    // console.log("done");
    if (userAnswer.toUpperCase() === quiz[indexValue].answer.toUpperCase())
    {
      console.log("You are correct !!")
      score++;
    }
    else
    {
      console.log("Sorry, Your answer is incorrect");
    }
    console.log("Current Score = ", score, "\n");
  }

var readlineSync = require('readline-sync');
intro();
console.log("-------------------------------------" + "\n");
var userAnswer = '';
var score = 0;

for (var i =0; i<quiz.length; i++)
  {
    question(i);
  }

console.log("Your final score = ", score);
console.log("\n" + "Check out the high scores: ");
console.log("---------------------------------------");
var count = 0;
for (var j=0; j<highScore.length; j++)
  {
    console.log(highScore[j].name + " : " + highScore[j].score);
    if (score > highScore[j].score)
    {
      count++;
    }
  }
console.log("---------------------------------------");
if (count>0)
{
  console.log("\n" + "Congrats! you've made it to leaderboards, send me your screenshot and i'll add you :)");
}
else{
  console.log("No worries, try again :)");
}
