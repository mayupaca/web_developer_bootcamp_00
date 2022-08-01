// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerHTML = '<b>私はリンクです！！！！</b>';
// }


// for (let link of allLinks) {
//     link.style.color = 'red';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }

// innerHTML = マークアップ付き
// innerText = タグはつけられない

// const h1 = document.querySelector('h1');
// h1.style.border = '2px solid pink'

// 要素のスタイルを取得
// getComputedStyle
// getComputedStyle(h1).color

// const h2 = document.querySelector('h2')
// h2.getAttribute('class')
// h2.setAttribute('class', 'purple')
// 'purple'が上書きされる↓
// h2.setAttribute('class', 'border')
// 上書きされない↓
// const currentClasses = h2.getAttribute('class');
// h2.setAttribute('class', `${currentClasses} purple`);

// classList
// h2.classList.add('purple')
// h2.classList.remove('purple')
// h2.classList.toggle('purple') ※toggle切り替え

// parentElement
// childrenElement

//-------------------------------------------- Add Element
// const newImage = document.createElement('img');
// newImage.src = 'https://images.unsplash.com/photo-1659365248808-b3180c965153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60'
// document.body.appendChild(newImage);
// newImage.classList.add('square');

// const newH3 = document.createElement('h3');
// newH3.innerText = 'This is new element';
// document.body.appendChild(newH3)

// const container = document.querySelector('#container');
// container.appendChild(button);

// const p = document.querySelector('p')
// p.append('I am append.', 'I am another append.')

// const newB = document.createElement('b') 
// newB.append('Hey')
// p.prepend(newB)

// const h2 = document.createElement('h2')
// h2.append('Cute Ukokke')
// const h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterend', h2)
// const h3 = document.createElement('h3')
// h3.innerText = 'I am h3:)'
// h2.after(h3)


//-------------------------------------------- remove
// const firstLi = document.querySelector('li');
// const ul = firstLi.parentElement;
// ul.removeChild(firstLi);

// const b = document.querySelector('b');
// b.parentElement.removeChild(b)

// const img = document.querySelector('img')
// img.remove()