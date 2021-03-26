
  function strLetterCount(word) {

let strArr = word.split("");
        // new array without duplicate letter
        let strArrWithoutDuplicates =
         strArr.filter((value, idx, arr) => 
         arr.indexOf(value) === idx);
        let retString = "";
        // loop through the "strArrWithoutDuplicates" array to find the number of times
        // each elemet appears on the original array
 strArrWithoutDuplicates.forEach(letter => {
            retString += letter;
            retString += strArr.filter((value) => 
            (value === letter)).length;
        });
        return retString;
    
    }
    let a = strLetterCount('taco'); //'t1a1c1o1'
    console.log(a)

    function Char_Counts(str1) {
        var uchars = {};
        str1.replace(/\S/g, function(l){uchars[l] 
            = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
        return uchars;
        }
        console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));