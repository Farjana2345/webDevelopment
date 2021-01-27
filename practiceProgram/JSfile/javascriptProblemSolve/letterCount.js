var speach ="i am good person.i    lived in sweden.";
var count = 0;
for(var i = 0; i<speach.length; i++){
    var letter = speach[i];
    if(letter == " " && speach[i-1] !=" "){
        count++;
    }
}
console.log(count);