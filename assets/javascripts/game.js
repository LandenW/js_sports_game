(function(){

window.onload = function () {
//varibles declaired
      var resetButton = document.querySelector("#reset");
      var shot1Button = document.querySelector("#teamone-shoot");
      var shot2Button = document.querySelector("#teamtwo-shoot");
      var resetCounter     = document.querySelector("#num-resets");
      var team1Score = document.querySelector("#teamone-numhits");
      var team2Score = document.querySelector("#teamtwo-numhits");
      var team1Shots = document.querySelector("#teamone-numshots");
      var team2Shots = document.querySelector("#teamtwo-numshots");
      var ranScoreCheck = Math.random() < 0.5 ? true : false;
      var shot1AudioPlay =   document.querySelector("#shot1");
      var shot2AudioPlay =   document.querySelector("#shot2");
//reset button created
      resetButton.addEventListener("click", function(){

         resetCounter.innerHTML = parseInt(resetCounter.innerHTML) + 1;
         team1Score.innerHTML = 0
         team2Score.innerHTML = 0
         team1Shots.innerHTML = 0
         team2Shots.innerHTML = 0
      })

//shot button team 1
      shot1Button.addEventListener("click", function(){
      shot1AudioPlay.play();

         team1Shots.innerHTML = parseInt(team1Shots.innerHTML) + 1;

         if (ranScoreCheck == true){
           team1Score.innerHTML = parseInt(team1Score.innerHTML) + 1;
           ranScoreCheck =  Math.random() < 0.5 ? true : false
         }


      })

//shot button team 2
      shot2Button.addEventListener("click", function(){
      shot2AudioPlay.play();
         team2Shots.innerHTML = parseInt(team2Shots.innerHTML) + 1;

         if (ranScoreCheck == true){
           team2Score.innerHTML = parseInt(team2Score.innerHTML) + 1;
           ranScoreCheck =  Math.random() < 0.5 ? true : false
         }


      })
}

})();
