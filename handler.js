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
const game7="";
const game8="";
const game9="";
const game10="";


function thehardpart(){

 round1 = getRandomInt(1, 10);
 round2 = getRandomInt(1, 10);
while(round1 == round2){
    round2 = getRandomInt(1, 10);
}
 round3 = getRandomInt(1, 10);
while(round1 == round3 || round2 == round3){
    round3 = getRandomInt(1, 10);
}
 round4 = getRandomInt(1, 10);
while(round1==round4||round2==round4||round3==round4){
    round4 == getRandomInt(1,10);
}
 round5 = getRandomInt(1, 10);
while(round1==round5||round2==round5||round3==round5||round4==round5){
     round5 = getRandomInt(1, 10);
}
 round6 = getRandomInt(1, 10);
while(round1==round6||round2==round6||round3==round6||round4==round6||round5==round6){
    round6 = getRandomInt(1, 10);
}
 round7 = getRandomInt(1, 10);
while(round1==round7||round2==round7||round3==round7||round4==round7||round5==round7||round6==round7){
    round7 = getRandomInt(1, 10);
}
 round8 = getRandomInt(1, 10);
while(round1==round8||round2==round8||round3==round8||round4==round8||round5==round8||round6==round8||round7==round8){
    round8 = getRandomInt(1, 10);
}
 round9 = getRandomInt(1, 10);
while(round1==round9||round2==round9||round3==round9||round4==round9||round5==round9||round6==round9||round7==round9||round8==round9){
    round9 = getRandomInt(1, 10);
}
 round10 = getRandomInt(1, 10);
while(round1==round10||round2==round10||round3==round10||round4==round10||round5==round10||round6==round10||round7==round10||round8==round10||round9==round10){
    round10 = getRandomInt(1, 10);
}



}


  