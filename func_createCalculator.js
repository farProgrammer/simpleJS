let calc = createCalculator ();
function createCalculator() {
    return{
        add:function(a,b){
            return a+b;
        },
        subtract: function(a,b){
            return a-b;
        },
        multiply:function(a,b){
            return a*b;
        },
        divide: function(a,b){
            return  a/b;
        }
    }
}
createCalculator(); 

 console.log( calc.add(20,20)); // 40
console.log(calc.subtract(2,2)); // 0
   console.log (calc.multiply(2,2)); // 4
  console.log (calc.divide(12,2)); // 6

