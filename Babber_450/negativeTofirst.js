let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// sort the array in asending order
for(let i = 0;i < arr.length;i++){
    for(let j = i+1;j < arr.length;j++){
    if(arr[i]>arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
}
console.log(arr);
