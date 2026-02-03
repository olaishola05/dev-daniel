let numbers = [1, 2, 3, 4, 5];

const oddFn = function (n: number) {
  return n % 2 !== 0;
};

let odds = numbers.filter((num: number, index: number) => {
  // console.log(index);
  return num % 2 !== 0;
});
// console.log(odds);

const names = ['alice', 'bob', 'charlie'];
let updatedNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));

const fullName = 'Daniel Umukoro';
const splitNames = fullName.split(' ');

const initials = splitNames.map((name) => name.charAt(0)).join('');

// console.log(initials);

function sumArrays(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
