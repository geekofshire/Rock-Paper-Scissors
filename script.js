function getcomputerChoice(){
    let x=Math.ceil(Math.random()*3)
    if(x==1)
        return "Rock";
    else if(x==2)
        return "Paper";
    else
        return "Scissors";
}
function converPlayerChoice(x){
    if(x==1)
        return "Rock";
    else if(x==2)
        return "Paper";
    else
        return "Scissors";
}
//let me= prompt("tell me your name: ");
for(let i=0;i<5;i++){
    let oldplayerChoice= prompt("Enter your choice: ");//rock paper scissors
    let playerChoice=converPlayerChoice(oldplayerChoice);
    let computerChoice= getcomputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    if(playerChoice=="Rock"){
        if(computerChoice=="Scissors")
            console.log("You win");
        else if(computerChoice=="Paper")
            console.log("Computer Wins");
        else if(computerChoice=="Rock")
            console.log("Draw");
    }
    else if(playerChoice=="Paper"){
        if(computerChoice=="Rock")
            console.log("You win");
        else if(computerChoice="Scissors")
            console.log("Computer Wins");
        else if(computerChoice=="Paper")
            console.log("Draw");
    }
    else if(playerChoice=="Scissors"){
        if(computerChoice=="Paper")
            console.log("You win");
        else if(computerChoice=="Rock")
            console.log("Computer Wins");
        else if(computerChoice=="Scissors")
            console.log("Draw");
    }
}
console.log("game Over");