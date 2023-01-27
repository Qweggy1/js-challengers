//console.log(`Belle like's to eat ${pet.eat} and drinks ${pet.drink}`) calling in strings. 

// Objects are containers that can store data and functions. 

// We store data inside the object using key-value pairs. 
// let day = "Monday"

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales Assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis", "gardening","bungee jumping"]
// }

// // We access the data in an object using dot.notation. 

// Object.defineProperty
// person.firstName
// console.log(person.firstName) 

// // Dont forget camelCase

// console.log(person["firstName"])

const pet = {
    petName: "Belle",
    typeOfPet: "GermanSpitz",
    age: 10,
    occupation: "Annoyence",
    colour: "White",
    perFeatures: ["Flufy", "Playful"],
    eat: "Chicken",
    drink: "Water"
}

console.log(`Belle like's to eat ${pet.eat} and drinks ${pet.drink}`)


//     console.log(person)

// pet.colour = "Brown"
//     console.log(pet)

// if (day === "Saturday" || day === "Sunday"){
//     console.log(`Great it's ${day}, let's play ${person.hobbies[0]}!`)
// }else{
//     console.log(`Oh no! It's ${day} I hate being a ${person.occupation}`)
// }

// When we use functions inside objects we call them methods. 
// person.homeOwner = "true"

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales Assistant",
//     married: false,
//     homeOwner: true,
//     hobbies: ["tennis", "gardening","bungee jumping"],
//     marketingOp () {
//         if (this.homeOwner == false && this.age > 25) {
//             return "Send mortgage offer email."
//         }
//         else if (this.homeOwner == false && this.age < 25){
//             return "Pension investment offer."
//         }
//         else if (this.homeOwner == true && this.age >25){
//             return "Send sendible Savings offer"

//         }
//         else {
//             return "Send sendible Savings Offer."
//         }
//     }

// }

// console.log(person.marketingOp())


