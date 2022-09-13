// dice left
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "images/dice"+randomNumber1+".png";

var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);

// dice right
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice"+randomNumber2+".png";

var img2 =document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);

// changing heading

if (randomImage1==randomImage2){

    var heading = document.querySelector("h1").innerHTML="Draw🙂";

}
else if(randomImage1>randomImage2){

    var heading = document.querySelector("h1").innerHTML="Player 1 wins😎";


}
else{

    var heading = document.querySelector("h1").innerHTML="Player 2 wins😉";


}


