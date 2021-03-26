function first(){
    console.log ("this is first function!");
}
first();


//returning value from function 
 function fun (){
     return "i just wrote my first return function";
 }
 fun();

 let returnValue = fun();
console.log(returnValue);


function secondFunction(){
    return  "hello";
    return  "goodbye";
}
secondFunction();  // u get only hello 


//Conditional Logic With Return Statements
function isOverPointFive(){
    if (Math.random() > .5){
        return true;
    } else {
        return false;
    }
}
isOverPointFive();


function myName(){
    let name= "farheena khan";
    console.log (name);
}

myName();
//

 favoriteFood =["pizza","ice cream"];

function randomFood(){
  
let randomIndex = Math.floor(Math.random()*favoriteFood.length);

console.log (favoriteFood [randomIndex]);
}
randomFood();

function displayOddNumbers(){
    let num = [1,2,3,4,5,6,7,8,9,10];
    for (let i= 0;i<num.length;i++){
    if (num [i]%2 !==0){
     console.log(num[i]);
    }
}
}
displayOddNumbers();

