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

btn.addEventListener('click', () => {
  btn.style.backgroundColor = 'dodgerBlue';
  btn.style.color = 'white';
  btn.style.fontSize = '20px';
  btn.textContent = 'Magic!';
});
