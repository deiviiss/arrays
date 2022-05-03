const matriz = [
  [1, 2, 3],
  [4, 5, 6, [7, 8]],
  [9, 0]
]

const newArray = []

for (let i = 0; i < matriz.length; i++) {

  const array = matriz[i];

  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element)
  }
}
console.log('for', newArray);

const rta = matriz.flat(3)
console.log('flat', rta);

//Platzi reto
//itera todos los arreglos
function profundidad(list) {

  let newList = [];

  if (typeof list != "object") return [list];

  list.forEach(element => {

    newList = newList.concat(profundidad(element));

  });

  return newList;

}

const platziArray = profundidad(matriz);
console.log('platziArray', platziArray);
//pasando un objeto a la función profundidad se rompe la función
const object = { propiedad: 'valor', propiedad: 'valor' }

// let test = profundidad(object)
// console.log(test);