let playerWin = 0;
let computerWin = 0;
let ties = 0;
const MAX_GAMES = 5;

// Returns a random choice 
function getComputerChoice(){
    const choices = ["Rock","Paper","Scissors"];
    return choices[(Math.floor(Math.random()*choices.length))];
}

// function playRound(playerChoice, computerChoice){
//     playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
//     if ((playerChoice == 'Rock' && computerChoice == 'Scissors') ||
//         (playerChoice == 'Paper' && computerChoice == 'Rock') || 
//         (playerChoice == 'Scissors' && computerChoice == 'Paper')
//     ){
//         console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
//         playerWin++;
//     }
//     else if(playerChoice == computerChoice){
//         console.log(`It's a tie! Both selected ${playerChoice}`);
//         ties++;
//     }
//     else{
//         console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
//         computerWin++;
//     }
// }
// function playGame(){
    
    //     for (let i = 0; i < MAX_GAMES; i++){
        //         playRound(prompt("Choose your hand: "), getComputerChoice());
//     }
//     console.log("Statistics");
//     console.log(`Player Won: ${playerWin}`);
//     console.log(`Computer Won: ${computerWin}`)
//     console.log(`Ties: ${ties}`);
//     console.log(`Games played: ${MAX_GAMES}`);
// }

// playGame();


function playRound(playerChoice){
    console.log("Player clicked on: " + playerChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer chose: " + computerChoice);
    if ((playerChoice == 'Rock' && computerChoice == 'Scissors') ||
        (playerChoice == 'Paper' && computerChoice == 'Rock') || 
        (playerChoice == 'Scissors' && computerChoice == 'Paper')
    ){
        console.log(`You Won! ${playerChoice} beats ${computerChoice}`);
        playerWin++;
    }
    else if(playerChoice == computerChoice){
        console.log(`It's a tie! Both selected ${playerChoice}`);
        playerWin++;
        computerWin++;
    }
    else{
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        computerWin++;
    }
    const container = document.querySelector("#container");
    const row = document.createElement("div");
    row.textContent =  playerChoice + " | " + computerChoice + " | " 
                        + playerWin + "-" + computerWin
    row.setAttribute('style', 'color: blue; background: white;');
    container.appendChild(row);
    if (playerWin + computerWin >= 5){
        const row = document.createElement("div");
        let winner;
        if (playerWin > computerWin)
            winner = "Player"
        else
            winner = "Computer";
        row.textContent = "Winner is " + winner;
        container.appendChild(row);
    }
}