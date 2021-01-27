var number = [12, 2, 3, 8, 2, 3, 2, 12, 5];
var uniqueNumber = [];

for(var i = 0; i<number.length; i++){
    var element = number[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1){
        uniqueNumber.push(element);
    }
}


