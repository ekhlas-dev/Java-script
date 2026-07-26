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

function FizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    console.log("=>>", i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
  return "done"
  
}
console.log(FizzBuzz(16));

const number = 16;
for (let i = 1; i <= number; i++) {
  console.log("=>", i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
