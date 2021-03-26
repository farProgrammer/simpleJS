
//Using a loop, iterate through this array and console.log all of the people.
//Write the command to remove "Greg" from the array.
//Write the command to remove "James" from the array.
//Write the command to add "Matt" to the front of the array.
//Write the command to add your name to the end of the array.
//Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
//Write the command that gives the indexOf where "Mary" is located.
//Write the command that gives the indexOf where "Foo" is located (this should return -1).
//Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

var people = ["Greg", "Mary", "Devon", "James"];

// 1
for(var i =0; i< people.length; i++){
    console.log(people[i]);
}

// 2

people.shift();

// 3

people.pop();

// 4

people.unshift("Matt");

// 5

people.push("Elie");

// 6

for(var i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}

// 7

people.slice(2);

// 8

people.indexOf("Mary");

// 9

people.indexOf("Foo");


// 10

var people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1,"Elizabeth", "Artie");

// 11

var withBob = people.concat("Bob");
