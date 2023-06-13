console.log('js ok');

// creo array studenti con id e voti

const students = [
    {
      id: 213,
      name: "Marco della Rovere",
      grades: 78,
    },
    {
      id: 110,
      name: "Paola Cortellessa",
      grades: 96,
    },
    {
      id: 250,
      name: "Andrea Mantegna",
      grades: 48,
    },
    {
      id: 145,
      name: "Gaia Borromini",
      grades: 74,
    },
    {
      id: 196,
      name: "Luigi Grimaldello",
      grades: 68,
    },
    {
      id: 102,
      name: "Piero della Francesca",
      grades: 50,
    },
    {
      id: 120,
      name: "Francesca da Polenta",
      grades: 84,
    },
  ];
  
  console.log(students);
  //1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
  //2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


  const secchioni = students.filter(students =>{
    return students.grades > 70; 
 })

 const secchioniPLUS = students.filter(students =>{
    return students.grades > 70 && secchioni.id > 120; 
 })

 console.log(secchioni);
 console.log(secchioniPLUS);