// // const user = {
// //   name: 'John Doe',
// //   ag: 80,
// //   storage: [],
// //   hello: function (name: string) {
// //     return `hello ${name}! Yo are welcome`;
// //   },
// //   'I like': 'jg,khjkkhftdd',
// //   hobbies: ['reqding', 'cycling', 'dancing'],
// //   getHobbies: function () {
// //     for (let i = 0; i < this.hobbies.length; i++) {
// //       const hobby = this.hobbies[i];
// //       if (hobby === 'dancing') {
// //         this.storage.push(hobby);
// //       }
// //       console.log(this.hobbies[i]);
// //     }
// //   },
// // };

// // const name = user.name; // Dot Notation

// // //Bracket  Notation
// // //
// // const userName = user['I like'];
// // console.log(userName);

// // // user.getHobbies();

// // // console.log(user.storage);
// // //
// // const data = user['hobbies'];
// // data.shift();
// // const me = data.unshift('tekkers');

// // const popped = data.pop();

// // console.log(data);

// // // data.push('Smiling');
// // console.log(me, 'Unndhift');

// function Person(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// };

// const john = new Person('John', 80);

// console.log(john.name);
// john.greet();

// const larry = new Person('Larry Clifford', 140);

// larry.greet();

function withLogging(obj) {
  console.log(obj);
  obj.log = function (message) {
    console.log(`Log: ${message}`);
  };
  return obj;
}

let user = { name: 'John' };
user = withLogging(user);
user.log('User created'); // Output: Log: User created

let numbers = [1, 2, 3, 4, 5];
let nums = [7, 4, 8, 9];

let results = nums.map((num: number) => num * 8);
console.log(results);
