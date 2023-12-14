const form=document.querySelector('form');
const submit=document.querySelector('#subt');
const remainGuess=document.querySelector(".lastResult");
const privousGuesse=document.querySelector(".guesses");

let privousGuesses=[];
let curretnGuess=0;
let isPlay=true;

if (isPlay) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guessNo = parseInt(document.getElementById('guessField').value); // Added # to target by ID
        console.log(document.getElementById('guessField').value);
        validate(guessNo);
    });
}


function validate(guess){
    if(isNaN(guess)){
        displayMessage("Invalid guess");
    }else if(guess>100){
        displayMessage("Number is greater than 100");
    }
    else if(guess<1){
        displayMessage("Number is less than 1");
    }
    else{
        
        privousGuesses.push(guess);
        curretnGuess++;
        check(guess);
    }
}

function check(guess){
    if(curretnGuess<10){
        const randomNumber=parseInt(Math.random()*100+1);
        if(guess===randomNumber){
            displayMessage("You guessed right");
            end();
        }else{
            console.log("Guess failed");
            document.querySelector(".lowOrHi").innerHTML=`<h2>Guess wrong ! Random number was ${randomNumber}</h2>`
        }
    }else{
        displayMessage("Game over !")
        end();
        
    }
    privousGuesse.innerHTML=`${privousGuesses}`;
    remainGuess.innerHTML=10-curretnGuess;
    

}



function displayMessage(message){
    document.querySelector(".lowOrHi").innerHTML=`<h2>${message}</h2>`
    // alert(message);
}

function end(guess){
    
    startGame();
}

function startGame(){
    alert("Start again.")
    curretnGuess=0;
    privousGuesses=[];

}