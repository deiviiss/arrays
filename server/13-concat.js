const elements = [1, 1, 2, 2]
const othersElements = [3, 3, 4, 4]

//duplica el array sin copiar la referencia
const newArray = [...elements]

for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element)
}

console.log('for', newArray);

const rta = elements.concat('random')

console.log('rta', rta);

const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...othersElements);
console.log('elements', elements);