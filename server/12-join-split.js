const elements = ['air', 'fire', 'water']

let rtaFinal = '';
const separator = '--'

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator
}

console.log('for', rtaFinal);

//une todos los objetos de un array y los separa como lo indiquemos
const rta = elements.join('--')

console.log('rta', rta);

const title = 'Curso de manipulación de Arrays'

//split convierte en un array separados por lo que le indiquemos
const urlFinal = title.split(' ').join('-').toLowerCase
console.log(urlFinal);