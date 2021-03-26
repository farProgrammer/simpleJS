arr = [4,5,6,4,6,3,5,4,3,2,4,1,4,4];
function dedupe(data){
    
    let unique = [];
    data.forEach(element=>{
        if (!unique.includes(element)){
            unique.push(element)
        }

    });
    return unique;
         
}
console.log(dedupe(arr));

//****** */

arr = [4,5,6,4,6,3,5,4,3,2,4,1,4,4];
function dedupe(data){
    return[...new Set(data)]

}
console.log(dedupe(arr));