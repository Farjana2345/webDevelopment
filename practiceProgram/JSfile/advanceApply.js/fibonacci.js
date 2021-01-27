

// fibo[2]=fibo[2-1] + fibo[2-2];
// fibo[3]=fibo[3-1] + fibo[3-2];
// fibo[4]=fibo[4-1] + fibo[4-2];
// fibo[5]=fibo[5-1] + fibo[5-2];
// fibo[6]=fibo[6-1] + fibo[6-2];
// fibo[7]=fibo[7-1] + fibo[7-2];
// fibo[n]=fibo[n-1] + fibo[n-2];
// fibo[i]=fibo[i-1] + fibo[i-2];


// var fibo = [0, 1];
// for(i = 2; i <=10; i++ ){ // ae khane i=2 hoise karon opore var man 0,1 theke sro hyse fibo 0,1thekei shro hy 
//     fibo[i] = fibo[i-1] + fibo[i-2];
   
// }
// console.log(fibo);

// function niyome o kra jay

function fibonacci(n){
    var fibo = [0, 1];
    for(i = 2; i<=n; i++){
        fibo[i] = fibo[i - 1] + fibo [i - 2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);