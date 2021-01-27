// function evenOdd_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if(num % 2 == 0){
//             console.log(num,': is even number');
//         }
//         else{
//            console.log(num*3,': is odd number');
//         }   
//     }
//  }



function evenOdd(num){
    if(num % 2 == 0){
       return(num);
    }
    else{
       return num*3;
    }
 }
 var result = evenOdd(13);
 var square = result*result;
 console.log('square',square);
//  var result = evenOdd(13);
//  console.log(result);

//  function evenOdd_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//        evenOdd(num);   
//     }
//  }

 function evenOdd_all(nums){
     var arr =[];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
       var result = evenOdd(num); 
       arr.push(result);  
    }
    return arr;
 }
 var nums = [10, 20,33,31,35];
 var num_even = evenOdd_all(nums);
 console.log(num_even);