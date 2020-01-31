var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var resultText = document.querySelector("#resultText");
var playChoices = ["Rock", "Paper", "Scissors"];
var userChoice;
var compChoice;
var result;
if(!userChoice){

    rock.addEventListener("click", function(event){
        userChoice = "Rock";    
        compChoice = playChoices[Math.floor(Math.random() * 3)];
        if(compChoice === "Scissors"){
            resultText.textContent  = userChoice + " beats " + compChoice + ". You win!";
        } else if(compChoice === "Paper"){
            resultText.textContent  = userChoice + " loses to " + compChoice + ". You lose:(";
        } else{
            resultText.textContent = userChoice + " is equal to " + compChoice + ". Play again!";
        }
    
    });
    
    paper.addEventListener("click", function(event){
        userChoice = "Paper";   
        compChoice = playChoices[Math.floor(Math.random() * 3)];
        if(compChoice === "Rock"){
            resultText.textContent  = userChoice + " covers " + compChoice + ". You win!";
        } else if(compChoice === "Scissors"){
            resultText.textContent  = userChoice + " loses to " + compChoice + ". You lose:(";
        } else{
            resultText.textContent = userChoice + " is equal to " + compChoice + ". Play again!";
        } 
    });
    
    scissors.addEventListener("click", function(){
        userChoice = "Scissors";
        compChoice = playChoices[Math.floor(Math.random() * 3)];
        if(compChoice === "Paper"){
            resultText.textContent  = userChoice + " beats " + compChoice + ". You win!";
        } else if(compChoice === "Rock"){
            resultText.textContent  = userChoice + " loses to " + compChoice + ". You lose:(";
        } else {
            resultText.textContent = userChoice + " is equal to " + compChoice + ". Play again!";
        } 
    });
}
