let nums =[1,2,3,2]

// var findDuplicate = function(nums) {
//     let resultSet = new Set();

//     for (let num of nums) {
//         if (resultSet.has(num)) {
//             return num; 
//         }
//         resultSet.add(num);
//     }

//     return -1;
// };

// findDuplicate(nums)


let slow = nums[0];
let fast = nums[0];

do{
    slow = nums[slow]
    fast = nums[nums[fast]]
}while(slow !== fast);

slow = nums[0]

while(slow!==fast){
    slow = nums[slow]
    fast = nums[fast]
}
console.log("duplicate",slow);


