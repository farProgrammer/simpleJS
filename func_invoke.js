let personObject = (function invokeRightAway(){
    let person = "Elie";
    return{
        getName:function(){
            return person;
        },
        setName:function(newName){
            person = newName;
        }
    }
})();




personObject.getName();  // "Elie"
personObject.setName("Mary");//
personObject.getName();  // "Mary"
//person;  // ReferenceError: person is not defined