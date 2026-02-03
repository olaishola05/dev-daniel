let age: number = 10;

age = 11;

let something = null;
let person = 'John Doe';

let arr = [9, 8, { name: 'Tola', age: 70 }];

let obj = {
  age: age,
  name: person,
  isAdult: false,
  hobbies: {
    lists: ['Reading', 'Walking', 'Eating'],
  },
};

let n = [0, 5, 9, 6, -6];
for (let i = 0; i <= n.length; i++) {
  const num = n[i];
  // if (num > 0) {
  //   console.log('Positive number');
  // } else if (num < 0) {
  //   console.log('Negative number');
  // } else {
  //   console.log('Zero');
  // }
}

function add(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}

function greetings(name: string): string {
  const greet = `Hello ${name}, You are welcome ${10}`;
  console.log(greet);
  return greet;
}

// add(10, 5);
// add(12, 3);
// add(8, 2);
// add(100, 5);

greetings('Dan');
greetings('John Doe');

function displayNumber(num: number): number {
  return num;
}

function displayFullname(first: string, last: string = 'cdsacdsc') {
  return `${first} ${last}`;
}

displayNumber(1);

console.log(displayFullname('John'));

// displayNumber(3);
