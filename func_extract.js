//Write a function called extractEveryThird which 
//accepts an array as a parameter. 
//The function should iterate over the array and 
//return a new array with every 3rd element 
//in the array passed to the function.

function extractEveryThird(arr){
 arr = [1,2,3,4,5,6];
    let newArr= [];
    for (let i =2; i <arr.length;i +=3){
        newArr.push(arr[i]);

    }
    return newArr;

}
extractEveryThird();

function extractEveryfifth(k){
    k = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let l =[];
    for (i = 4;i<k.length;i +=5){
        l.push(k[i]);
    }
    return l;
}
extractEveryfifth();

