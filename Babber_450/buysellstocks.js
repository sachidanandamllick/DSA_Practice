let prices = [7,6,4,3,1]

let profit = 0
let buyingprice = prices[0]

for(let i=0;i<prices.length;i++){
    profit = Math.max(profit,prices[i]-buyingprice)
    buyingprice = Math.min(prices[i],buyingprice)
}
console.log(profit);
