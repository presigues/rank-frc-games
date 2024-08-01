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

function halfchosen(){
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
function onechosen(){
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
    function onehalfchosen(){
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
        function twochosen(){
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
            function twohalfchosen(){
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

                function threechosen(){
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
                    function threehalfchosen(){
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
                        function fourchosen(){
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

                            function fourhalfchosen(){
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




if(round == 2){
    
    document.getElementById("game1").setAttribute("src", game2);
            round = 3;
}




















  