// // DSA ? Data structures and algorithms

// // Data structures ? - storing data in a meaningful way

// // Array: arr = ["abc", "def", "ghi", "jkl", .....]
// //        0-indexed
// //        arr[0] = "abc"
// //        arr[3] = "jkl"

// // {
// //   1: ["abc", 19, "xyz", 2004, ...]
// // }

// // Algorithms: step-by-step instruction to solve something

// // Variable?
// //   let arr; // declaration
// //   arr = [1, 2, 3] // assignment

// //   let num = 5;

// // Data types ?

// //   2(number)
// //   2.5(number)
// //   "abc"(string)

// // console.log(typeof(3.4))
// // console.log(typeof(3))

// // // boolean
// // let rr =  true
// // console.log(typeof(rr))

// // null
// // undefined
// // Object

// // JSON?

// // let xx = {
// //   1: "abc",
// //   2: "def",
// //   3: "ghi"
// // }

// // let rr =  {
// //     "1": {
// //       "name": "abc",
// //       "age": "def",
// //       "dob": 25112004,
// //     },
// //     2: ["def", 22]
// // }
// // console.log(rr["1"]["name"])
// // console.log(typeof(rr))

// // let arr = [1, 2, 3, 4, 5]

// // Loops: for and while loops

// // for(let i = 0; i < arr.length; i++) {
// //   console.log(arr[i])
// // }

// // i=0, i<arr.length; console.log(arr[0]), i++
// // i=1, i<arr.length; console.log(arr[1]), i++
// // i=2, i<arr.length; console.log(arr[2]), i++
// // i=3, i<arr.length; console.log(arr[3]), i++
// // i=4, i<arr.length; console.log(arr[4]), i++
// // i=5, i<arr.length

// // let i=0;
// // while(i<arr.length) {
// //   if(i%2 == 0){
// //       console.log(arr[i])
// //   } else if (i=5){
// //     console.log("i is 5");
// //   }
// //   else {
// //     console.log("won't print")
// //   }

// //   if(){

// //   }

// //   if() {

// //   }
// //   i++
// // }

// // for(let i=0;;i++){
// //   console.log(i);
// // }

// // "
// //   {
// //     1: "abc",
// //     2: "def",
// //   }
// // "

// // // 10/2 = 5
// // // 10%2=0

// // Time complexity: ? run time taken to execute a program

// // O() -> Big-oh notation (unit for time complexity)

// // come up with an approximation of number of lines executed with respect to the input provided
// // [1, 2, 3, 4, 5]

// // function solve(arr, n) {
// //   for(let i=0;i<n;i++){ // n+1
// //     console.log(arr[i]); // n
// //   }
// // }

// // Sum total of number of lines executed = n+1 + n = 2*n + 1

// // remove constants = n
// // TC: O(n)

// // sum = 4*n^2 + 3*n + 50 TC: O(n^2)

// // 2*n + 1

// // n=5 : 11
// // n=100 : 201

// // n=1000 : 2001

// // n=10^6: 2*10^6+1 = 2000001

// // n^2 + n

// // n=10: 110

// // n=100: 10100

// // n=10^6,

// for(let i=0;i<n;i++){
//   for(let j=0;j<n;j++) {
//     console.log("printing")
//   }
// }

// TC: O(n*n)

// for(let i=0;i<n;i++){
//   for(let j=0;j<m;j++) {
//     console.log("printing")
//   }
// }

// TC: O(n*m)

// for(let i=0;i<n;i++){
//   // do something
// }

// for(let i=0;i<n;i++){
//   // do something else
// }

// n+n = 2*n TC: O(n)

// //https://replit.com/@marshal4world/Crio-DSA-JS-B1-Dec#index.js

// let n = 5;
// let sum = 0;
// for (let i = 0; i <= n; i++){
//   sum = sum + i;
// }
// console.log(sum);

let N = 1600;

if (N % 4 == 0) {
  console.log("yo");
}

// function capitalise(paragraph) {
//   let newStr = "";

