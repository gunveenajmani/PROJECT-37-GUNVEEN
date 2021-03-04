
var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var contestant, question, quiz;


function preload(){
  
}

function setup(){
    createCanvas(1000,500);
    database=firebase.database();
    quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background("pink")
    if(contestantCount === 4){
      quiz.update(1);//updateing gamestate
    }
    if(gameState === 1){
      clear();
      quiz.play();
    }
  
  }
