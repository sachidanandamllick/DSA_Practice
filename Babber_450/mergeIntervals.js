// Given an array of intervals where intervals[i] = [starti, endi],
//  merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals
//  in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


let intervals = [[1,3],[8,10],[2,6],[15,18]]

console.log(merge(intervals))

function merge(intervals){

 intervals.sort((a,b)=> a[0]-b[0])

 const merged = [intervals[0]];

    for(let i = 0;i<intervals.length;i++){

        let current = merged[merged.length-1]

        let next = intervals[i]
        
        if(next[0]<=current[1]){
            current[1] = Math.max(current[1], next[1]);
        }else{
            merged.push(next);
        }
        
    }

    return merged;
 

}