//   for (let i = 0; i < paragraph.length; i++) {
//     if (i === 0 && paragraph[i] !== " ") {
//       let char = paragraph[i].toUpperCase();
//       newStr = newStr + char;
//     } else if (paragraph[i - 1] === " " && paragraph[i] !== "") {
//       let char = paragraph[i].toUpperCase();
//       newStr = newStr + char;
//     } else {
//       newStr = newStr + paragraph[i];
//     }
//   }

//   return newStr;
// }

// // Example usage
// const inputParagraph = "this is a sample paragraph.";
// const result = capitalise(inputParagraph);
// console.log(result);

//revision

//quadrant find
// function quad(x,y){
//   if (x > 0 && y > 0){
//     return "1st";
//   } else if( x < 0 && y >0){
//     return "2nd";
//   } else if (x<0 && y<0){
//     return "3rd";
//   } else {
//     return "4th";
//   }
// }
// console.log(quad(5,-2));

// natural sum

// function Nsum(n){
//   let sum = 0;

//   for (let i = 0; i<=n; i++){
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(Nsum(5));

// Leap Year

// function Leap(n){
//   if(n % 4 == 0 && n% 100 !== 0 || n% 400 == 0){
//     return "1"
//   } else {
//     return "2"
//   }
// }
// console.log(Leap(1600))

// find

// function arrFind(n,arr,x){
//   for (let i =0;i<=n;i++){
//     if(arr[i] == x){
//       return "found on " + i + "rd" + " " + "index"
//     }
//   }
//   return "not Found"
// }

// console.log(arrFind(6,[1,2,3,4,4,5],4))

// when i want to find the second occurence index

// function arrFind(n, arr, x) {
//   let count = 0;

//   for (let i = 0; i <= n; i++) {
//     if (arr[i] == x) { // 4 found
//       count++;  // count = 1

//       if (count === 2) {
//         return "found on " + i + "th index";
//       }
//     }
//   }

//   return "not Found";
// }

// console.log(arrFind(6, [1, 2, 3, 4, 4, 5], 4));

// to find simple index of a number of string

// let arr = [1,2,3,4,5];
// let ans = arr.indexOf(3);
// console.log(ans);

// check magic square

// */ 1 first chek diagnol sum of both
// 2 then compare them if they didnt match return false
// 3 fing row and col sum
// 4 if they didnt match return false
// 5 if all the above conditions became true then return true */

// function magic(n, matrix){
//   let diag1 = 0;
//   let diag2 = 0;

//   for (let i =0;i<n;i++){
//     diag1 = diag1 + matrix[i][i];
//   }
//   for (let i =0;i<n;i++){
//     diag2 = diag2 + matrix[i][n-i-1];
//   }

//   if(diag1 !== diag2){
//     return false;
//   }
//   for (let i =0;i<n;i++){
//     let rowSum =0;
//     let colSum =0;
//     for(let j=0;j<n;j++){
//       rowSum = rowSum + matrix[i][j];
//       colSum = colSum + matrix[i][j];
//     }
//     if(rowSum != diag1 || colSum != diag1){
//       return false;
//     }
//   }
//   return true;
// }

// cyclic rotation of an array

// function rotate(n, arr , k){

// }

// let arr = [1,2,3,4,5];
// let pp = arr.pop(3);
// console.log(arr)

// function cyclicRotate(arr, k) {
//   for (let i = 0; i < k; i++) {
//     // Remove the last element and shift it to the front
//     let lastElement = arr.pop(); // this removes last and store it in this
//     arr.unshift(lastElement); // unshift will add them into array
//   }

//   // Return the array
//   return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// let k = 3;

// cyclicRotate(arr, k);
// console.log(arr); // Output: [3, 4, 5, 1, 2]

// binary search method

// function searchTarget(N, A, X) {
//   let left = 0;
//   let right = N - 1;

//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2);

//     if (A[middle] == X) {
//       return middle;
//     } else if (A[middle] > X) {
//       right = middle - 1;
//     } else if (A[middle] < X) {
//       left = middle + 1;
//     }
//   }
//   return -1;
// }







