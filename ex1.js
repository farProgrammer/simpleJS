//Write the command to add the language "Go" to the end of the languages array.
//Change the difficulty to the value of 7.
//Using the delete keyword, write the command to remove the jokes key from the programming object.
//Write the command to add a new key called isFun and a value of true to the programming object.
//Using a loop, iterate through the languages array and console.log all of the languages.
//Using a loop, console.log all of the keys in the programming object.
//Using a loop, console.log all of the values in the programming object.

//answers

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

// 1

programming.languages.push("Go");

// 2

programming.difficulty = 7;

// 3

delete programming.jokes;

// 4

programming.isFun = true;

// 5

for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}

// or 

for (let language of programming.languages) {
    console.log(language);
}

// 6

for (let key in programming){
    console.log(key);
}

// 7

for (let key in programming){
    console.log(programming[key]);
}