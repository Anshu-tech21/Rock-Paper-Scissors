 let ComputerMove='';
        function pickComputerMove(){
             const randomNumber = Math.random();
        
         if(randomNumber >=0 && randomNumber < 1/3){
           ComputerMove='Rock';
         }else if(randomNumber >= 1/3 && randomNumber < 2/3){
            ComputerMove='Paper';
         }else if(randomNumber >=2/3 && randomNumber < 1){
             ComputerMove='Scissors';
         }
        }