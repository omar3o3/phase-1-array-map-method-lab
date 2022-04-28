const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // return tutorials.map(item => item.split(' ').charAt(0).toUpperCase().join(' '));
      //#1----original attempt^^^^ error is that 'charAt is not a function'
  // return tutorials.map(item => item.split(' ')).charAt(0).toUpperCase().join(' ');
      //#2----^^copy of original attempt but i moved the () around at the end -- error im getting is that 'char is not a function'
  // return tutorials.map(item => item.split(' ').map(word => word.toUpperCase()).join(' '));
      //#3----^^this attempt failed because it was returning every letter as capitlized
  // return tutorials.map(item => item.split(' ').map(word => word.charAt(0).toUpperCase()).join(' '));
      //#4----its only returning the capital letter of each word, no other letter
  // return tutorials.map(item => item.split(' ').map(word => word.toUpperCase()).join(' '));
      //#5----copy of attempt #3, messing around with where i put charAt
  return tutorials.map(item => item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
      //#6----copy of attempt #4, trying to figure out what happened to the other letters
      //i got it after looking at the solution, i dont understand why i need slice
}

// const titleCased = () => {
//   let newTutorials = tutorials.map(item => item.split(' '))
//   return newTutorials;
// }

// console.log(titleCased);
