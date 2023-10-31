// const studentScores = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 92 },
//     { name : 'DAVID', score: 79},
//     { name: 'Charlie', score: 68 },
//     { name: 'David', score: 55 },
//     { name: 'Eve', score: 78 },
//     { name: 'david', score: 85 }
//   ]

//   // const result = studentScores.filter (
//   //   (student) => student.name.toLowerCase() === "david" &&  student.score > 80)
    
//   // console.log(result)

//   const foundIndex = studentScores.findIndex(
//     (student) => student.name.toLowerCase() === 'ann'
//   )
//   console.log(foundIndex)
const fruits = ['apple', 'mango', 'orange', 'pineapple']
console.log(fruits.every(fruit => {
console.log(fruit[0])
return ['a','e','i','o','u'].includes(fruit[0].toLowerCase())
}))

let check = fruits.every(
  (n) =>
    n.toLowerCase().startsWith('a') ||
    n.toLowerCase().startsWith('e') ||
    n.toLowerCase().startsWith('i') ||
    n.toLowerCase().startsWith('o') ||
    n.toLowerCase().startsWith('u')
)
// return boolean to check whether fruits collection startwiths vowel characters.


 
 