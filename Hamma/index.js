const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

let petsWithAge = [];
const getAge= (pet) => { return new Date().getFullYear() - pet.bornOn; };
pets.forEach( (x)=>{ let pet = x;
					 pet.age = getAge(pet);
					 petsWithAge.push(pet);
});

//Affichage du nouveau tab 
console.log(petsWithAge);

let dogs = [];
pets.forEach( (x)=>{ let pet = x;
					 if (pet.type === "dog") {
    					dogs.push(pet);
  					}
});

//Affichag du tab dogs
console.log(dogs);

var jasper;
pets.forEach( x=>{ let pet = x;
					 if (pet.name === "Jasper") {
    					 jasper = pet;
  					}
});

console.log(`Jasper is ${jasper.age} years old`);