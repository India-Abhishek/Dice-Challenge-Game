function suffle(){
    // get random number and storing that value in a variable
    const play1 = Math.floor(Math.random() *6) +1;   // storing constant value in player1 
    const play1dice = `assets/dice${play1}.png`;    // updating image with random number
    document.getElementById('check1').setAttribute('src',play1dice); //changing images by random number

    // suffling number for player 2
    const play2 = Math.floor(Math.random() *6) +1;
    const play2dice = `assets/dice${play2}.png`;
    document.getElementById('check2').setAttribute('src',play2dice);


    // printing Final Result
    if(play1> play2){
        document.querySelector('h1').innerHTML="Player -One- Won!!!!"
    }
    else if(play1< play2){
        document.querySelector('h1').innerHTML="Player --Two-- Won!!!!"
    }

    else{
        document.querySelector('h1').innerHTML="Match Draw  ;)"
    }
}