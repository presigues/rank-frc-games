function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


const game1="https://www.youtube.com/embed/9keeDyFxzY4?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // cres
const game2="https://www.youtube.com/embed/0zpflsYc4PA"; // charge
const game3="https://www.youtube.com/embed/VqOKzoHJDjA";  // strong
const game4="https://www.youtube.com/embed/EMiNmJW7enI?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // steamworks
const game5="https://www.youtube.com/embed/HZbdwYiCY74?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // power up
const game6="https://www.youtube.com/embed/Mew6G_og-PI?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // deep
const game7="https://www.youtube.com/embed/gmiYWTmFRVE?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // infinite
const game8="https://www.youtube.com/embed/itHNW2OFr4Y?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // ultimate ascent
const game9="https://www.youtube.com/embed/ZnGfbGzEFrM?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // lunacy
const game10="https://www.youtube.com/embed/uYNu9cQac1o?list=PLu4m0YMKEfPqmA4Di8Y9XkPannXdOZn8u"; // stack attack


function hard(){
round = 1;

if(round == 1){
    document.getElementById("game1").setAttribute("src", game1);
            round = 2;
}

}


function hard2{

if(round == 2){
    document.getElementById("game1").setAttribute("src", game2);
            round = 3;
}
}


if(round == 3){
    document.getElementById("game1").setAttribute("src", game3);
            round = 4;
}

if(round == 4){
    document.getElementById("game1").setAttribute("src", game4);
            round = 5;
}

if(round == 5){
    document.getElementById("game1").setAttribute("src", game5);
            round = 6;
}

if(round == 6){
    document.getElementById("game1").setAttribute("src", game6);
            round = 7;
}

if(round == 7){
    document.getElementById("game1").setAttribute("src", game7);
            round = 8;
}

if(round == 8){
    document.getElementById("game1").setAttribute("src", game8);
            round = 9;
}

if(round == 9){
    document.getElementById("game1").setAttribute("src", game9);
            round = 10;
}
if(round == 10){
    document.getElementById("game1").setAttribute("src", game10);
            
}
















  