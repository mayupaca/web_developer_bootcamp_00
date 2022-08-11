const express = require("express");
const app = express();
const port = 8080;

// app.use((req, res) => {
//   console.log("Received request!!");
//   //   res.send("Return response:)")
//   res.send("<h1>はじめてのWebページ</h1>");
// });

app.get("/cats", (req, res) => {
  res.send("Meow!!");
  console.log("Request to /cats!!");
});

app.get("/dogs", (req, res) => {
  res.send("Bow wow!!");
});
app.get("/", (req, res) => {
  res.send("Welcome to everyone!!");
});

// pathで:(コロン)を使ったパラメーター宣言
app.get("/r/:subreddit", (req, res) => {
  // reqの中にparamsオブジェクトがあってparamsで値を取得できる。
  // :subredditはparamsになる
  // console.log(req.params)すると、{ subreddit: 'cats' }が返る
  const { subreddit } = req.params;
  res.send(`<h1> ${subreddit} subreddit page!! </h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  console.log(req.params);
  const { subreddit, postId } = req.params;
  res.send(`<h1> ${subreddit} subreddit page!! - Post ID: ${postId}</h1>`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Results ${q}</h1>`);
});

app.listen(port, () => {
  console.log(`Waiting for port ${port}...`);
});

// const express = require('express');
// const app = express();

// // app.use((req, res) => {
// //     console.log('リクエストを受け付けました！！');
// //     // res.send('リクエストを受けたので、レスポンスを返します！！');
// //     // res.send({ color: 'red' });
// //     res.send('<h1>はじめてのWebページ</h1>');
// // });

// app.get('/cats', (req, res) => {
//     res.send('にゃー');
// });

// app.post('/cats', (req, res) => {
//     res.send('/catsにPOSTリクエストがきました！');
// });

// app.get('/dogs', (req, res) => {
//     res.send('ワンワン');
// });

// app.get('/', (req, res) => {
//     res.send('ホームページへようこそ！！');
// });

// app.get('/r/:subreddit', (req, res) => {
//     const { subreddit } = req.params;
//     res.send(`<h1>${subreddit} subredditのページ</h1>`);
// });

// app.get('/r/:subreddit/:postId', (req, res) => {
//     const { subreddit, postId } = req.params;
//     res.send(`<h1>${subreddit} subreddit Post ID: ${postId}のページ</h1>`);
// });

// app.get('/search', (req, res) => {
//     const { q } = req.query;
//     if (!q) {
//         res.send('検索するものが指定されていません');
//     } else {
//         res.send(`<h1>「${q}」の検索結果</h1>`);
//     }
// });

// app.get('*', (req, res) => {
//     res.send('そんなパスは知らない！！！！');
// });

// // /cats => 'にゃー'
// // /dogs => 'ワンワン'
// // /

// app.listen(8080, () => {
//     console.log('リクエストをポート8080で待受中...');
// });
