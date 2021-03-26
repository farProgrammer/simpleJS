
let firstObj= {
    firstName :"Tim",
    lastName:"Gill",
    isInstructor:true

};
// this is   dot notation how u extract it in console.
firstObj.firstName;
firstObj.lastName;
     firstObj.isInstructor;
firstObj.keyDeosntExist;

// bracket notation method in this 
let obj ={};
let person = "tom";
obj[person]= "this is a person";
obj[1+1+1]= "three";
obj;

//how to extract one at a time;
let idToName = {
    754: "Tim",
    843: "Matt",
    921: "Janey",
    192: "Elie"
};

idToName["754"];  // returns "Tim" ;


let obj1 = {
    name :"jon Snow",
    watchMember:true
};
 delete obj1.watchMember;
obj1.gameOfThrones = "awesome";
obj1;

let emp ={
    firstName:"kabir",
    lastName:"khan",
    occupation:"manager",

}
emp.hobby="cricket";
delete emp.occupation;
emp;

let instructor ={
name :"Matt",
mathWizard:true,
dogOwner :true    
};
for(let singleKey in instructor){
    console.log (instructor[singleKey]);
}

let fav= {
    favNumber:4,
    favColor:'red'
}
if ("favNumber" in fav){
    console.log("the favNumber key exists!");
}
if ("nothing" in fav){
    console.log ("the nothing key exists!");

}
//
let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for(let key in namesAndHobbies){
    console.log(`${namesAndHobbies[key]} => ${key}`)
}

namesAndHobbies.joel = "bridge"

if("joel" in namesAndHobbies){
    console.log("Joel", namesAndHobbies.joel)
}


