function getcomputerChoice(){
        let x=Math.ceil(Math.random()*3)
        if(x==1)
            return "Rock";
        else if(x==2)
            return "Paper";
        else
            return "Scissors";
    }
currentPlayerScore=0;
currentCompScore=0;
const playerScore=document.querySelector('div.playerscore');
const computerScore=document.querySelector('div.computerscore');
const results=document.querySelector('div.winner');
const choices=document.querySelectorAll('div.choice');
choices.forEach((choicez) => { choicez.addEventListener('click',getPlayerChoice);});

function playround(playerChoice){
    let computerChoice=getcomputerChoice();
    if(playerChoice=="Rock"){
        if(computerChoice=="Scissors") {
                results.textContent="You win";
                playerScore.textContent=++currentPlayerScore;
            }
        else if(computerChoice=="Paper"){
            results.textContent="Computer Wins";
            computerScore.textContent=++currentCompScore;
        }
        else if(computerChoice=="Rock"){
            results.textContent="Tie";
            playerScore.textContent=++currentPlayerScore;
            computerScore.textContent=++currentCompScore;
        }
    }
    else if(playerChoice=="Paper"){
        if(computerChoice=="Rock"){
            results.textContent="You win";
            playerScore.textContent=++currentPlayerScore;
        }
        else if(computerChoice="Scissors"){
            results.textContent="Computer Wins";
            computerScore.textContent=++currentCompScore;
        }
        else if(computerChoice=="Paper"){
            results.textContent="Tie";
            playerScore.textContent=++currentPlayerScore;
            computerScore.textContent=++currentCompScore;
        }
    }
    else if(playerChoice=="Scissors"){
        if(computerChoice=="Paper"){
            results.textContent="You win";
            playerScore.textContent=++currentPlayerScore;
        }
        else if(computerChoice=="Rock"){
            results.textContent="Computer Wins";
            computerScore.textContent=++currentCompScore;
        }
        else if(computerChoice=="Scissors"){
            results.textContent="Tie";
            playerScore.textContent=++currentPlayerScore;
            computerScore.textContent=++currentCompScore;
        }
    }
    if(currentCompScore==5||currentPlayerScore==5){
        if(currentCompScore==currentPlayerScore){
            results.textContent="Final:Tie";
        }
        else if(currentCompScore>currentPlayerScore)
            results.textContent='Final:Computer Wins';
        else
            results.textContent='Final:You Win';
        choices.forEach((choicez) => { choicez.removeEventListener('click',getPlayerChoice);});   
    }
}
function getPlayerChoice(e){
    let playerSelection=(e.target.id);
    playround(playerSelection);
}



