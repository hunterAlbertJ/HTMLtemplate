console.log("script Loaded")
function computerChoice(){
    if (num <= .33){
        return "rock"
    } else if(num <= .66) {
        return "scissors"
    } else {
        return "paper"
    }
}
let possibleInputs = ["rock", "paper", "scissors"];
let input = prompt("rock paper or sciossors!").toLowerCase
let computerInput = computerChoice(Math.random());

if(input === undefined || possibleInputs.indexOf(input) === -1){
    alert("input valid data");
    return
}
if(input === computerChoice){
    alert("Tie")
} else if(input === "rock" && computerInput === "scissors"){
    alert("Win!")
}else if(input === "paper" && computerInput === "rock"){
    alert("Win!")
} else if(input === "scissors" && computerInput === "paper"){
    alert("Win!")
} else {
    alert("LOSER")
}