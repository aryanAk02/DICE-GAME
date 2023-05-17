var randomNumber1=Math.floor(Math.random()*5)+1;
var randomImage1=("dice"+randomNumber1+".png");
var imageSource1=("images/"+randomImage1);

document.querySelector("img").setAttribute("src",imageSource1);


var randomNumber2=Math.floor(Math.random()*5)+1;
var randomImage2=("dice"+randomNumber2+".png");
var imageSource2=("images/"+randomImage2);

document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER1 WINS!!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER2 WINS!!!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}