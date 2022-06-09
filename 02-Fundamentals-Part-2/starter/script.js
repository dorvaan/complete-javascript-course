// // Don't
// // Repeat
// // Yourself

// // Keep your code DRY.

// function logger() {
//   console.log("My name is Dustin");
// }

// //calling / running / invoking the function

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   //Must return a value or nothing else works.  Further variables will return undefined.
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // Function Declaration - Can call before you define
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1980);

// // Function Expression - Cannot call before definition
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1980);
// console.log(age1, age2);

// // ARROW FUNCTIONS
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1980);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   //  return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// yearsUntilRetirement(1980);
// console.log(yearsUntilRetirement(1980, "Dustin"));

// //Functions calling other functions

// function cutFruitPiece(fruit) {
//   return fruit * 6;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPiece(apples);
//   const orangePieces = cutFruitPiece(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   //Must return a value or nothing else works.  Further variables will return undefined.
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearUntilRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} is already retired.`);
//     return -1;
//   }
// };

// console.log(yearUntilRetire(1980, "Dustin"));
// console.log(yearUntilRetire(1945, "Bob"));

const friends = ["Kevin", "Calvin", "Cody"];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

const firstName = "Dustin";
const dustin = [firstName, "Jones", 2022 - 1980, "geek", friends];
console.log(dustin);

//Exercise

const calcAge = function (birthYear) {
  2022 - birthYear;
};

const years = [1990, 1981, 1966, 2002, 2018];
