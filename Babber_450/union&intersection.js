let a = [1, 2, 3, 4, 5], b = [1, 2, 3];

const union = [...a, ...b];
const uniques = new Set(union);

const intersection = a.filter(x => b.includes(x));

console.log("union",uniques)
console.log("intersection",intersection)