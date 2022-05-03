const items = [1, 3, 2, 31, 6, 7, 81, 3, 9, 9];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(`the rta ${rta}`)
console.log(rta);;

const rta2 = items.reduce((object, value) => {
  if (value < 5) {
    object['1-4'] += 1
  }

  if (value < 9) {
    object['5-8'] += 1
  }

  if (value < 10) {
    object['9-10'] += 1
  }

  return object
})

console.log(`the rta2 ${rta2}`);
console.log(rta2);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data.map(item => item.level).reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(rta1);

