// var i = 1;
// var factorial = 1;
// while(i<=10){
//   factorial = factorial*i;
    
//     i++;
// }
// console.log(factorial);



// function use kore factprial ber kora

function factorial(n){
     var i = 1; //   while e i er man bahire dete hoy r For loop er i er man loop er vitor dete hoy
    factorial = 1;
    while(i<=n){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = factorial(15);
console.log(result);