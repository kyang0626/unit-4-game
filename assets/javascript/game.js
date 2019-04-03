// Variables

var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = 0;

var crystalRed = 0;
var crystalBlue = 0;
var crystalYellow = 0;
var crystalGreen = 0;

                                        
// Element IDs
var winsText = $("#win-text");
var lossesText = $("#loss-text");
var totalScoreText = $("#total-score");
var randomNumberText = $("#random-number-text");


                                       
// Functions //
$(document).ready(function() {

function loadNumbers () {
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#random-number-text").text(randomNumber);
    
     crystalRed = Math.floor(Math.random() * 12) +1;
     crystalBlue = Math.floor(Math.random() * 12) +1;
     crystalYellow = Math.floor(Math.random() * 12) +1;
     crystalGreen = Math.floor(Math.random() * 12) +1;
     totalScore = 0;
     $("#total-score").text(totalScore);
}

function checkScore () {
    if (totalScore === randomNumber) {
        wins++;
        $("#win-text").text("win: " + wins);
        loadNumbers();
    } else if (totalScore > randomNumber) {
        losses++;
        $("#loss-text").text("losses: " + losses);
        loadNumbers();
    } 
}


    
    loadNumbers();

    $("#crystal-red").on("click", function() {
        totalScore = totalScore + crystalRed; 
        $("#total-score").text(totalScore);
        checkScore();

    });
    $("#crystal-blue").on("click", function() {
        totalScore = totalScore + crystalBlue 
        $("#total-score").text(totalScore);
        checkScore();
    });
    $("#crystal-yellow").on("click", function() {
        totalScore = totalScore + crystalYellow 
        $("#total-score").text(totalScore);
        checkScore();
    });
    $("#crystal-green").on("click", function() {
        totalScore = totalScore + crystalGreen
        $("#total-score").text(totalScore);
        checkScore();
    });





});
