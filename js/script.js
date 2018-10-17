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

      $("#userChoice").text($("#input").val());
      if (randomNumber > .6 && randomNumber < .9) {
        cpuChoice = "Rock";
      }else if(randomNumber > .3 && randomNumber < .6){
        cpuChoice = "Paper";
      }else{
        cpuChoice = "Scissors";
      }
      
      $("#computerChoice").text(cpuChoice);
    });
});


