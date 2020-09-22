let nums = [3, 8, 7, 6, 5, -4, -3, 2, 1 ];
console.log(nums)
 function sortArray(arr) {
     let tmp;
     let len = arr.length;
 
     for(let i = 0; i < len; i++) {
         for(let j = i + 1; j < len; j++) {
            if(arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
            
         }
     }
     return arr;
 }
 
 console.log(sortArray(nums));