// print pyramid

// for(let i=0;i<=5;i++){
//   console.log("* ".repeat(i))
// }



//cyclic rotation leftwards

// let arr = [1,2,3,4,5];

// console.log(arr)
// let pp =0;
// for(let i =1;i<=2;i++){
//   pp = arr.shift()
//   arr.push(pp);
// }

// console.log(arr)





// binary search 

// let arr = [1,2,3,5,7,88,99,100,332,22,34,55,67,8,8,990,0,333,3];

// let dex = arr.indexOf(3);

// console.log(dex);


// function countUniqueWords(n, words) {
//   const uniqueWords = new Set();

//   for (let i = 0; i < n; i++) {
//       const word = words[i];
//       // Remove punctuation and convert to lowercase if needed
//       const cleanWord = word.toLowerCase().replace(/[.,?!]/g, '');
//       uniqueWords.add(cleanWord);
//   }

//   return uniqueWords.size;
// }

// // Sample Input
// const n = 7;
// const words = [
//   'Java', 'is', 'great', 'Grails', 'is', 'also', 'great'
// ];

// // Output
// const result = countUniqueWords(n, words);
// console.log(result);



// understanding map and set
// we use map for lets say storing a type of list and values

// let mp = new Map([[1, "name"],[2, "age"], [3, "dob"]]);
// console.log(mp)

// //setting a new value to map

// mp.set(4, "gender");
// console.log(mp)


// // using get for getting a specific value
// console.log(mp.get(3))

// // delete
// mp.delete(3)
// console.log(mp)

// //for of loop for iterating through the map

// for(let [key,value] of mp){
//   console.log("key ", key, " value ", value)
// }
// let mp2 = new Map()
// mp2.set("name","Abhash")
// mp2.set("age", 21)
// mp2.set("gender", "M")
// // console.log(mp2)
// for(let [key,value] of mp2){
//   console.log(key, value)
// }

// // .size for knpwing the size

// console.log(mp2.size)




// counting frequency

// function mpmp(text){
// let mp = new Map();
  
// for (let i=0;i<text.length;i++){
//   let char = text[i];
//   if(mp.has(char)){
//     mp.set(char, mp.get(char) + 1)
//   } else {
//     mp.set(char, 1)
//   }
// }
//   return mp;
//   }
// console.log(mpmp("statement"));



// counting most frequency

// function most(text){
//   let mp = new Map();

//   for (let i=0;i<text.length;i++){
//     let char = text[i];
//     if(mp.has(char)){
//       mp.set(char, mp.get(char) + 1)
//     } else {
//       mp.set(char, 1)
//     }
//   }
//   //now we have setted the map with frequencies and we have to iterate through the map and look for the most frequent number occured

//   let max = 0;
//   let character = ''

//   for(let [key,value] of mp){
//     if(value > max){
//       max = value;
//       character = key;
//     }
//   }
//   return [character,max]

  
// }

// console.log(most("statement"))



// unique words set

// function uniqueWords(text){
  
//   let words = text.split(" ")
//   let st = new Set(words);
//   // for (let i = 0;i<text.length;i++){
//   //   st.add(text[i])
//   // }
//   return st;
// }
// console.log(uniqueWords("java is great but grails is also great"))

// intersection of two arrays

// function inter(n,nums1,m,nums2){
//   let mp = new Map()
//   let mp1 = new Map()
   
//   for(let i=0;i<n;i++){
//     let num = nums1[i];
//     mp.set(num, (mp.get(num) || 0) + 1) 
//   }
//   for(let j=0;j<m;j++){
//     let num1 = nums2[j];
//     mp1.set(num1, (mp1.get(num1) ||0) +1)
//   }
//   let ans = [];
//   for(let [key,val] of mp){
//     if(mp1.has(key)){
//       ans.push(key,val)
//     }
//   }
//   return ans;
// }
//   console.log(inter(4,[1,2,2,1],2,[2,2]));


// distict values count distinct means google it

