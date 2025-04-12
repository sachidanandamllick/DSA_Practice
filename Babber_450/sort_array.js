 let arr = [0, 1, 2, 0, 1, 2]

// for(let i =0;i<arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

let low = 0,mid = 0,high = arr.length-1;

while(mid<=high){
    if(arr[mid] === 0){
        [arr[low],arr[mid]] = [arr[mid],arr[low]]
        low++
        mid++
    }else if(arr[mid] === 1){
        mid++
    }else{
        [arr[mid],arr[high]] = [arr[high],arr[mid]]
        high--
    }
}

console.log(arr)