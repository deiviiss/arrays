const letters = ['a', 'b', 'c', 'd']

// const newArray = []
// for (let index = 0; index < letters.length; index++) {
//   const element = letters[index];
//   newArray.push(element + '++')
// }

//?map retorna los elementos recorridos en un nuevo array

const newArray = letters.map(item => item + '++')

console.log(`original`, letters);
console.log(`new`, newArray);