let k = 2, arr=[1, 5, 8, 10]

let sortedArray = arr.sort((a, b) => a - b)

let maxDifference = sortedArray[sortedArray.length-1] - sortedArray[0]

console.log("max diffrerence",maxDifference);
let smallest = sortedArray[0]+k
let largest = sortedArray[sortedArray.length-1]-k

for(let i = 0; i < sortedArray.length-1; i++) {
    let min = Math.min(smallest,sortedArray[i+1]-k)
    let max = Math.max(largest,sortedArray[i]+k)

    if(min<0)continue

    maxDifference = Math.min(maxDifference,max-min)
}

console.log("max difference ",maxDifference);

//find to min difference between two numbers in array with k 
// we have to sort the array and add k to the smallest number and subtract k from the largest number
// then we have to find the min difference between the two numbers in the array
// we have to do this for all the numbers in the array


