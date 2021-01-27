function fibonacciIterative(num){
    var fibo = [1 ,1];
    for(var i = 2; i<=num; i++){
        var nextPart = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextPart);
    }
    return fibo;

}
var fiboResult = fibonacciIterative(10);
console.log(fiboResult);