console.log("js ok");
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.





const squadre = [
  {
    nome: "Bluteam",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Redteam",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Greenteam",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];
console.log(squadre);


const getRandomNumber = (() => {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 100 ) +1
    return randomNumber;
});

const getRandomNumber2 = (() => {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 10 ) +1
    return randomNumber;
});


squadre.forEach((squadra) =>{ 

    squadra.puntiFatti = getRandomNumber();
    squadra.falliSubiti = getRandomNumber2();

});

const squadreFinal = squadre.map(nome , falliSubiti)
console.log(squadreFinal);