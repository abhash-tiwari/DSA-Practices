// find the sum of first N natural numbers
// lets suppose the given number is 5 so 1+2+3+4+5 = 15
// to achieve this i have 

let n = 5;
let sum = 0;
for (let i = 0; i <= n; i++){
  sum = i + (i+1);
}
console.log(sum);