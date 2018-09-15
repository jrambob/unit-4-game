var targetNumber = Math.floor(Math.random() * 120) + 19;
var loss = 0;
var win = 0;
var counter = 0;
var score = score;

document.write("Current Balance: " + counter + "<br>");
document.write("Total Wins: " + win + "<br>");
document.write("Total Losses: " + loss + "<br>");
document.write("Cost: " + targetNumber + "<br>");

$(".display").append(displayDiv)

var crystalValue = [Math.floor(Math.random()*12)+1, Math.floor(Math.random()*12)+1, Math.floor(Math.random()*12)+1, Math.floor(Math.random()*12)+1,];

$(".btnC").append(crystalValue[1]);
$(".btnG").append(crystalValue[2]);
$(".btnS").append(crystalValue[3]);
$(".btnB").append(crystalValue[0]);

console.log(crystalValue[1]);
console.log(crystalValue[2]);
console.log(crystalValue[3]);
console.log(crystalValue[0]);


$(".btnC").on("click", function() {

  counter + crystalValue[1];

  if (counter === targetNumber) {
    alert("You win!");
    win ++;
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    loss ++;
  }

});
$(".btnG").on("click", function() {

    counter + crystalValue[2];

    if (counter === targetNumber) {
      alert("You win!");
      win ++;
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      loss ++;
    }

});
$(".btnS").on("click", function() {

    counter + crystalValue[3];

    if (counter === targetNumber) {
      alert("You win!");
      win ++;
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      loss ++;
    }

});
$(".btnB").on("click", function() {

    counter + crystalValue[0];

    if (counter === targetNumber) {
      alert("You win!");
      win ++;
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      loss ++;
    }

});