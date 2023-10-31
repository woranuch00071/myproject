const animals = ['ant', 'dogs', 'cats', 'Bird']
const message = 'Pracctices make perfect'

// //string includes - includes substring (case sensitive)
// console.log(message.includes('ice')) //true
// console.log(message.includes('make')) //false
// //array includes - includes string in array elements (case sensitive)
// console.log(animals.includes('ats')) //false
// console.log(animals.includes('cats')) //true


animals.reverse()
animals.sort()
console.log(animals)

const nums = [5, 1, 10, 1000, 2, 3, 50]
nums.sort()
console.log(nums) //[1, 10, 1000,  2, 3,  5, 50]
  


const persons = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
  ]
  //return sorted array by fullname (ascending order and ignore case)
  //[ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]


//return sorted array 