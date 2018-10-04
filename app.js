var scores, roundScore, activePlayer, gamePlaying, roll2nd, winningScore;
var winScore = document.querySelector('.final-score').value;


init();

var roll2nd;

//btn-roll
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    
    //1.Random number
    var dice1 = (Math.floor(Math.random() * 6) + 1);
    var dice2 = (Math.floor(Math.random() * 6) + 1);
    
    //2. Display result
    document.querySelector('.dice-1').style.display = 'block';
    document.querySelector('.dice-2').style.display = 'block';
    document.querySelector('.dice-1').src = 'img/dice-' + dice1 + '.png';
    document.querySelector('.dice-2').src = 'img/dice-' + dice2 + '.png';
    
    //3. Update the scoreRound if it is not 1
    
    if(dice1 !== 1 && dice2 !==1){
        //Add score
        roundScore += (dice1 + dice2);
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
        
    else {changePlayer();}
    }
        
//      NUMBER 6 CHALLENGES
        
//    if (dice === 6 && roll2nd ===6){
//        roundScore = 0;
//        scores[activePlayer] = 0;
//        document.getElementById('#score-' + activePlayer).textContent = 0;
//        changePlayer();
//    }
//        
//    else if( dice !== 1){
//        //Add score
//        roundScore += dice;
//        document.getElementById('current-' + activePlayer).textContent = roundScore;
//    }
//        
//    else {changePlayer();}
//    }
    
});


//btn-hold
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
     // ADD SCORE TO GLOBAL
    scores[activePlayer] += roundScore;

    //CHANGE UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        

    }
    
    var input=document.querySelector('.final-score').value;;
    
    if(input){winningScore= input}
    else {winningScore=100;}
    
     //CHECK IF THE PLAYER WON THE GAME
    if (scores[activePlayer] >= winningScore){
        gamePlaying = false;
        document.querySelector("#name-" + activePlayer).textContent = "Winners!!";
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
    }
    
    else{
       changePlayer(); 
    }
});

//btn.new
document.querySelector(".btn-new").addEventListener('click', init);


function changePlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
    
document.querySelector('.dice-1').style.display = 'none';
document.querySelector('.dice-2').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
    
document.querySelector("#name-0").textContent = "Player 1";
document.querySelector("#name-1").textContent = "Player 2";
    
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');    
document.querySelector('.player-0-panel').classList.add('active');
}

//document.querySelector('#current-' + activePlayer).innerHTML = dice;

//var x = document.querySelector('#score-1').innerHTML;
//console.log(x);
