var name = prompt("What is your name?");
var nameAlert = alert("Hi " + name + ", lets play this amazing game. Here's how your day is going to start...");
var scenarioOneAlert = alert("You have a choice of two doors.");
var decisionOne = prompt("Do you want to enter door 1 or door 2?");

if (decisionOne == "Door 1") {

  confirm("Behind door 1 is a another two doors. The left door has heavy scratch marks on it and the right door has blood on it.")
  var decisionTwo = prompt("Which door do you want to go through? Left or Right? ");
  if (decisionTwo == "Left") {
    confirm("You have entered the left door.");
    confirm("You find more scratches along the side of the wall");
    confirm("There are two more doors to your left and right. The left is open and the right is closed.");
    var decisionTwoA = prompt("What door do you want to enter?");
    if (decisionTwoA == "Left") {

      confirm("You have entered the left door.");
      confirm("Inside this room you find a six-shooter");
      var decisionTwoB = prompt("Do you pick it up? Answer Yes or No.");
      if (decisionTwoB == "Yes") {

        confirm("You have picked up the six-shooter");
        confirm("You again have two doors either side... You can see a light coming from the left door but the right has no light. ");
        var decisionTwoC = prompt("What door are you entering? Left or Right?");
        if (decisionTwoC == "Left") {
          confirm("You see a zombie, shoot him dead and WIN the battle!");
          confirm("Congrats " + name + ".");
        } else if (decisionTwoC == "Right") {
          confirm("Oh no " + name + " you have been bombarded by 6 zombies... GAME OVER!");
        }

      } else if (decisionTwoB == "No") {

        confirm("You have left the six-shooter on the ground");
        confirm("You again have two doors either side... You can see a light coming from the left door but the right has no light. ");
        var decisionTwoD = prompt("What door are you entering? Left or Right?");
        if (decisionTwoD == "Left") {
          confirm("Oh no " + name + " you have been killed by 1 zombie... GAME OVER!");
        } else if (decisionTwoC == "Right") {
          confirm("Oh no " + name + " you have been bombarded by 6 zombies... GAME OVER!");
        }

      }


    } else if (decisionTwoA = "Right") {

      confirm("Oh no " + name + " you have been bombarded by 6 zombies... GAME OVER!");

    }
  } else if (decisionTwo == "Right") {
    confirm("Oh no " + name + " you have been bombarded by 6 zombies... GAME OVER!");
  }
  // game over if you enter door 2 straight away
} else if (decisionOne == "Door 2") {

  confirm("Oh no " + name + " you have been bombarded by 6 zombies... GAME OVER!");

}
