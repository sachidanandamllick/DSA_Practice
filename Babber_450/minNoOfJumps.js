 let arr= [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]

 let length = arr.length , remaining = 0,i = 0, jumps = 0

 while(remaining<length-1){
    if(arr[i] ===0){
        console.log(-1);
        break;
    }
    remaining+=arr[i]
    jumps++
    i = arr[i]
    
 }

 console.log("jumps",jumps);
 
// Time Complexity: O(n) where n is the number of elements in the array
// Space Complexity: O(1) as we are using a constant amount of space to store the variables.
