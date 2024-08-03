let userscore=0;
let comscore=0;

let choices = document.querySelectorAll('.choice');
console.log(choices);

const computerChoice = () =>{
    let choices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

const updateScore = (winner) =>{
    let userScore = document.querySelector('#user-score');
    let comScore = document.querySelector('#com-score');
    if(winner === 'User Wins'){
        userscore++;
        userScore.innerText = userscore;
    }
    if(winner === 'Computer Wins'){
        comscore++;
        comScore.innerText = comscore;
    }
}

let chcekWinner = (userChoice, comChoice) =>{
    let tiemsg = "It's a tie";
    let usermsg = "User Wins";
    let commsg = "Computer Wins";
    
    if(userChoice === comChoice){
        return tiemsg;
    }
    else if(userChoice === 'rock'){
        if(comChoice === 'paper'){
            return commsg;
        }
        else{
            return usermsg;
        }
    }
    else if(userChoice === 'paper'){
        if(comChoice === 'scissors'){
            return commsg;
        }
        else{
            return usermsg;
        }
    }
    else if(userChoice === 'scissors'){
        if(comChoice === 'rock'){
            return commsg;
        }
        else{
            return usermsg;
        }
    }
}
const updateResult = (winner) =>{
    let result = document.querySelector('#result');
    result.innerText = winner;
    if(winner === 'User Wins'){
        result.style.backgroundColor = 'green';
    }
    if(winner === 'Computer Wins'){
        result.style.backgroundColor = 'red';
    }
    if(winner === "It's a tie"){
        result.style.backgroundColor = '#003566';
    }
}

const playGame = (choice) =>{
    console.log("User Choice:",choice);
    let comchoice = computerChoice();
    console.log("Computer Choice:",comchoice);
    let winner = chcekWinner(choice, comchoice);
    console.log(winner);
    updateScore(winner);
    updateResult(winner);


}

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        playGame(choice.id);
    });
   

});