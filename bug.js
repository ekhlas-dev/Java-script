// function checkAdult(age){
//     if((age ===18)){
//         return "adult"
//     }
//     return "mi nor"
// }
// console.log(checkAdult(155))

// let country = "Bangladesh";

// function show() {
//   console.log(country);
// }

// show();

// console.log(country);

// let age = 26;

// if (true) {
//   console.log(age);
// }

// function hello() {
//   console.log(age);
// }

// hello();

// function person() {
//   let name = "Aklas";
//   console.log(name);
// }

// person();

// // console.log(name);

function sum() {
  let a = 10;
  let b = 20;

  console.log(a + b);
}

sum();

// console.log(a);

function myFunction() {
  var a = 10;

  if (true) {
    var b = 20;
    let c = 30;
  }

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // ❌ Error
}

myFunction();

function test() {
  const age = 26;
  console.log(age); // ✅ 26
}
 console.log(age);

test();

console.log(age); // ❌ ReferenceError

function demo() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b); // ❌ Error
    console.log(c); // ❌ Error
  }

  console.log(a); // ✅ 10
}

demo();

var a = 10;
let b = 20;
const c = 30;

console.log(window.a); // ✅ 10
console.log(window.b); // ❌ undefined
console.log(window.c); // ❌ undefined

let a = 100;

function one() {
  function two() {
    console.log(a);
  }

  two();
}

one();

