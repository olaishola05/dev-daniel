const header = document.getElementById('header');
const items = document.getElementsByClassName('item');
const name = document.querySelector('#name');
const paragraph = document.querySelector('p');
const body = document.querySelector('body');
const btn = document.querySelector('button');

const p = document.querySelector('.child');
const divImage = p.parentNode;
// console.log(divImage);
//

divImage.childNodes.forEach((child, idx) => {
  console.log(child.textContent, idx);
});

const section = document.createElement('section');
section.textContent = 'Hey! I am a section';
section.style.backgroundColor = 'white';

body.style.backgroundColor = 'black';
body.appendChild(section);
body.insertBefore(section, header);

header.style.color = 'white';

header.textContent = 'Good evening sir';

// console.log(items);
//
let i = 0;

for (i; i <= items.length; i++) {
  const item = items[i];
  if (i === 3) {
    item.style.color = 'red';
    item.style.backgroundColor = 'purple';
  }
}

paragraph.style.color = 'white';
console.log(paragraph.textContent);

name.setAttribute('placeholder', 'Pls enter your thought');
paragraph.textContent = 'Something Amazing!';

paragraph.setAttribute('placeholder', 'This is DOM manipulation');

const classes = ['red', 'blue', 'purple'];

btn.addEventListener('click', () => {
  // btn.style.backgroundColor = 'dodgerBlue';
  // btn.style.color = 'white';
  // btn.style.fontSize = '20px';
  // btn.textContent = 'Magic!';
  // btn.style.display = 'none';
  // const randomIndex = Math.floor(Math.random() * classes.length);
  // const newClass = classes[randomIndex];
  // btn.classList.remove(...classes);
  // btn.classList.add(newClass);
  // console.log(`Applied: ${newClass}`);
});

// Another Approach
let currentIndex = -1; // -1 means no class is applied yet
btn.addEventListener('click', () => {
  if (currentIndex >= 0) {
    btn.classList.remove(classes[currentIndex]);
  }
  currentIndex++;

  if (currentIndex === classes.length) {
    currentIndex = -1;
  } else {
    btn.classList.add(classes[currentIndex]);
  }
});

const children = document.querySelectorAll('.child');
console.log(children[children.length - 1]);

[1, 2, 3].forEach((num) => {
  // return num * 2;
});

const temp = [1, 2, 3];
for (let x = 0; x < temp.length; x++) {
  // console.log(temp[x]);
}
