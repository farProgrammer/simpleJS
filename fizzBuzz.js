function fizzbuzz(){
    //for(let i = 1; i <= 100; i++){
      //if(i % 3 === 0 && i % 5 === 0){
        //console.log("FizzBuzz");
      //}else if (i % 3 === 0){
        //console.log("Fizz");
      //}else if (i % 5 === 0){
        //console.log("Buzz");
      //}else{
        //console.log(i);
      //}
    //}
  //}
  //fizzbuzz();

  for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
}
fizzbuzz();

function isPangram (sentence){
  for (let char  of 'abcdefghijklmnopqrstuvwxyz'){
console.log(char);

//in console type isPangram() 
if (sentence.indexOf(char)===-1){
return false;
}
  }
  return true;
}

// the  five boxing wizards jump quickly

function pangram(phrase){

for (let line of 'this is a new section'){
   console.log (line);
   if (phrase .indexOf(line)===-1){
return false;
   

}




} 
return true;
}