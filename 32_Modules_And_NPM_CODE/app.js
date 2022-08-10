// math.js全部が使いたい
// const math = require('./math)

// 分割代入で使いたい変数だけ呼ぶ
const { PI, square } = require('./math');
// ./ = path
const cats = require('./shelter');

console.log('ディレクトリをrequire:', cats);
// console.log(PI);

// console.log(square(9));