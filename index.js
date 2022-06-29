var randonNumber1 =Math.floor(Math.random()*6) + 1;

var randomImage1 = "dice" + randonNumber1 + ".png";

var randomImageSource1= "images/" + randomImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var randonNumber2 =Math.floor(Math.random()*6) + 1;

var randomImage2 = "dice" + randonNumber2 + ".png";

var randomImageSource2= "images/" + randomImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randonNumber1>randonNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randonNumber1<randonNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}