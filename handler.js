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

rating1;
rating2;
rationg3;
rating4;
rating5;
rating6;
rating7;
rating8;
rating9;
rating10;
function choice1(){
round = 1;

if(round == 1){
    document.getElementById("game1").setAttribute("src", game1);
            round = 2;
}

}
function zerochosen(round){
    if (round==1){
    rating1 == 0;
    }
    if (round==2){
        rating2 == 0;
        }
        if (round==3){
            rating3 == 0;
            }
            if (round==4){
                rating4 == 0;
                }
                if (round==5){
                    rating5 == 0;
                    }
                    if (round==6){
                        rating6 == 0;
                        }
                        if (round==7){
                            rating7 == 0;
                            }
                            if (round==8){
                                rating8 == 0;
                                }
                                if (round==9){
                                    rating9 == 0;
                                    }
                                    if (round==10){
                                        rating10 == 0;
                                        }
    }
function halfchosen(round){
if (round==1){
rating1 == .5;
}
if (round==2){
    rating2 == .5;
    }
    if (round==3){
        rating3 == .5;
        }
        if (round==4){
            rating4 == .5;
            }
            if (round==5){
                rating5 == .5;
                }
                if (round==6){
                    rating6 == .5;
                    }
                    if (round==7){
                        rating7 == .5;
                        }
                        if (round==8){
                            rating8 == .5;
                            }
                            if (round==9){
                                rating9 == .5;
                                }
                                if (round==10){
                                    rating10 == .5;
                                    }
}
function onechosen(round){
    if (round==1){
    rating1 == 1;
    }
    if (round==2){
        rating2 == 1;
        }
        if (round==3){
            rating3 == 1;
            }
            if (round==4){
                rating4 == 1;
                }
                if (round==5){
                    rating5 == 1;
                    }
                    if (round==6){
                        rating6 == 1;
                        }
                        if (round==7){
                            rating7 == 1;
                            }
                            if (round==8){
                                rating8 == 1;
                                }
                                if (round==9){
                                    rating9 == 1;
                                    }
                                    if (round==10){
                                        rating10 == 1;
                                        }
    }
    function onehalfchosen(round){
        if (round==1){
        rating1 == 1.5;
        }
        if (round==2){
            rating2 == 1.5;
            }
            if (round==3){
                rating3 == 1.5;
                }
                if (round==4){
                    rating4 == 1.5;
                    }
                    if (round==5){
                        rating5 == 1.5;
                        }
                        if (round==6){
                            rating6 == 1.5;
                            }
                            if (round==7){
                                rating7 == 1.5;
                                }
                                if (round==8){
                                    rating8 == 1.5;
                                    }
                                    if (round==9){
                                        rating9 == 1.5;
                                        }
                                        if (round==10){
                                            rating10 == 1.5;
                                            }
        }
        function twochosen(round){
            if (round==1){
            rating1 == 2;
            }
            if (round==2){
                rating2 == 2;
                }
                if (round==3){
                    rating3 == 2;
                    }
                    if (round==4){
                        rating4 == 2;
                        }
                        if (round==5){
                            rating5 == 2;
                            }
                            if (round==6){
                                rating6 == 2;
                                }
                                if (round==7){
                                    rating7 == 2;
                                    }
                                    if (round==8){
                                        rating8 == 2;
                                        }
                                        if (round==9){
                                            rating9 == 2;
                                            }
                                            if (round==10){
                                                rating10 == 2;
                                                }
            }
            function twohalfchosen(round){
                if (round==1){
                rating1 == 2.5;
                }
                if (round==2){
                    rating2 == 2.5;
                    }
                    if (round==3){
                        rating3 == 2.5;
                        }
                        if (round==4){
                            rating4 == 2.5;
                            }
                            if (round==5){
                                rating5 == 2.5;
                                }
                                if (round==6){
                                    rating6 == 2.5;
                                    }
                                    if (round==7){
                                        rating7 == 2.5;
                                        }
                                        if (round==8){
                                            rating8 == 2.5;
                                            }
                                            if (round==9){
                                                rating9 == 2.5;
                                                }
                                                if (round==10){
                                                    rating10 == 2.5;
                                                    }
                }

                function threechosen(round){
                    if (round==1){
                    rating1 == 3;
                    }
                    if (round==2){
                        rating2 == 3;
                        }
                        if (round==3){
                            rating3 == 3;
                            }
                            if (round==4){
                                rating4 == 3;
                                }
                                if (round==5){
                                    rating5 == 3;
                                    }
                                    if (round==6){
                                        rating6 == 3;
                                        }
                                        if (round==7){
                                            rating7 == 3;
                                            }
                                            if (round==8){
                                                rating8 == 3;
                                                }
                                                if (round==9){
                                                    rating9 == 3;
                                                    }
                                                    if (round==10){
                                                        rating10 == 3;
                                                        }
                    }
                    function threehalfchosen(round){
                        if (round==1){
                        rating1 == 3.5;
                        }
                        if (round==2){
                            rating2 == 3.5;
                            }
                            if (round==3){
                                rating3 == 3.5;
                                }
                                if (round==4){
                                    rating4 == 3.5;
                                    }
                                    if (round==5){
                                        rating5 == 3.5;
                                        }
                                        if (round==6){
                                            rating6 == 3.5;
                                            }
                                            if (round==7){
                                                rating7 == 3.5;
                                                }
                                                if (round==8){
                                                    rating8 == 3.5;
                                                    }
                                                    if (round==9){
                                                        rating9 == 3.5;
                                                        }
                                                        if (round==10){
                                                            rating10 == 3.5;
                                                            }
                        }
                        function fourchosen(round){
                            if (round==1){
                            rating1 == 4;
                            }
                            if (round==2){
                                rating2 == 4;
                                }
                                if (round==3){
                                    rating3 == 4;
                                    }
                                    if (round==4){
                                        rating4 == 4;
                                        }
                                        if (round==5){
                                            rating5 == 4;
                                            }
                                            if (round==6){
                                                rating6 == 4;
                                                }
                                                if (round==7){
                                                    rating7 == 4;
                                                    }
                                                    if (round==8){
                                                        rating8 == 4;
                                                        }
                                                        if (round==9){
                                                            rating9 == 4;
                                                            }
                                                            if (round==10){
                                                                rating10 == 4;
                                                                }
                            }

                            function fourhalfchosen(round){
                                if (round==1){
                                rating1 == 4.5;
                                }
                                if (round==2){
                                    rating2 == 4.5;
                                    }
                                    if (round==3){
                                        rating3 == 4.5;
                                        }
                                        if (round==4){
                                            rating4 == 4.5;
                                            }
                                            if (round==5){
                                                rating5 == 4.5;
                                                }
                                                if (round==6){
                                                    rating6 == 4.5;
                                                    }
                                                    if (round==7){
                                                        rating7 == 4.5;
                                                        }
                                                        if (round==8){
                                                            rating8 == 4.5;
                                                            }
                                                            if (round==9){
                                                                rating9 == 4.5;
                                                                }
                                                                if (round==10){
                                                                    rating10 == 4.5;
                                                                    }
                                }
                                function fivechosen(round){
                                    if (round==1){
                                    rating1 == 5;
                                    }
                                    if (round==2){
                                        rating2 == 5;
                                        }
                                        if (round==3){
                                            rating3 == 5;
                                            }
                                            if (round==4){
                                                rating4 == 5;
                                                }
                                                if (round==5){
                                                    rating5 == 5;
                                                    }
                                                    if (round==6){
                                                        rating6 == 5;
                                                        }
                                                        if (round==7){
                                                            rating7 == 5;
                                                            }
                                                            if (round==8){
                                                                rating8 == 5;
                                                                }
                                                                if (round==9){
                                                                    rating9 == 5;
                                                                    }
                                                                    if (round==10){
                                                                        rating10 == 5;
                                                                        }
                                    }
                                    function fivehalfchosen(round){
                                        if (round==1){
                                        rating1 == 5.5;
                                        }
                                        if (round==2){
                                            rating2 == 5.5;
                                            }
                                            if (round==3){
                                                rating3 == 5.5;
                                                }
                                                if (round==4){
                                                    rating4 == 5.5;
                                                    }
                                                    if (round==5){
                                                        rating5 == 5.5;
                                                        }
                                                        if (round==6){
                                                            rating6 == 5.5;
                                                            }
                                                            if (round==7){
                                                                rating7 == 5.5;
                                                                }
                                                                if (round==8){
                                                                    rating8 == 5.5;
                                                                    }
                                                                    if (round==9){
                                                                        rating9 == 5.5;
                                                                        }
                                                                        if (round==10){
                                                                            rating10 == 5.5;
                                                                            }
                                        }
                                        function sixchosen(){
                                            if (round==1){
                                            rating1 == 6;
                                            }
                                            if (round==2){
                                                rating2 == 6;
                                                }
                                                if (round==3){
                                                    rating3 == 6;
                                                    }
                                                    if (round==4){
                                                        rating4 == 6;
                                                        }
                                                        if (round==5){
                                                            rating5 == 6;
                                                            }
                                                            if (round==6){
                                                                rating6 == 6;
                                                                }
                                                                if (round==7){
                                                                    rating7 == 6;
                                                                    }
                                                                    if (round==8){
                                                                        rating8 == 6;
                                                                        }
                                                                        if (round==9){
                                                                            rating9 == 6;
                                                                            }
                                                                            if (round==10){
                                                                                rating10 == 6;
                                                                                }
                                            }

                                            function sixhalfchosen(){
                                                if (round==1){
                                                rating1 == 6.5;
                                                }
                                                if (round==2){
                                                    rating2 == 6.5;
                                                    }
                                                    if (round==3){
                                                        rating3 == 6.5;
                                                        }
                                                        if (round==4){
                                                            rating4 == 6.5;
                                                            }
                                                            if (round==5){
                                                                rating5 == 6.5;
                                                                }
                                                                if (round==6){
                                                                    rating6 == 6.5;
                                                                    }
                                                                    if (round==7){
                                                                        rating7 == 6.5;
                                                                        }
                                                                        if (round==8){
                                                                            rating8 == 6.5;
                                                                            }
                                                                            if (round==9){
                                                                                rating9 == 6.5;
                                                                                }
                                                                                if (round==10){
                                                                                    rating10 == 6.5;
                                                                                    }
                                                }
                                                function sevenchosen(){
                                                    if (round==1){
                                                    rating1 == 7;
                                                    }
                                                    if (round==2){
                                                        rating2 == 7;
                                                        }
                                                        if (round==3){
                                                            rating3 == 7;
                                                            }
                                                            if (round==4){
                                                                rating4 == 7;
                                                                }
                                                                if (round==5){
                                                                    rating5 == 7;
                                                                    }
                                                                    if (round==6){
                                                                        rating6 == 7;
                                                                        }
                                                                        if (round==7){
                                                                            rating7 == 7;
                                                                            }
                                                                            if (round==8){
                                                                                rating8 == 7;
                                                                                }
                                                                                if (round==9){
                                                                                    rating9 == 7;
                                                                                    }
                                                                                    if (round==10){
                                                                                        rating10 == 7;
                                                                                        }
                                                    }
                                                    function sevenhalfchosen(){
                                                        if (round==1){
                                                        rating1 == 7.5;
                                                        }
                                                        if (round==2){
                                                            rating2 == 7.5;
                                                            }
                                                            if (round==3){
                                                                rating3 == 7.5;
                                                                }
                                                                if (round==4){
                                                                    rating4 == 7.5;
                                                                    }
                                                                    if (round==5){
                                                                        rating5 == 7.5;
                                                                        }
                                                                        if (round==6){
                                                                            rating6 == 7.5;
                                                                            }
                                                                            if (round==7){
                                                                                rating7 == 7.5;
                                                                                }
                                                                                if (round==8){
                                                                                    rating8 == 7.5;
                                                                                    }
                                                                                    if (round==9){
                                                                                        rating9 == 7.5;
                                                                                        }
                                                                                        if (round==10){
                                                                                            rating10 == 7.5;
                                                                                            }
                                                        }
                                                        function eightchosen(){
                                                            if (round==1){
                                                            rating1 == 8;
                                                            }
                                                            if (round==2){
                                                                rating2 == 8;
                                                                }
                                                                if (round==3){
                                                                    rating3 == 8;
                                                                    }
                                                                    if (round==4){
                                                                        rating4 == 8;
                                                                        }
                                                                        if (round==5){
                                                                            rating5 == 8;
                                                                            }
                                                                            if (round==6){
                                                                                rating6 == 8;
                                                                                }
                                                                                if (round==7){
                                                                                    rating7 == 8;
                                                                                    }
                                                                                    if (round==8){
                                                                                        rating8 == 8;
                                                                                        }
                                                                                        if (round==9){
                                                                                            rating9 == 8;
                                                                                            }
                                                                                            if (round==10){
                                                                                                rating10 == 8;
                                                                                                }
                                                            }
                                                            function eighthalfchosen(){
                                                                if (round==1){
                                                                rating1 == 8.5;
                                                                }
                                                                if (round==2){
                                                                    rating2 == 8.5;
                                                                    }
                                                                    if (round==3){
                                                                        rating3 == 8.5;
                                                                        }
                                                                        if (round==4){
                                                                            rating4 == 8.5;
                                                                            }
                                                                            if (round==5){
                                                                                rating5 == 8.5;
                                                                                }
                                                                                if (round==6){
                                                                                    rating6 == 8.5;
                                                                                    }
                                                                                    if (round==7){
                                                                                        rating7 == 8.5;
                                                                                        }
                                                                                        if (round==8){
                                                                                            rating8 == 8.5;
                                                                                            }
                                                                                            if (round==9){
                                                                                                rating9 == 8.5;
                                                                                                }
                                                                                                if (round==10){
                                                                                                    rating10 == 8.5;
                                                                                                    }
                                                                }
                                                                function ninechosen(){
                                                                    if (round==1){
                                                                    rating1 == 9;
                                                                    }
                                                                    if (round==2){
                                                                        rating2 == 9;
                                                                        }
                                                                        if (round==3){
                                                                            rating3 == 9;
                                                                            }
                                                                            if (round==4){
                                                                                rating4 == 9;
                                                                                }
                                                                                if (round==5){
                                                                                    rating5 == 9;
                                                                                    }
                                                                                    if (round==6){
                                                                                        rating6 == 9;
                                                                                        }
                                                                                        if (round==7){
                                                                                            rating7 == 9;
                                                                                            }
                                                                                            if (round==8){
                                                                                                rating8 == 9;
                                                                                                }
                                                                                                if (round==9){
                                                                                                    rating9 == 9;
                                                                                                    }
                                                                                                    if (round==10){
                                                                                                        rating10 == 9;
                                                                                                        }
                                                                    }
                                                                    function ninehalfchosen(){
                                                                        if (round==1){
                                                                        rating1 == 9.5;
                                                                        }
                                                                        if (round==2){
                                                                            rating2 == 9.5;
                                                                            }
                                                                            if (round==3){
                                                                                rating3 == 9.5;
                                                                                }
                                                                                if (round==4){
                                                                                    rating4 == 9.5;
                                                                                    }
                                                                                    if (round==5){
                                                                                        rating5 == 9.5;
                                                                                        }
                                                                                        if (round==6){
                                                                                            rating6 == 9.5;
                                                                                            }
                                                                                            if (round==7){
                                                                                                rating7 == 9.5;
                                                                                                }
                                                                                                if (round==8){
                                                                                                    rating8 == 9.5;
                                                                                                    }
                                                                                                    if (round==9){
                                                                                                        rating9 == 9.5;
                                                                                                        }
                                                                                                        if (round==10){
                                                                                                            rating10 == 9.5;
                                                                                                            }
                                                                        }
                                                                        function tenchosen(){
                                                                            if (round==1){
                                                                            rating1 == 10;
                                                                            }
                                                                            if (round==2){
                                                                                rating2 == 10;
                                                                                }
                                                                                if (round==3){
                                                                                    rating3 == 10;
                                                                                    }
                                                                                    if (round==4){
                                                                                        rating4 == 10;
                                                                                        }
                                                                                        if (round==5){
                                                                                            rating5 == 10;
                                                                                            }
                                                                                            if (round==6){
                                                                                                rating6 == 10;
                                                                                                }
                                                                                                if (round==7){
                                                                                                    rating7 == 10;
                                                                                                    }
                                                                                                    if (round==8){
                                                                                                        rating8 == 10;
                                                                                                        }
                                                                                                        if (round==9){
                                                                                                            rating9 == 10;
                                                                                                            }
                                                                                                            if (round==10){
                                                                                                                rating10 == 10;
                                                                                                                }
                                                                            }





if(round == 2){
    
    document.getElementById("game1").setAttribute("src", game2);
            round = 3;
}




















  