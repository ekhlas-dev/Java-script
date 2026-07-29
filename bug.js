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

// function sum() {
//   let a = 10;
//   let b = 20;

//   console.log(a + b);
// }

// sum();

// // console.log(a);

// function myFunction() {
//   var a = 10;

//   if (true) {
//     var b = 20;
//     let c = 30;
//   }

//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // ❌ Error
// }

// myFunction();

// function test() {
//   const age = 26;
//   console.log(age); // ✅ 26
// }
//  console.log(age);

// test();

// console.log(age); // ❌ ReferenceError

// function demo() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(b); // ❌ Error
//     console.log(c); // ❌ Error
//   }

//   console.log(a); // ✅ 10
// }

// demo();

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(window.a); // ✅ 10
// console.log(window.b); // ❌ undefined
// console.log(window.c); // ❌ undefined

// let a = 100;

// function one() {
//   function two() {
//     console.log(a);
//   }

//   two();
// }

// one();

let country = "Bangladesh";

// function one() {

//   let district = "Sirajganj";

//   function two() {

//     let village = "Panchila";

//     console.log(country);

//     console.log(village);

//   }

//   two();
//   console.log(district);
// }

// one();

// let name = "Aklas";

// function one() {

//   let age = 26;

//   function two() {
//     console.log(name);
//     console.log(age);
//   }

//   two();

// }

// one();

// if (true){
//     var a = 10;
// }
// console.log(a)

// let x = 5;
// function one(){
//     console.log(x)
// }
// one()

// function one(){
//     let x = 100;
//     function two(){
//         console.log(x)
//     }
//     two()
// }
// one()

// function one() {
//   let a = 10;

//   function two() {
//     let b = 20;
//   }

//   console.log(a);
// }

// one();

// let x = 10
// function one (){
//     console.log(x)
//     function two(){
//         let x = 20
//         two()
//     }
// }
// two()
// let x = 10;
// function one() {
//   function two() {
//     console.log(x);
//   }
//   let x = 20;
//   two();
// }
// one();

// let a = 1;

// function outer() {
//   let a = 2;

//   function inner() {
//     console.log(a);
//   }

//   return inner;
// }

// const fn = outer();
// fn();

// console.log(city);

// var city = "Dhaka";

// console.log(x);

// var x = 50;

// console.log(x);

// console.log(y);

// let y = 100;

// function sumArray(number) {
//   let total = 0;
//   for (let i = 0; i < number.length; i++) {
//     total += number(number[i].toFiexd(2));
//   }
//   return total;
// }
// console.log(sumArray([10, 20, 998, 78]));

// What is the output of the following code?

let age = 18;
if (age > 18) {
 console.log("Adult");
} else {
 console.log("Minor");
}
function add(a, b) {
 return a + b;
}
console.log(add(5));