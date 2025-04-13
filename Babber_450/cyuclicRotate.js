let arr = [1,2,3,4,5], k = 2

for(let j = 1;j<=k;j++){
for(let i = arr.length-1;i>0;i--){
    let temp = arr[i];
    arr[i] = arr[i-1]
    arr[i-1] = temp;
}
}
console.log(arr);
