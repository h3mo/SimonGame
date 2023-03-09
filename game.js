var gamePattern = [];
var buttoncolours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var  i = 0;

function nextSequence() {
  level ++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttoncolours[randomNumber];
  gamePattern.push(randomChosenColor);
  var buttonID = "#" + randomChosenColor;
  $(buttonID).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  userClickedPattern = []
  i = 0;
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play(sound);

}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed")
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed")
  }, 100);
};

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    console.log("correct");
    if (currentLevel == gamePattern.length-1){
      setTimeout(function() { nextSequence();},1000);
  }else{
    console.log(gamePattern.length-1);
    console.log(currentLevel);
    i++;
  }}
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() { $("body").removeClass("game-over")}, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gameOver();

  }

};
function gameOver(){
  level = 0;
  gamePattern=[];
  var  i = 0;

}

$(document).on("keypress" ,function(event){
  if (gamePattern.length==0){
    $("h1").text("Level 0");
    nextSequence();
}


});

$(".btn").click(function() {
  var userChosenColour = (this.id);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(i)

});
