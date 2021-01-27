var marks = [20, 50, 66, 78, 10, 30,55];
var max =marks[0];
for(var i = 0; i< marks. length; i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("Height value is:" ,max);

