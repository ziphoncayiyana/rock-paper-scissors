
// start the game
function game(){
    let pScore=0;
    let cScore=0;

    function startGame(){
        const playerBtn =document.querySelector('.intro button');
        const intoScreen= document.querySelector('.intro');
        const match= document.querySelector('.match');

        playerBtn.addEventListener('click', () =>{
           intoScreen.classList.add('fadeOut'); 
           match.classList.add('fadeIn');
        });
    }
    //play match
    function playMatch(){
        const options = document.querySelectorAll('.options button');
        const playerHand= document.querySelector('.player-hand');
        const computerHand= document.querySelector('.computer-hand');
        const hands= document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation ="";
            });
        });

        //computer options
        const computerOptions =['rock', 'paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click',function(){

                //computer choice
                const computerNumber =  Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() =>{
                //here is where we call compare hands
                compterHands(this.textContent, computerChoice)


                //update images
                playerHand.src=`./assets/${this.textContent}.png`;
                    computerHand.src =`assets/${computerChoice}.png`;
                }, 2000 );

                //animations
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
            
    }
    //update the score 
    function updateScore(){
        const playerScore= document.querySelector('.player-score p');
        const computerScore= document.querySelector('.computer-score p');
        playerScore.textContent= pScore;
        computerScore.textContent= cScore;
    }

    function compterHands(playerChoice, computerChoice){
        const winner = document.querySelector('.winner');
        if(playerChoice ===computerChoice){
            winner.textContent = `It's is a tie`;
            return;
        }
        // check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // check for scissor
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    //it's call all the inner function
    startGame();
    playMatch();
}
//start the game function
game();