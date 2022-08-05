// Promiseが返される。
// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("レスポンスヘッダーが手に入りました。次にパースします...", res);
    // .json()はPromise返す
//     return res.json();
//   })
//   .then((data) => {
//     console.log("パース完了！！");
//     console.log(data.ticker.price);
//   })
//   .catch((e) => {
//     console.log("問題が起きました", e);
//   });

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data.body);
    } catch (e) {
        console.log('問題が起きました', e);
    }
}

fetchBitcoinPrice()
