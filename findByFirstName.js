//Write a function called findStudentByFirstName, 
//which accepts one parameter, a string. 
//This function should iterate through the students
// array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

// let's first create some students
//let tim = ("Tim", "Garcia");
//let matt = ("Matt", "Lane");
//let elie =("Elie", "Schoppik");
//let students = [tim, matt, elie];


function createStudent(firstName, lastName){
    return {
        firstName: "firstname",
        lastName:"lastName",
    }
}
//createStudent();
                   
function findStudentByFirstName(students) {
    //name:'elie';
    //let tim = ("Tim", "Garcia");
//let matt = ("Matt", "Lane");
//let elie =("Elie", "Schoppik");
     students = [Tim, Matt, Elie];
    let lowerCasedName = students.toLowerCase();
 for(let i = 0 ; i < students.length ; i++)
    {
    if(students[i].firstName.toLowerCase()===lowerCasedName){
            return true;
        }
    }
    return false;
} 

findStudentByFirstName();

//name='elie' // true
//findStudentByFirstName('Elie') // true
//findStudentByFirstName('Janey') // false
//findStudentByFirstName('Janey') // false
//findStudentByFirstName('TIM') // true
//findStudentByFirstName('MMMaaaTTTtttTTT') // false
