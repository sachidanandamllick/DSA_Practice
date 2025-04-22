// let arr1 = [1,2,3,4,5,6,7,8] , arr2= [9,10,23,43,56,67,89] 
// arr2 = [...arr1, ...arr2]
// arr2.sort ((a,b)=>a-b)
// console.log(arr2);


// var merge = function(nums1, m, nums2, n) {
//     for(let i = m,j = 0;j<n;i++,j++){
//         nums1[i] = nums2[j]
//     }
//     nums1.sort((a,b)=> a-b)
//     return nums1
// };


let a = [1, 2, 4, 10];
let b = [2, 3];
let m = a.length;
let n = b.length;

a.length = m + n;

let p1 = m - 1;
let p2 = n - 1;
let p = m + n - 1;

while (p1 >= 0 && p2 >= 0) {
    if (a[p1] > b[p2]) {
        a[p] = a[p1];
        p1--;
    } else {
        a[p] = b[p2];
        p2--;
    }
    p--;
}

while (p2 >= 0) {
    a[p] = b[p2];
    p2--;
    p--;
}

console.log(a);
