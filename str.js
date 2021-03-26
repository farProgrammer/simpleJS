

//Write a function called strLetterCount 
//which accepts a string and returns a new string 
//with each character followed by the number of times it appears in the string. The characters should be returned in the same order as the string with each unique letter followed by the number of times 
//it appears in the string

function strLetterCount (str){
    str ='taco';
    // create an object to store each letter
    const countObj = {}
    // iterate over the string
    for (let i = 0; i < str.length; i++) {
        // if the letter isn't stored in the object, add it with a count of one
        if (!countObj[str]) {
            countObj[str] = str;// this is the one place need to change.
        } else {
            // if the letter is already in the object, increment the count
            countObj[str]++;
        }
    }
    // create a string to add the letter / count to
    let outStr = "";
    // iterate over the object to create the string
    for (const letter in countObj) {
        outStr += `${letter}${countObj[letter]}`;
    }
    // return the string
    return outStr;
}




  strLetterCount(); //'t1a1c1o1'

  //function should pass a string as argument
  //loop through the string and if a new char is entered store that 
  //loop through string again and count num of new char
  //returns a new string push charAt and numOfOcc
//It should return the output of 't1a1c101' , however, I am only getting it to loop through the string once and return th