
let arr = [];
arr.unshift("farheena");
arr;
arr.push("khan");
arr;
arr.unshift("red");
arr;
arr.shift(0);
arr;

let arr2 =[28,"javascript"];
arr2;
let k = prompt("what is the value?");



 
if(arr2.indexOf(k)>-1){
  alert(" value is is in arr2");
}
else{
    alert ("value is not present")
}

console.log (arr2);

let combined= arr.concat(arr2);
combined;


for (let i = 0;i<5;i++)
{
    console.log(i);
}

let decimals =[1.1,1.6,2.8,0.4,3.5,1.6];
for(let i =0;i<decimals.length;i++){
    decimals[i] = Math.round(decimals[i]);
}


let number = 45;
if(number == "45"){
    console.log("yes!");
} else{ console.log ("no")
};
let x =4;
if (x<=5){
    console.log("x is less than or equal to five");
    } else{
        console.log("x is not less than or equal to five!");
    }