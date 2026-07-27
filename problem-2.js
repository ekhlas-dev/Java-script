problem: 9 => Find the largest number in an array

let arr = [500, 120, 20, 510, 1220, 100055];
let largeNumber = arr[0]
for(let i = 1; i<arr.length;i++){
    let currentValue = arr[i]
    if(currentValue > largeNumber)
        largeNumber = currentValue
}
console.log("large number: ",largeNumber)

small number

let arr = [500, 120, 20, 510, 1220, 100055];
let smallValue = arr[0];
for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    console.log(currentValue)
    if(currentValue < smallValue){
        smallValue = currentValue
    }

}
console.log("small value", smallValue)

function largeNumber(arr) {
  let largeValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    if (currentValue > largeValue) {
      largeValue = currentValue;
    }
  }
  return largeValue;
}
console.log("large number: ", largeNumber([500, 120, 20, 510, 1220, 100055]));
console.log(largeNumber(number))

problem 10 : first sum ber korta hoba then average ber korta hoba

let arr = [2, 3, 5, 8, 9, 6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + i;
}
console.log(sum)
let average = sum / arr.length
console.log("average",average)

function averageSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = (sum / arr.length).toFixed(2);
  return avg;
}
console.log(averageSum ([1, 4, 6, 8, 9, 4.7, 3]));

function averageNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = (sum / arr.length).toFixed(2);
  return avg;
}
console.log(averageNumber([1, 4, 6, 8, 9, 4.7, 3]));
