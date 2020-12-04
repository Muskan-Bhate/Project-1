var readlineSync=require("readline-sync");
var score=0;
var userName=readlineSync.question("What is your name?");
console.log("Welcome "+userName+" to DO YOU KNOW Muskan!!?");
var highScores=[
{
  name:"Muskan",
  score:5
},
{
  name:"Vanshika",
  score:4
}]
function play(question,answer){
  var userQuestion=readlineSync.question(question);
  if(userQuestion.toUpperCase()===answer.toUpperCase()){
    console.log("You are right!!");
    score=score+1;
  }
  else{
    console.log("You are wrong!")
  }
  console.log(score);
  console.log("----------------")
}
var questionArr=[{
  question:"Where do I live?",
  answer:"Nagpur"
},
{
  question:"My favourite superhero would be?",
  answer:"Ironman"
},
{
  question:"Which is my favourite game?",
  answer:"Badminton"
},
{
  question:"What is my favourite colour?",
  answer:"Black"
},
{
  question:"Which is my favourite song?",
  answer:"Dil chahta hai"
}]
for(i=0;i<questionArr.length;i++){
  var currentQuestion=questionArr[i];
play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAY!You scored:",score)
console.log("------------")
console.log("Highscores:-")
for(i=0;i<highScores.length;i++)
{
  console.log(highScores[i].name,highScores[i].score)
}