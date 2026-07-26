// function oddEven(number) {
//   if (number % 2 === 0) {
//     return "even number";
//   } else {
//     return "odd number";
//   }
// }
// console.log(oddEven(25));
// console.log(oddEven(251));
// console.log(oddEven(20));

// problem 2 sum of a range of numbers (1 to n)

// function sumNuber(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumNuber(7));
// console.log(sumNuber(10))

// problem 3: Factorial of a number

// function factroial(number) {
//   let mul = 1;
//   for (let i = 1; i <= number; i++) {
//     mul = mul * i;
//   }
//   return mul;
// }
// console.log(factroial(5));

//  fizz buzz problem

// function FizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     console.log("=>>", i);
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
//   return "done"

// }
// console.log(FizzBuzz(16));

// const number = 16;
// for (let i = 1; i <= number; i++) {
//   console.log("=>", i);
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// reverse a string
// let str = "bangladesh"
// let reverseWord = "";
// for(i = str.length; i>=0; i--){
//     let latter = str[i]
//     console.log(latter)
//     reverseWord +=latter
// }
// console.log(reverseWord)

// function reverse(word) {
//   let reverseWord = "";
//   for (let i = word.length; i >= 0; i--) {
//     let letter = word[i];
//     console.log(i,letter)
//     reverseWord += letter;
//   }
//   return reverseWord;
// }
// console.log(reverse("bangladesh"))

// function reverse(word) {
//   let reverseWord = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     let letter = word[i];
//     reverseWord += letter;
//   }

//   return reverseWord;
// }

// console.log(reverse("bangladesh"));

// let arr = [1,2,3,4,5,6]
// console.log(arr.reverse())

let str = "bangladesh";
let reverseWord = "";
for (let i = str.length - 1; i >= 0; i--) {
  let letter = str[i];
  reverseWord += letter;
}
console.log(reverseWord)

let str = "bangladesh";
let wordReverse = "";
for (i = str.length - 1; i >= 0; i--) {
  let latter = str[i];
  wordReverse += latter;
}
console.log(wordReverse)

function wordReverce(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    reverseWord += letter;
  }
  return reverseWord;
}
console.log(wordReverce("bangladesh"));

function reverceWordCount(word) {
  let reverletter = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    reverletter += letter;
  }
  return reverletter
}
console.log(reverceWordCount("hellow bangladesh"));

let arr = [1,2,3,4,5,6]
console.log(arr.length)