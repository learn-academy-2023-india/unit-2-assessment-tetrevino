// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "India 2023"
// console.log(cohort.split(" "))

// a) Your answer: It will console the string cohort into a an array with India and 2023 as seperate elements
// b) Verify and explain: It created an array with India and 2023 as seperate elements

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer:It will pass in argument to the the greeter function and return "Hello, LEARN Student."
// b) Verify and explain: It returned undefined because there is no return statment in the function.

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: It will return the array onlyOdds with the odd numbers only.
// b) Verify and explain: It logged the odd numbers only from the given array.

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: It will log the 0 index from the key value languages from the object, which is "JavaScript"
// b) Verify and explain: It logged the string JavaScript, which was the 0 index at the key languages.

// --------------------5) What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "India"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: It will pass in George to the new object learnStudent from the constructor class, and print the associated key:value
// b) Verify and explain: It passed in George to the class and returned all the values in the Learn class.
