function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;

    }
    return sum;
}

var numbers = [10, 30, 25];
var result = getArraySum(numbers);
console.log("total Number of the value: ", result);

var total = getArraySum([20, 50,55]);
console.log("total Number of the value: ", total);

