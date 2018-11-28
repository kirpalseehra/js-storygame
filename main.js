var name = prompt("What is your name?");

var nameAlert = alert("Hi " + name + ", lets play this amazing game. Here's how your day is going to start...");

var scenarioOneAlert = alert("You have a choice of two doors.");

var decisionOne = prompt("Do you want to enter door 1 or door 2?");

if (decisionOne === "door 1" || "Door 2") {

  confirm("Behind door 1 is a another two doors. The left door has a few scratch marks on it and the right door has blood on it.")
  var decisionTwo = prompt("Which door do you want to go through? Left or Right? ");
  if (decisionTwo = "left" || "Left") {
    confirm("You have entered the left door.");
    confirm("You find more scratches along the side of the wall")
    confirm("There are two more doors to your left and right. The left is open and the right is closed.")
    var decisionTwoA = prompt("What door do you want to enter?")
    if (decisionTwoA = "left") {

    } else if (decisionTwoA = "right") {

    }
  } else if (decisionTwo = "right" || "Right") {
    confirm("You have entered the right door.");
  }
  // game over if you enter door 2 straight away
} else if (decisionOne === "door 2" || "Door 2") {

  confirm("Oh no " + name + " you have been bombarded by 6 zombies... GAME OVER!");

} 
