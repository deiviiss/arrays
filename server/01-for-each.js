const letters = ['a', 'b', 'c', 'd']

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];

  console.log('for', element);
}

letters.forEach(element => { console.log('for each', element); })