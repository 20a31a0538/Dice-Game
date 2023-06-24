var randomNumber1=Math.random();
randomNumber1=randomNumber1*6 +1
randomNumber1=Math.floor(randomNumber1); 

var randomDiceImage ="dice"+randomNumber1+".png";   //gives dice1.png to dice6.png

//  var randomImageSource = "./images/" + randomDiceImage;  //./images/dice1.png to ./images/dice6.png 

//changing left image to random image

var leftImage=document.querySelectorAll("img")[0];
leftImage.setAttribute("src",  randomDiceImage );

//changing right image to random image

var randomNumber2=Math.floor(Math.random()*6)+1;  //random number generation

var randomDiceImage2 ="dice"+randomNumber2+".png";

//var randomImageSource2="./images/"+randomDiceImage2;

//change right image
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


//changing text
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 wons!"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player2 wons!🚩"
}
else{
    document.querySelector("h1").innerHTML="🚩DRAW!🚩"
}

