function addNumbers(num1, num2){
    // arguments diye bujhay parameter 2 ta dele o pblm hobe na  argument diye kora jabe..
   var sum = 0;
   for (let i = 0; i < arguments.length; i++) {
       const num = arguments[i];
       sum = sum + num; 
   }
   function logInfo(message){
       console.log(message);
   }
   logInfo('good night');
   return sum;
   
}
var result = addNumbers (3, 5,5,6);
console.log(result);


