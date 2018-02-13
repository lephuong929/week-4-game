//Creating global variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var targetNumber = 0;
var randomYellow = 0;
var randomRed = 0;
var randomGreen = 0;
var randomBlue = 0;


//Creating reset function
function reset() {
  totalScore = 0;
  var targetNumber = Math.floor((Math.random() * 500) + 100);
  $("#total").html(totalScore);
  $("#number-to-guess").text(targetNumber);
  randomYellow = Math.floor((Math.random() * 12) + 1);
  randomRed = Math.floor((Math.random() * 12) + 1);
  randomGreen = Math.floor((Math.random() * 12) + 1);
  randomBlue = Math.floor((Math.random() * 12) + 1);
}

//Creating a start function
function start() {

//Creating a random number target number

var targetNumber = Math.floor((Math.random() * 500) + 100);

$("#number-to-guess").text(targetNumber);

var counter = 0;



// Creating unique number value for each pokemon.
randomYellow = Math.floor((Math.random() * 12) + 1);
randomRed = Math.floor((Math.random() * 12) + 1);
randomGreen = Math.floor((Math.random() * 12) + 1);
randomBlue = Math.floor((Math.random() * 12) + 1);

var pokemonValue = [randomYellow, randomRed, randomGreen, randomBlue];




// Creating an image for each pokemon
var imageYellow = $("<img>");
    imageYellow.addClass("crystals");

    imageYellow.attr("id", "yellow-image");

    imageYellow.attr("src", "assets/images/pikachu.png");

    imageYellow.attr("data-yellowvalue", randomYellow);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#pokemon1").append(imageYellow);

var imageRed = $("<img>");
    imageRed.addClass("crystals");

    imageRed.attr("id", "red-image");

    imageRed.attr("src", "assets/images/charmander.png");

    imageRed.attr("data-redvalue", randomRed);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#pokemon2").append(imageRed);

var imageGreen = $("<img>");
    imageGreen.addClass("crystals");

    imageGreen.attr("id", "green-image");

    imageGreen.attr("src", "assets/images/bulbasuar.png");

    imageGreen.attr("data-greenvalue", randomGreen);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#pokemon3").append(imageGreen);

var imageBlue = $("<img>");
    imageBlue.addClass("crystals");

    imageBlue.attr("id", "blue-image");

    imageBlue.attr("src", "assets/images/squirtle.png");

    imageBlue.attr("data-bluevalue", randomBlue);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#pokemon4").append(imageBlue);




  
// Setting win/loss conditions
function calculateTotalScore() {
  //Calculate win/loss
  if (totalScore === targetNumber) {
    wins++;
    //append to win div//
    alert("You defeated Mewtwo!");
    reset();
  } else if (totalScore >= targetNumber) {
    losses++;
    //append to losses div//
    alert("You didn't defeat Mewtwo!");
    reset();
  }
}


//Creating on click 
$("#yellow-image").click(function() {
  totalScore = totalScore + randomYellow;
  $("#total").html(totalScore);
  calculateTotalScore();
}); 

$("#red-image").click(function() {
  totalScore = totalScore + randomRed;
  $("#total").html(totalScore);
  calculateTotalScore();
  console.log(totalScore);
}); 

$("#green-image").click(function() {
  totalScore = totalScore + randomGreen;
  $("#total").html(totalScore);
  calculateTotalScore();
});

$("#blue-image").click(function() {
  totalScore = totalScore + randomBlue;
  $("#total").html(totalScore);
  calculateTotalScore();
}); 

}

start();