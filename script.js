    const score = JSON.parse(localStorage.getItem
     ('score')) || {
      wins:0,
      looses: 0,
      ties: 0
    }
      updateScore();

        function playGame(playerMove){
          const ComputerMove= pickComputerMove();
         
         let result = '';
         
         if(playerMove == 'Scissors'){
          if(ComputerMove==='Rock'){
            result = 'Loose'
         }else if(ComputerMove=='Paper'){
            result='Win';
         }else if(ComputerMove=='Scissors'){
            result='Tie';
         }

         }else if(playerMove == 'paper'){
      
         if(ComputerMove==='Rock'){
            result = 'Win'
         }else if(ComputerMove=='Paper'){
            result='Tie';
         }else if(ComputerMove=='Scissors'){
            result='Loose';
         }
         }else if(playerMove == 'rock'){
  
         if(ComputerMove==='Rock'){
            result = 'Tie'
         }else if(ComputerMove=='Paper'){
            result='Loose';
         }else if(ComputerMove=='Scissors'){
            result='Win';
         }
         }

         if(result === 'Win'){
            score.wins += 1;
         }else if(result === 'Loose'){
            score.looses += 1;
         }else if(result === 'Tie'){
            score.ties += 1 ;
         }
         localStorage.setItem('score', JSON.stringify(score));

          updateScore();
         
        alert(`You Picked ${playerMove} . Computer Picked ${ComputerMove} . ${result}`);
        }

        function updateScore() {
         document.querySelector('.js-score').innerHTML =
           `Wins: ${score.wins}, Losses: ${score.looses}, Ties: ${score.ties}`;
}
 
        function pickComputerMove(){
             const randomNumber = Math.random();
          let ComputerMove='';
         if(randomNumber >=0 && randomNumber < 1/3){
           ComputerMove='Rock';
         }else if(randomNumber >= 1/3 && randomNumber < 2/3){
            ComputerMove='Paper';
         }else if(randomNumber >=2/3 && randomNumber < 1){
             ComputerMove='Scissors';
         }
         return ComputerMove;
        }