//Inthe fo llowing example, 
//what will be printed in the console? 
//Make sure you first try read this code before pasting 
//it into the console :)


let mylet = "Hello from global";

function scopePractice() {
   let mylet = "Hello from function scope";
}

scopePractice();
console.log(mylet);

let tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}

console.log(tricky);

scopePractice();


