// Given an array of integers arr[]. Find the Inversion Count in the array.
// Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum. 

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).



let arr = [10,10,10]
// let inversionCount = 0;
// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if (arr[i] > arr[j]) {
//             inversionCount++
//         }
//     }
// }
// console.log(inversionCount);



//another way to in the merge sort way
console.log(mergeSortAndCount(arr))

function mergeSortAndCount(arr) {
    if (arr.length < 2) {
        return 0;
        }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    let inversionCount = mergeSortAndCount(left) + mergeSortAndCount(right);
    inversionCount += mergeAndCount(left, right);
    return inversionCount;
    function mergeAndCount(left, right) {
        let i = 0, j = 0, count = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                i++;
                } else {
                count += left.length - i; // Count inversions
                j++;
                }
        }
        return count;
    }
}