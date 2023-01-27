// Arrays are lists. 

// Array Example
//
// let favHolidayDestinations =  [
//     "Venice, Italy",
//     "Paris, France",
//     "Barcelona, Spain"
// ]

// console.log(favHolidayDestinations)


//Choose a single item from a list using []

// console.log (favFilms[0])

// favFilms[1] = "Thrillers"
// console.log (favFilms)

// we can find out the lengh of arrays

// console.log(favFilms.length)

// .pop "pops" the item out of the list

// console.log(favFilms.pop())

// Different Type of Array Methods. 

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

// favFilms.unshift ("Thrillers")
// console.log(favFilms)

//The shift() method removes the first array element and "shifts" all other elements to a lower index.

// favFilms.shift ("Toy Story")
// console.log(favFilms)


// The splice() method can be used to add new items to an array. 3 is at which position in the array and 0 is how many to remove, then we add the extra items. Example Below. 

// favFilms.splice(3,0, "Thrillers", "Action");
// console.log(favFilms)

// SLICE take's info from the array and puts them in a different array. 
// let favFilms = [
//     "Bullet Train",
//     "Scary Movies",
//     "Toy Story"
// ]
// console.log(favFilms);

// let goodFilms = favFilms.slice(2);

// console.log(favFilms);
// console.log(goodFilms);

// let favFilms = [
//     "Bullet Train",
//     "Scary Movies",
//     "Toy Story"
// ]

//___________________________________________Activity #5___________________________________________

let favMusicGenre = [
    "Drum & Bass",
    "Techno",
    "Trance"
]
console.log(favMusicGenre)

favMusicGenre.unshift("Rave","Dance")
console.log(favMusicGenre)

favMusicGenre.pop(4)
console.log(favMusicGenre)

//____________________________________________________________________________________________________
// .pop() removes an element from the end of the array
// console.log(favFilms.pop());
// console.log(favFilms);

// // .shift() removes an element from the beggining of the array
// favFilms.shift();
// console.log(favFilms);

// // .unshift() adds element(s) to the beggining of the array
// favFilms.unshift("Holy Mountain", "Moonlight", "Taste of Cherry");
// console.log(favFilms);

// // .splice() removes or adds elements anywhere in the array .splice(start, deleteCount) or .splice(start, deleteCount, item1, item2, ...)
// favFilms.splice(3, 1, "In the Mood for Love", "Until the End of the World");
// console.log(favFilms);

// // .slice() creates a new array --> .slice(start) and removes till the end of the array, or .slice(start, end)
// let notSoFavFilms = favFilms.slice(1, 2);
// console.log(notSoFavFilms);

// // .map() used to add elements to each index
// let starRating = favFilms.map(x => x + " *****");
// console.log(starRating);