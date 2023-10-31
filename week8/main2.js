// const fruits = ['apple', 'mango', 'orange', 'pineapple']
// // concat with the first character of all fruit
// //'amop'
// const result = fruits.reduce((firstChars, fruit) => firstChars.concat(fruit.charAt(0))
// , '')
// console.log(result)
// const str = 'apple' //array of characters

// const nums = [1,2,3,4,5]
// const mulResult = nums.reduce((mul, num) => mul*num)
// console.log(mulResult)

const sellProducts = [
    {id: 1, price: 100, sell: 5},
    {id: 2, price: 50, sell: 2},
    {id: 3, price: 25, sell: 10}
]
//return selling's total prices

const totalPrice = sellProducts.reduce((total, product) => total + (product.price * product.sell) , 0)
console.log(totalPrice)