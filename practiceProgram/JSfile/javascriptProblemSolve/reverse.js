function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var stetement = "Hello i mam farjana.";
var forAlien = reverseString(stetement);
console.log(forAlien);

var foodBlog = reverseString("khida lagse");
console.log(foodBlog);



