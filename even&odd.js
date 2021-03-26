let num =prompt("please enter whole number!");
let message;
if (num%2===0){
    message="this is an even number"
}else{
    message= "this is an odd number"
}
console.log("the message is :",message);


//----*************------
let x=prompt("write a number");
let output;
if (x%2 ===0){
  output=  "it is a even Number";
}else{
    output="it is odd number";
}
console.log ("the output is :",output);

function getRandomInt(max){
    return Math.floor(Math.random()* Math.floor(max));
}
console.log(getRandomInt(5));
//----*************------

function getRandomInt(min){return Math.floor
   (Math.random()*Math.floor(min));
}
console.log(getRandomInt(12));

//----*************------
if (Math.random()>0.5){
    console.log("Over 0.5");

}else{
    console.log("Under 0.5");
}