// 1-Write a function to find the largest element in an array.

var large = 0;
    function largest() {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
          large = arr[i];
        }
      }
      console.log(large);
    }
    console.log(largest());

// 2-Write a function to find the smallest element in an array.


var small = 0;
    function smallest() {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < small) {
          small = arr1[i];
        }
      }
      console.log(small);
    }
    console.log(smallest());

// 3-Write a function to find the sum of all elements in an array.

var sum0 = 0;
function Sum() {
  const arr2 = [5, 2, 11, 7];
  for (var i = 0; i < arr2.length; i++) {
    sum0 = sum0 + arr2[i];
  }
  console.log(sum0);
}
console.log(Sum());

// 4-Write a function to find the average of all elements in an array.

var sum00 = 0;
    var avg = 1;
    function Avg() {
      const arr3 = [5, 2, 15, 19];
      for (var i = 0; i < arr3.length; i++) {
        sum00 = sum00 + arr3[i];
        avg = sum00 / arr3.length;
      }
      console.log("The sum of the array is " + " " + sum00);
      console.log("The average of the array is " + " " + avg);
    }
    console.log(Avg());

// 5-Write a function to find the median of all elements in an array.

const arrr = [1, 3, 5, 7, 9];
    var r;
    function median() {
      if (arrr.length % 2 == 1) {
        r = arrr.length;
        var med = r / 2 - 1;
        console.log("The median is " + arrr[med]);
      }
    }
    console.log(median());

// 6-Write a function to remove all duplicates from an array.
// let number = [2, 4, 7, 15, 7, 30, 30, 3, -3];
// let duplicate = 0;
// function duplicateNumber(number) {
//     for (let i = 0; i < number.length; i++) {
//         duplicate = number[i];
//         for (let j = i + 1; j < number.length; j++)
//             if (duplicate == number[j]) {

//                 number.splice(i, 1);
//             }

//     }
//     console.log(number)
// }
// duplicateNumber(number)

// 7-Write a function to sort an array in ascending order.
// let array = [10, 8, 15, 5, 20, 18, 35]
// let temp = 0;
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++)
//         if (array[i] > array[j]) {
//             temp = array[i]
//             array[i] = array[j]
//             array[j] = temp;
//         }

// }
// console.log(array)

// 8-Write a function to sort an array in descending order.

// let array = [10, 8, 15, 5]
// let temp = 0;
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++)
//         if (array[i] < array[j]) {
//             temp = array[i]
//             array[i] = array[j]
//             array[j] = temp;
//         }

// }
// console.log(array)

// 9-Write a function to shuffle the elements of an array randomly.

// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) { // 11
//         const random = Math.floor(Math.random() * (i)); // 11 * 1
//         [arr[i], arr[random]] = [arr[random], arr[i]]; // Swap elements
//     }
// }

// let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// shuffleArray(randomArray);
// console.log(randomArray)