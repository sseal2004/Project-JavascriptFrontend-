 //ParseInt is a property
    //Number from 1 to 100
    const secretnum = Math.floor(Math.random()*100)+1;
   
    function checkGuess(){
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('feedback');

    if(guess < 1||isNaN(guess)||guess > 100 ){
        result.innerText = "Please enter a number between 1 and 100."
        return;
    }


    if(guess < secretnum){
        result.innerHTML = `🔻Too low! Try again.<br> Your Secrete Number is : ${secretnum}`;
        

    }else if(guess >secretnum){
        result.innerHTML = `🔺Too high! Try again.<br>Your Secrete Number is : ${secretnum}`;
        

    }else{
        result.innerText = "🎉 Correct! You guessed the number!";

    }

  // Reload the page after 2 seconds
  setTimeout(()=>{
    location.reload();
  },2000)

   }


   