// random number generator
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// random image generator
var randomImage = "images/dice" + randomNumber1 + ".png";

// Select all images
var image1 = document.querySelectorAll("img")[0];

//Set attribute
image1.setAttribute("src" , randomImage)


//Player 2
//random number  
var randomNumber2 = Math.floor(Math.random() *6) +1;

//random image
var randomImage = "images/dice" + randomNumber2 + ".png";

//Select all images in img 2 and Set attribute
// This is a reduced method from image1
var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImage);


   // Player 1 Side
/* if (randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} 

    else if (randomNumber1 === 2){
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } 
    
    else if (randomNumber1 === 3){
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    } 

    else if (randomNumber1 === 4){
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } 

    else if (randomNumber1 === 5){
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    } 

    else {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    } 
*/    

    // Player 2 Side
/* if (randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} 

    else if (randomNumber2 === 2){
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } 
    
    else if (randomNumber2 === 3){
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    } 

    else if (randomNumber2 === 4){
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } 

    else if (randomNumber2 === 5){
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    } 

    else {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    } 
*/    

        //Change text to winner
        //Player One winning

if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🏆 Player 1";
    }

    else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "🏆 Player 2";
    }

    else {
        document.querySelector("h1").innerHTML = "🎲 Draw";
    }

