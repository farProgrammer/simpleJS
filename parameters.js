function add(num1,num2)
{
    return 5 + 4;
}
add();
//
//
let globeVariable= "i live in globe scope";
let k = "i am in";
let k1;
let globeVariableToBeChanged;
;
function makenewScope(){
    globeVariableToBeChanged = "undefined,no more";
  k1= "perfect you changed the k";

}
globeVariable;
makenewScope();
globeVariableToBeChanged;
k1;


let myFirstName = "Elie";
function sayHello(str){
    if(str === myFirstName){
        return "Hello Boss";
    }
    return "Hello " + str;
}


function average(arr) {
    arr= [1,2,3,4,5];
    let total = 0;
for (let i=0;i<arr.length;i++){
    total +=arr[i];
}
return total/arr.length;
    
}
average();