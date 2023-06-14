console.log("js ok");
//Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
// Stampare in console la bici con peso minore utilizzando il destructuring

const biciclette = [
  {
    name: "Blubici",
    weight: 7,
  },
  {
    name: "Biancobici",
    weight: 6,
  },
  {
    name: "Verdebici",
    weight: 5,
  },
];

const { name, weight } = biciclette;
console.log(biciclette);

const lighter = biciclette.reduce((acc, wei) =>
  acc.weight < wei.weight ? acc : wei
);
console.log(lighter);
