var name = prompt("What is your name?");
var nameAlert = alert("Hi " + name + ", lets play this amazing game of choice. Here's the scenario...");
var scenarioOneAlert = alert("You are inside a building. Your first choice involves two doors.");
var decisionOne = prompt("Do you want to enter Door 1 or Door 2? Type 'Door 1' or 'Door 2'. ");

if (decisionOne == "Door 1") {

  confirm("Behind Door 1 are two more doors. The left door has heavy scratch marks on it and the right door has blood on it.")
  var decisionTwo = prompt("Which door do you want to go through? Type 'Left' or 'Right'. ");
  if (decisionTwo == "Left") {
    confirm("You have entered the left door.");
    confirm("You find more scratches along the side of the wall and there are chunks of skin laying around the floor. You are becoming very concerned.");
    confirm("There are two more doors to your left and right. The left is open and the right is closed.");
    var decisionTwoA = prompt("What door do you want to enter? Type 'Left' or 'Right'.");
    if (decisionTwoA == "Left") {

      confirm("You have entered the left door.");
      confirm("Inside this room you find a six-shooter");
      var decisionTwoB = prompt("Do you pick it up? Answer 'Yes' or 'No'.");
      if (decisionTwoB == "Yes") {

        confirm("You have picked up the six-shooter");
        confirm("You again have two doors either side... You can see a light coming from the bottom of the left door but the right has no light at all. You can hear a slight noise coming from the right door... ");
        var decisionTwoC = prompt("What door are you entering? Type 'Left' or 'Right'.");
        if (decisionTwoC == "Left") {
          confirm("You see a zombie, shoot him dead and jump out of first floor window!");
          confirm("Congrats " + name + ". You are a decision-making GOD. You WIN!");
        } else if (decisionTwoC == "Right") {
          confirm("Oh no " + name + " you try your best to fight off all 6 zombies but get overwhelmed... GAME OVER!");
        }

      } else if (decisionTwoB == "No") {

        confirm("You have left the six-shooter on the ground");
        confirm("You again have two doors either side... You can see a light coming from the left door but the right has no light. ");
        var decisionTwoD = prompt("What door are you entering? Type 'Left' or 'Right'.");
        if (decisionTwoD == "Left") {
          confirm("Oh no " + name + " you have been killed by 1 zombie. You should have picked up the six-shooter... GAME OVER!");
        } else if (decisionTwoD == "Right") {
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
