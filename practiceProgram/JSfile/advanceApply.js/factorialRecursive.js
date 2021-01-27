// 2!=1*2
// 3!=1*2*3
// 4!=1*2*3*4
// 5!=1*2*3*4*5
// 6!=5!*6
// 7!=6!*7
// 8!=(8-1)!*8
// n!=(n-1)!*n
//     =n*(n-1)


function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);