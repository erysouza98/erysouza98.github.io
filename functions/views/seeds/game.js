var playerScore = 0;
var playerSelection = 0;
var computerSelection = 0;
var computerScore = 0;
var winner = -1;
function play(select) {
    playerSelection = select;

    computerSelection = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

// 1- rock
// 2- Scissors
// 3-paper

// 0-draw
// 1-player wins
// 2- cpu wins

//Rock choose:
      if((playerSelection == 1) && (computerSelection == 1)) {
     winner = 0;
       }
       else if((playerSelection == 1) && (computerSelection == 2)) {
        winner = 1;
       }
       else if((playerSelection == 1) && (computerSelection == 3)) {
        winner = 2;
       }
// Scissors Choose:
       else if((playerSelection == 2) && (computerSelection == 1)) {
        winner = 2;
       }
       else if((playerSelection == 2) && (computerSelection == 2)) {
           winner = 0;
        }
       else if((playerSelection == 2) && (computerSelection == 3)) {
           winner = 1;
        }  
// Paper choose:
        else if((playerSelection == 3) && (computerSelection == 1)) {
        winner = 1;
        }
        else if((playerSelection == 3) && (computerSelection == 2)) {
       winner = 2;
        }
        else if((playerSelection == 3) && (computerSelection == 3)) {
       winner = 0;
        } 



       document.getElementById("player-selection-1").classList
      .remove("selected");
      document.getElementById("player-selection-2").classList
      .remove("selected");
      document.getElementById("player-selection-3").classList
      .remove("selected");
       
      document.getElementById("computer-selection-1").classList
      .remove("selected");
      document.getElementById("computer-selection-2").classList
      .remove("selected");
      document.getElementById("computer-selection-3").classList
      .remove("selected")


       document.getElementById("player-selection-" + playerSelection).classList
       .add("selected");
       document.getElementById("computer-selection-" + computerSelection).classList
       .add("selected");

        if(winner == 0){
        document.getElementById('message').innerHTML = 'Oh no, a draw... Try again';
    }
        else if(winner == 1){
        document.getElementById('message').innerHTML = 'Congratulations!! You Won!!!';
        playerScore++;
    }
        else if(winner == 2){
        document.getElementById('message').innerHTML = 'I won this one, keep trying';
        computerScore++;
    }


    document.getElementById('player-score').innerHTML = playerScore;
   
    document.getElementById('computer-score').innerHTML = computerScore;

    if(playerScore == 2 ){
       document.getElementById("form").classList
       .add("d-visible");
   }
    
}  
