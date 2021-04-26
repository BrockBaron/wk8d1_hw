use zoo;
db.dropDatabase();

db.animals.insertMany([ // NEW
  {
    name: "Janet",
    type: "Polar Bear"
  },
  {
    name: "Norman",
    type: "Penguin",
    age: 5
  }
]);