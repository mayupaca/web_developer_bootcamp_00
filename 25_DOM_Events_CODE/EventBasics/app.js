const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('クリックした！');
    console.log('ほげほげ');
}

function scream() {
    console.log('ああああああああ！！');
    console.log('いやーーーーー');
}

// ここでは実行しないから、scream;。()を付けちゃうと実行する。
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('h1をクリック');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('クリック！！！');
});

function hoge() {
    console.log('hoge');
}

function moge() {
    console.log('moge');
}

const hogemogeButton = document.querySelector('#hogemoge');
// hogemogeButton.onclick = hoge;
// hogemogeButton.onclick = moge;
// addEventListenerはeventをついかする。↑の場合は上書きしちゃう。
hogemogeButton.addEventListener('click', hoge);
hogemogeButton.addEventListener('click', moge);