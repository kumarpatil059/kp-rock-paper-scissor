let score= JSON.parse(localStorage.getItem('score'));

if(score===null){
    score={
    wins:0,
    losses:0,
    ties:0
    };
}

updateScoreElement();

function playGame(playerMove){
    const computerMove=pickComputerMove();
let result=' ';
if(playerMove==='scissors'){
    
    if(computerMove==='rock'){
            result='loose';
        }
        if(computerMove==='paper'){
            result='win';
        }
        if(computerMove==='scissors'){
            result='tie';
        }

}
    else if(playerMove==='paper'){
        if(computerMove==='rock'){
            result='win';
        }
        if(computerMove==='paper'){
            result='tie';
        }
        if(computerMove==='scissors'){
            result='loose';
        }

}
    else if(playerMove==='rock'){
        if(computerMove==='rock'){
    result='tie';
        }
        if(computerMove==='paper'){
            result='loose';
        }
        if(computerMove==='scissors'){
            result='win';
        }
}
if(result==='win'){
    score.wins+=1;

}
else if(result==='loose'){
    score.losses+=1;
}
else if(result==='tie'){
    score.ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').
innerHTML=`you ${result}`;

document.querySelector('.js-moves').
innerHTML=`you 
<img src="${playerMove}-emoji.png"
class="move-icon">
<img src="${computerMove}-emoji.png"
class="move-icon">
computer`;


}




function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`wins: ${score.wins},
losses :${score.losses},
ties: ${score.ties}`;

}

function pickComputerMove(){
    let  computerMove= ' ';
        const randomNumber=Math.random();
        if(randomNumber>=0 && randomNumber<1/3){
            computerMove='rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove='paper';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
            computerMove='scissors';
        }
    return computerMove;

}