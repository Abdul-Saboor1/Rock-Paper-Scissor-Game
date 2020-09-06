// JavaScript source code
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s"); 

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 
function converttoword(letter) {
    switch (letter) {
        case "r":
            return "Rock";
            break;
        case "p":
            return "Paper";
            break;
        case "s":
            return "Scissors";
    }
}

function win(userChoice , computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    result_p.innerHTML = `${converttoword(userChoice)}${smalluserword} beats ${converttoword(computerChoice)}${smallcompword} . You Winss!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') } , 300);
}

function lose(userChoice , computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    result_p.innerHTML = `${converttoword(userChoice)}${smalluserword}  loses to ${converttoword(computerChoice)}${smallcompword} . You Lose!!!!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
}

function draw(userChoice , computerChoice) {
    console.log("DRAW");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    result_p.innerHTML = `Its a Draw!!`;
    document.getElementById(userChoice).classList.add('black-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('black-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();