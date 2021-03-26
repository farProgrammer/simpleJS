function onlyCapitalLetters(str){
    str ='AMAZING';
    let newStr = '';
    for(let i = 0; i < str.length; i++)
    {
        if(str[i].charCodeAt(0) < 91 && str[i]
        .charCodeAt(0) > 64){
            newStr += str[i];
        }
    }
    return newStr;
}

onlyCapitalLetters();




let personObject = (function(){
    return {
        name:"tim",
        age:38,
        occupation:"developer",
        hobbies:"sailing"
    };
})();


personObject.name; // returns "Tim"
personObject.age; // returns 32
personObject.occupation; // returns "developer"
personObject.hobbies; // returns "sailing"



//this u get in console

//name: "tim", age: 38, occupation: "developer", hobbies: "sailing"}