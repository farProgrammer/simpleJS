//Write a function called countEvensAndOdds 
//which accepts an array as a parameter. 
//This function should return an object with 
//the count of even numbers and the count of odd 
//numbers. The object returned should have the keys 
//oddCount and evenCount.

function countEvensAndOdds(arr){
    arr =[1,2,3,4,5,6,7];
    let countObj = {
        oddCount:0,
        evenCount:0,
    }
    for (let i = 0;i<arr.length;i++){
        if (arr[i]% 2 ===0){
            countObj.evenCount++;
        } else  {
            countObj.oddCount++;
        }
    }
    return countObj;

}
countEvensAndOdds();

