//_______________OOP__________________

// Object Orintated Programming

// when defining a class we use the keyword class

// class Pet {
//     constructor (name, age, type, breed, colour, time)
// }

// constructor constructs a list of objects example. constructor (name, age, type, breed, colour, time) 
// this.name = name;
// this.age = age;
// this.type = type;

// this is a template. like a cookie cutter.

// const Bella = new Pet (`Bella`, 2, `dog`, `GS`, `B&T`, `08:00`);
// console.log(Bella.feedPet(`15:00`))

// const Rocky = new Pet (`Rocky`, 5, `dog`, `spitz`, `Black & Brown`, `10:00`);
// console.log(Rocky.feedPet(`09:00`))

// const Willow = new Pet (`Willow`, 10, `Cat`, `TabbyCat`, `Brown and Black`, `11:00`);
// console.log(Willow.feedPet(`10:30`))

// console.log(Bella)
// console.log(Rocky)
// console.log(Willow)

// Encapsulation

// Inheritance

// Polymorphism

// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.breed = breed;
//         this.colour = colour;
//         this.lastFed = time;
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
// }

// class PetMeds extends Pet {
//     constructor (name, age, type, breed, colour, time, mtime) {
//     super(name, age, type, breed, colour, time);
//     this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
//     }
// }

// class PetWater extends Pet {
//     constructor (name, age, type, breed, colour, time, mtime, water) {
//         super(name, age, type, breed, colour, time);
//         this.water = time;
//     }
// }

// const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
// const Barney = new PetMeds("Barney", 4, "Cat", "DomShort", "b&g", "10:00", "13:00");
// const Betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00");
// const Willow = new PetMeds("Willow", 10, "Cat", "DomShort", "Black", "14:00", "16:00");
// const Rocky = new PetMeds("Rocky", 12, "Dog", "Terrior", "Brown", "15:00", "15:00" );
// const Milly = new PetWater("Milly", 3, "Cat", "Tabby", "Grey", "12:00", "13:00", "12:00");


// console.log(Bella)
// console.log(Barney)
// console.log(Betty)
// console.log(Willow)
// console.log(Rocky)
// console.log(Milly)

