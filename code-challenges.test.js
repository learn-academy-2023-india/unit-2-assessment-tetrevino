// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:





// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// describe("isDivisible", () => {
//     it("a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {

//     const object1 = { number: 15 } 

//     const object2 = { number: 0 }

//     const object3 = { number: -7 }
//       expect(isDivisble(object1)).toEqual("15 is divisible by three")// Expected output:
//       expect(isDivisble(object2)).toEqual("0 is divisible by three")// Expected output:
//       expect(isDivisble(object3)).toEqual("-7 is not divisible by three")// Expected output:
//     })
//   })




// // Pseudo code: input: an object that passes through a function and checks if the number value is divisble by 3
//                 // output: return a string that says "${object.number} is/is not divisble by 3"
//                 //tenary operater to evalue object.number and return desired string

// // b) Create the function that makes the test pass.

// const isDivisble = (object) => {
//     // this.number = object
    
//      return object.number % 3 === 0 ? `${object.number} is divisible by three` : `${object.number} is not divisible by three` 
    
// }
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("capitalizeArr", () => {
//     it("a function that takes an array of words and returns an array with all the words capitalized.", () => {
//     const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

//     const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//       expect(capitalizeArr(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])// Expected output:
//       expect(capitalizeArr(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])// Expected output:
      
//     })
//   })


// // Pseudo code: input: an array of words that are not capitalized
//                 // output: an array of words where each word is capitalized
//                 //map .function to check the array, and the re map it to capitalize the first index
                    //toUpperCase() then concat substring to append new array

// // b) Create the function that makes the test pass.

// const capitalizeArr = (array) => {

//     return array.map(value => {
//         return value[0].toUpperCase() + value.substring(1)
//     })
// }

