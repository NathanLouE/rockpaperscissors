// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $*/



// DOCUMENT READY FUNCTION BELOW
$(document).ready(function() {
    $("#shoot").click(function() {
      
var userChoice = "";
var cpuChoice = "";
var winner = "";
var randomNumber = Math.random();
      userChoice = $("#input").val();
      $("#userChoice").text(userChoice);
      if (randomNumber > .6 && randomNumber < .9) {
        cpuChoice = "Rock";
      }else if(randomNumber > .3 && randomNumber < .6){
        cpuChoice = "Paper";
      }else{
        cpuChoice = "Scissors";
      }
      
  $("#computerChoice").text(cpuChoice);
      if(userChoice==="Rock"){
        if(cpuChoice==="Rock"){
          winner = "It's a tie :/";
        }else if(cpuChoice === "Paper"){
          winner = "Computer Player Wins!";
        }else if(cpuChoice === "Scissors"){
           winner = "You Win!";
        }
      }else if(userChoice==="Paper"){
        if(cpuChoice==="Rock"){
          winner = "You win!";
        }else if(cpuChoice === "Paper"){
          winner = "It's a tie :/";
        }else if(cpuChoice === "Scissors"){
           winner = "Computer Player Wins!";
        }
      }else if(userChoice==="Scissors"){
        if(cpuChoice === "Rock"){
          winner = "Computer Player Wins!";
        }else if(cpuChoice === "Paper"){
          winner = "You Win!";
        }else if(cpuChoice === "Scissors"){
           winner = "It's a tie :/!";
        }
      }else{
        winner = "Invalid Input, Try Again!"
      }
      
      
    $("#result").text(winner);  
    });
});


