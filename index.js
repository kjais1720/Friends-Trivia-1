var playersName;
const rl = require('readline-sync');


var highScores=[{
  name:"Subham",
  score:5
  },{
    name:"Satyam",
    score:4
  }];


const questions = [
  {
    question:" Which character has a twin?",
    answer:"Phoebe"
  },
  {
    question:"Who was Monica’s first kiss?",
    answer:"Ross"
  },
  {
    question:"How many sisters does Joey have?",
    answer:"7"
  },
  {
    question:"How many times has Ross been married?",
    answer:"3"
  },
  {
    question:"What is Chandler’s dad’s job?",
    answer:"Drag Queen"
  }
]

playersName = rl.question('Hi there!! please state your name ');
console.log(`Hey there ${playersName}!\nWelcome to 'Ultimate F.R.I.E.N.D.S trivia'.`);
console.log("Game starts now. \n----------------")
play();



var score;
var answer;
function askQuestion(quesNum){
      answer= rl.question(questions[quesNum].question);
        if (questions[quesNum].answer.toUpperCase() === answer.toUpperCase()){
              score+=1;
              console.log('Correct answer');
        } else{
            console.log("Wrong answer")
        }
        console.log(`Your score = ${score}`);
        console.log('------------------')
}

function play(){
  score=0;
  for (var i=0;i<questions.length;i++){
      askQuestion(i);
  }
  console.log(`Yay! Your score is ${score}.\n Thank you for playing!`);
}

console.log("The current High scores are:")
for(const k of highScores){
  console.log(k.name+" "+k.score);
}

if(rl.keyInYN('Press "y" to play again, "q" to quit.')){
  play();
} else{
  console.log("goodbye!!");
}
  