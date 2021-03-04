class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
      
      //CREATED CAR SPRITES HERE BECAUSE THEY COME INTO PICTURE AFTER WAIT IS OVER...
     
    }
  
    play(){
      question.hide();
      background("lightblue");
      textSize(30);
      text("Result of Quiz", 340,50)
  //updates all player variable(players node)
      Contestant.getPlayerInfo();//allPLayers
      
      if(allContestants !== undefined){
        var ans= 230;
        for(var plr in allContestants){
          debugger;
          var correctAns = "2";
          if (correctAns === allContestants[plr].answer)
            fill("Green")
          else
            fill("red");
        ans = ans+30;
        text(allContestants[plr].name+":" +allContestants[plr].answer,250, ans )
  
      }
  
    
      drawSprites();
    }

  }
  }