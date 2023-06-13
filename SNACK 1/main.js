console.log("js ok");
const tableName = "VIP Table";
//array di invitati
const guestList = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

console.log(guestList);

const placeCards = guestList.map((guest, index) => {
  return {
    tableName: tableName,
    guestName: guest,
    sediaOccupata: index +1,
  };
});

console.log(placeCards);
