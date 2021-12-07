(function (){
    "use strict";
    var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numlettersMatched, message;

    function setup(){
        availableLetters="abcdefghijklmnopqrstuvwxyz";
        words=["apple", "monkey", "warning", "flash", "cat", "bill"];
        lives= 6;
        messages={
            win:'You win!',
            lose: "You lose!",
            guessed: "WRONG! guess again",
            vaildLetter: "Please enter a letter from A-Z",
        };

        lettersGuessed = lettersMatched ='';
        numLettersMatched=0;

        currentWord = words[Math.floor(Math.random()* words.length)];
        output= document.getElementById('output');
        man = document.getElementById('man');
        guessInput= document.getElementById('letter');

        man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML='';

        document.getElementById('letter').value='';

        guessButton = document.getElementById("guess");
        guessInput.style.display ='inline';
        guessButton.style.display ='inline';

        letters = document.getElementById('letters');
        letters.innerHTML ='<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';

        var letter, i;
        for(i=0; i <currentWord.length; i++){
            letters.insertAdjacentElement('beforeend', letter);
        }
    }

    function gameover (win){
        if(win){
            output.innerHtml = message.win;
            output.classList.add('win');
        }else{
            output.innerHTML= messages.lose;
            output.classList.add('error');
        }
        guessInput.style.display= guessButton.style.display = 'none';
        guessInput.value ='';
    };
    document.getElementById('hangman').onsubmit = function (e){
        if(e.preventDefault)e.preventDefault();
        output.innerHTML='';
        output.classList.remove('error', 'warning');
        guess = guessInput.value;
        if(guess){
            if(availableLetters.indexOf(guess)>-1){
                if((lettersMatched && lettersMatched.indexOf(guess) >-1) || (lettersGuessed && lettersGuessed.indexof(guess)>-1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + message.guessed;
                    output.classList.add("warning");
                }  
                else if (currentWord.indexOf(guess) >-1){
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll(". letter" + guess.toUpperCase());
                    for ( var i = 0; i < lettersToShow.length; j++) {
                        lettersToShow[i].classList.add('correct');

                    }

                    for(var j = o; j < currentWord.length; j++){
                        if(currentWord.charAt(j)=== guess){
                            numLettersMatched +=1;
                        }
                    }
                lettersMatched+= guess;
                if(numLettersMatched === currentWord.length){
                    gameOver(true);
                }

                         
        }
else {
    lettersGuessed += guess;
    lives--;
    man.innerHTML = 'You have' + lives + 'lives remaining';
    if(lives===0) gameOver();
}
    }
    else{
        output.classList.add('error');
        output.innerHTML = messahes.vaildLetter;
    }
    return false;

        }    
};
    }());