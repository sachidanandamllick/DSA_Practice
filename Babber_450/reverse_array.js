let arr = [1,2,3,4,5,6]

let tpm_arr = []

for(i  = arr.length-1;i>=0;i--){
    tpm_arr.push(arr[i]);
}
arr = tpm_arr;
console.log(arr);
