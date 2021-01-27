function megaFriend(arr){
    var large = [];
     for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
            if( large.length < element.length){
            large = element
        }
        else if(arr[i] == -1){
            return 'return value';
        }
     }
    return large;
}

var  largestFriend = megaFriend(["lima","farjana akhter shimu","azharul islam","amena begum rito"]);
console.log(largestFriend);