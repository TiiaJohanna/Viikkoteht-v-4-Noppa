function rollDice() {
    var diceElement = document.getElementById('dice');
    var diceImageElement = document.getElementById('diceImage');
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
// Voit vaihtaa kuvat tässä switch-lauseessa sopivilla tiedostonimillä
switch (randomNumber) {
    case 1:
    diceImageElement.src = "1.png";
    break;
    case 2:
    diceImageElement.src = "2.png";
    break;
    case 3:
    diceImageElement.src = "3.png";
    break;
    case 4:
    diceImageElement.src = "4.png";
    break;
    case 5:
    diceImageElement.src = "5.png";
    break;
    case 6:
    diceImageElement.src = "6.png";
    break;
    default:
    break;
    }
}