// tests with aws toolkit codewhisperer

const arr = [1, 2, 3, 4];
//find maximum value in array
const max = arr.reduce((a, b) => {
  return Math.max(a, b);
});

//find minimum value in array
const min = arr.reduce((a, b) => {
  return Math.min(a, b);
});

//find sum of array
const sum = arr.reduce((a, b) => {
  return a + b;
});

//find average of array
const avg = sum / arr.length;

//find sum of array
const sum2 = arr.reduce((a, b) => {
  return a + b;
});
