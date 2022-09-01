

function DiceRolling() {
  var ImagesArray=["Images/dice1.png", "Images/dice2.png","Images/dice3.png","Images/dice4.png","Images/dice5.png","Images/dice6.png"];
  var randomnumber1= Math.floor(Math.random()* 6);
  var randomnumber2= Math.floor(Math.random()* 6);
  document.querySelector('.img1').src = ImagesArray[randomnumber1];
  document.querySelector('.img2').src=ImagesArray[randomnumber2];

  if (randomnumber1===randomnumber2){
    document.querySelector('h1').innerHTML="Draw";
  } else if (randomnumber1> randomnumber2) {

    document.querySelector('h1').innerHTML="Player 1 Wins";
  } else {

    document.querySelector('h1').innerHTML="Player 2 Wins";
  }

}

DiceRolling();

const cursor = document.querySelector(".cursor");
    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 5000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
