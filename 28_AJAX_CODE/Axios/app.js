// axios
//   .get("https://api.jokes.one/jod/categories")
//   .then((res) => {
//     console.log(res.data.contents.categories[0].name);
//   })
//   .catch((e) => {
//     console.log("Error!!", e);
//   });

// const getJokes = async () => {
//   try {
//     const res = await axios.get("https://api.jokes.one/jod/categories");
//     console.log(res.data.contents.categories[0].language);
//   } catch (e) {
//     console.log("Error!!", e);
//   }
// };

// getJokes();
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes! Sorry";
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  jokes.append(newLi);
};

button.addEventListener("click", addNewJoke);

// fetch('https://api.cryptonator.com/api/ticker/btc-jpy')
//     .then(res => {
//         console.log('レスポンスヘッダーが手に入りました。次にパースします...', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('パース完了！！');
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log('問題が起きました', e);
//     })

// axios.get('https://api.cryptonator.com/api/ticker/btc-jpy')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(e => {
//         console.log('問題が起きました', e);
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-jpy')
//         console.log(res.data.ticker.price);
//     } catch (e) {
//         console.log('問題が起きました', e);
//     }
// }

// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const getDadJoke = async () => {
//     try {
//         const config = {
//             headers: {
//                 Accept: 'application/json'
//             }
//         };
//         const res = await axios.get('https://icanhazdadjoke.com/', config);
//         return res.data.joke;
//     } catch (e) {
//         return 'No Jokes! Sorry!!!'
//     }
// }

// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }

// button.addEventListener('click', addNewJoke);
