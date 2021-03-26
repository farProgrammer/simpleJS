function displayOddNumbers(){
    let num = [1,2,3,4,5,6,7,8,9,10];
    for (let i =0;i<num.length;i++){
        if (num[i]%2!==0){
            console.log(num[i]);
        }
    }
}
displayOddNumbers();


//
function displayEvenNumbers(){
    let num= [1,2,3,4,5,6,7,8,9,10];
    for ( let i=0;i<num.length;i++){
        if (num[i]%2 ===0){
            console.log (num[i]);
        }
    }
}
displayEvenNumbers();


function returnFirstOddNumber(){
    let num=[1,2,3,4,5,6,7,8,9,10];
    for ( let i = 0;i < num.length;i++){
        if (num [i] % 2 !==0){
            return num[i];
        }
    }
}
returnFirstOddNumber();


function  returnFirstEvenNumber(){
    let num = [1,2,3,4,5,6,7,8,9,10];
    for (let i = 0;i<num.length;i++){
        if(num[i]%2===0){
            return num[i];
        }
    }
}
returnFirstEvenNumber();