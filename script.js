console.log("-----------Welcome to Number Guessing Game -------------\n");

let comp = Math.floor(Math.random()*100 + 1);
let guess = parseInt(prompt("Please guess a number between 1 to 100 : "));

while(true){
    if(comp == guess){
        console.log("\n!! Congratulation !!  you have successfully guessed the number : ", comp);
        break;
    }else if(guess > comp){
        guess = parseInt(prompt("\t guess the smaller number : "));
    }else if(guess < comp){
        guess = parseInt(prompt("\t guess the greater number : "));
    }
}
