// problem: 9 => Find the largest number in an array

// let arr = [500, 120, 20, 510, 1220, 100055];
// let largeNumber = arr[0]
// for(let i = 1; i<arr.length;i++){
//     let currentValue = arr[i]
//     if(currentValue > largeNumber)
//         largeNumber = currentValue
// }
// console.log("large number: ",largeNumber)

// small number

// let arr = [500, 120, 20, 510, 1220, 100055];
// let smallValue = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i]
//     console.log(currentValue)
//     if(currentValue < smallValue){
//         smallValue = currentValue
//     }

// }
// console.log("small value", smallValue)

// function largeNumber(arr) {
//   let largeValue = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i];
//     if (currentValue > largeValue) {
//       largeValue = currentValue;
//     }
//   }
//   return largeValue;
// }
// console.log("large number: ", largeNumber([500, 120, 20, 510, 1220, 100055]));
// console.log(largeNumber(number))

// problem 10 : first sum ber korta hoba then average ber korta hoba

// let arr = [2, 3, 5, 8, 9, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + i;
// }
// console.log(sum)
// let average = sum / arr.length
// console.log("average",average)

// function averageSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let avg = (sum / arr.length).toFixed(2);
//   return avg;
// }
// console.log(averageSum ([1, 4, 6, 8, 9, 4.7, 3]));

// function averageNumber(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let avg = (sum / arr.length).toFixed(2);
//   return avg;
// }
// console.log(averageNumber([1, 4, 6, 8, 9, 4.7, 3]));

// problem 12 => filter number gatter than value

// let arr = [20, 34, 67, 87, 89, 86, 54, 79, 97, 82, 81, 95, 70, 72];
// let value = 70;
// let FilterValue = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > value){
//         FilterValue.push(arr[i])
//     }
// }
// console.log(FilterValue)

// with function

// function filterLargeValue(arr) {
//   let value = 70;
//   let largeValue = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > value) {
//       largeValue.push(arr[i]);
//     }
//   }
//   return largeValue;
// }
// console.log(
//   filterLargeValue([20, 34, 67, 87, 89, 86, 54, 79, 97, 82, 81, 95, 70, 72]),
// );

// problem 13 => loop through an object properties

// let monitor = {
//   color: "block",
//   brand: "lg",
//   display: "something",
//   size: "something",
// };
// for (let key in monitor) {
//   console.log(key, ": ", monitor[key]);
// }

// problem 14:

const student = {
  name: "ekhals uddin",
  age: 25,
  university: "DIU",
  depertment: "cse",
};

function objPreration(obj){
  for(let key in obj){
    console.log(key)
  }
  for(let key in obj){
    console.log(obj[key])
  }
  for(let key in obj){
    console.log(key, ": ", obj[key])
  }
  let objectKeyCount = Object.keys(obj).length
  console.log("Toatal Properties: ",objectKeyCount)
  let HasEmailProperty = obj.hasOwnProperty("email")
  console.log("has email: ",HasEmailProperty)
}
objPreration(student)