// function distinct(n,num){ //4 1,2,3,1
// 1 way to directly find
  // const ans = new Set(num);
  // return ans.size;

// 2 way using for loop
  // let ans = new Set()

  // for(let i =0;i<n;i++){
  //   ans.add(num[i])
  // }
  // // return ans;
  // return ans.size


// 3 way for of loop to find distinct num count
//   const ans = new Set(num);
//     let count = 0;

//     for(const value of ans){
//         count++;
//     }
//    return count;
// }
// console.log(distinct(4,[1,2,2,1]));








// sum of N natural numbers

// function naturalSum(n){
//   let sum = 0;
//   for(let i =0;i<=n;i++){
//     sum = sum + i
//   }
//   return sum;
// }
// console.log(naturalSum(10))




// gcd basic 
// formula gcd(b,a%b)
// want to know how to find gcd then look at mentors replit

// function gcd(a,b){
//   if(b == 0){
//     return a
//   }
//   return gcd(b,a%b)
// }
// console.log(gcd(8,80))




// count prime numbers up to n

// function prime(n){

//   for(let i = 2;i<n;i++){
//     if (n%i == 0){ // if n divides any of the iteration means 10%2,3,4 etc that means its not a prime number then return false
//       return false
//     } 
//   }
//   return true;
// }
// console.log(prime(2))

// function countPrimenum(n){
//   let count = 0
//  for (let i = 2;i<n;i++){
//    if(prime(i)){
//      count++
//    }
//  } 
//   return count;
// }

// // if you want to return the numbers
// function countPrime(n){
  
//   let ans = []
//  for (let i = 2;i<n;i++){
//    if(prime(i)){
//      ans.push(i)
     
//    }
//  } 
//   return ans;
// }
// console.log(countPrime(10))





// gcd of an array (remember the formula)


// function gcdOfArray(n,arr) {
//     const gcd = (a,b) => (b===0 ? a : gcd(b,a%b));

//     let ans = arr[0];
//     for(let i=0;i<n;i++){
//         ans = gcd(ans, arr[i])
//     }
//     return ans;
// }

// console.log(gcdOfArray(4,[2,4,8,10]))









// diagnol sum 2 // do not add repeated elements

// function diagnol(matrix){
//   let n = matrix.length;
//   let diag1 = 0 , diag2 = 0;
//   for(let i =0;i<n;i++){
//     diag1 = diag1 + matrix[i][i]
//     let j = n-i-1
//     if(i!== j){
//       diag2 = diag2 + matrix[i][n-i-1]
//     }
//   }
  
//   let ans = diag1 + diag2;
//   return ans;
// }
let example = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
// console.log(diagnol(example))


// // we dont need 2 loops to calculate diagnol sum it also has magic square revision
// function totalDiag(matrix){
//   let n = matrix.length;
//   let diag1 = 0 , diag2 = 0;
//   for(let i =0;i<n;i++){
//     diag1 = diag1 + matrix[i][i]
//     // let j = n-i-1
//       diag2 = diag2 + matrix[i][n-i-1]
//   }
//   // let ans = diag1 + diag2;
//   // return ans;
//   if(diag1 == diag2){
//     return "magic Square"
//   } else {
//     return "no"
//   }
// }
// console.log(totalDiag(example))


// you cannot push 1 array into another array 
// let i = [1,2]
// let j = [1,2]


// let ans = i.push(j)

// console.log(ans)
// u need to concat 

// let array1 = [1,2,3]
// let array2 = [3,4,5]

// let ans = array1.concat(array2)
// console.log(ans)



// pascals triangle

// function pascalsTriangle(n) {
//     let ans = [];
//     let temp = [];
//     for(let i=0;i<n;i++){
//         for(let j=0;j<i+1;j++){
//             if(j==0 || j==i){
//                temp.push(1)
//             } else {
//                 temp.push(ans[i-1][j] + ans[i-1][j-1]);
//             }
//         }
//         ans.push(temp);
//          temp = [];
//     }
//     return ans;
// }

// console.log(pascalsTriangle(5))



