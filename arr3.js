let e = ["javascript","python","ruby","java"];
   e.pop();
   e; //java got removed
   let e = ["javascript","python","ruby","java"];
   e.shift();
   e;//javasript

   let decimals = [ 1.1,1.6,2.8,0.4,3.5,1.6];
   for (let i =0; i<decimals.length;i++){
       decimals[i] = Math.round(decimals[i]);
   }


   for(let i = 0; i<5; i++){
    if(Math.random() > 0.5){
        console.log("Skipping the console.log when i is " + i);
        continue;
    }
    console.log(i);
}
// ans:- 0,1,skipping the console.log when i is 2;3;4;undefined.


let names = ["Elie", "Matt", "Tim"];
for (let name of names) {
    console.log(name);
}
//ans:- Elie,Matt,Tim

let name = "Elie";

for(let i=0; i < name.length; i++){
    console.log(name[i]);
}

// E
// l
// i
// e