let arr = [7, 10, 4, 3, 20, 15], k = 3

//sort the array
for(let i= 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr[k-1]);