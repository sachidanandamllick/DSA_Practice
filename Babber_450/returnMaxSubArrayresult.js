let arr = [2 ,3, -8, 7, -1, 2, 3]

let max = arr[0]
let maxSeen = arr[0]

for(let i = 1; i < arr.length; i++) {
    maxSeen = Math.max(maxSeen+arr[i], arr[i])
    max = Math.max(max,maxSeen)
}
console.log(max);

//this is kadens algorithm

