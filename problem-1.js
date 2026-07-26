function oddEven(number) {
  if (number % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
}
console.log(oddEven(25));
console.log(oddEven(251));
console.log(oddEven(20));

// problem 2 sum of a range of numbers (1 to n)

function sumNuber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumNuber(7));
console.log(sumNuber(10))

// problem 3: Factorial of a number

