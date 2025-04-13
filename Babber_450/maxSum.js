//let arr = [2, 3, -8, 7, -1, 2, 3]
let arr = [-2,-4]
let maxSum = arr[0]
let globalSum  = arr[0]

for(let i =1;i<arr.length;i++){
    maxSum = Math.max(arr[i],maxSum+arr[i])
    globalSum = Math.max(globalSum,maxSum)
}
console.log(globalSum);
