const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");
uuid();

// formのpostのリクエストをparseする
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "John",
    comment: "Fun!!",
  },
  {
    id: uuid(),
    username: "Cate",
    comment: "Yay!!",
  },
  {
    id: uuid(),
    username: "Yvonne",
    comment: "Love it!!",
  },
  {
    id: uuid(),
    username: "David",
    comment: "Hungry!!",
  },
];
// get all comments
app.get("/comments", (req, res) => {
  // index = index.ejs (file name)
  res.render("comments/index", { comments });
});
// new comment form
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
// post new comments
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  // commentの配列にpushで追加する。
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});
// get a specific comment
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  // { comment } = {}で変数を囲むとテンプレートで使えるようになる。
  res.render("comments/show", { comment });
});
// edit comment form
app.get("/comments/:id/edit", (req, res) => {
  // get a specific comment
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

// update comment
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});
// delete comment
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`This is ${meat} x ${qty} `);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}.....`);
});
// CRUD
// GET /comments - index all comments
// POST /comments - create new comments
// GET /comments/:id - show a specific comment
// PATCH /comments/:id - update a specific comment
// DELETE /comments/:id - delete a specific comment

// const express = require('express');
// const app = express();
// const path = require('path');
// const methodOverride = require('method-override');
// const { v4: uuid } = require('uuid');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride('_method'));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// let comments = [
//     {
//         id: uuid(),
//         username: 'yamada',
//         comment: 'おもしろすぎ！！'
//     },
//     {
//         id: uuid(),
//         username: 'suzuki',
//         comment: '趣味はバードウォッチング'
//     },
//     {
//         id: uuid(),
//         username: 'tanaka',
//         comment: 'yamadaさん、何がおもしろいんですか'
//     },
//     {
//         id: uuid(),
//         username: 'wanwan',
//         comment: 'わんわんわん'
//     }
// ];

// app.get('/comments', (req, res) => {
//     res.render('comments/index', { comments });
// });

// app.get('/comments/new', (req, res) => {
//     res.render('comments/new');
// });

// app.post('/comments', (req, res) => {
//     const { username, comment } = req.body;
//     comments.push({ username, comment, id: uuid() });
//     res.redirect('/comments');
// });

// app.get('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find(c => c.id === id);
//     res.render('comments/show', { comment });
// });

// app.get('/comments/:id/edit', (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find(c => c.id === id);
//     res.render('comments/edit', { comment });
// });

// app.patch('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     const newCommentText = req.body.comment;
//     const foundComment = comments.find(c => c.id === id);
//     foundComment.comment = newCommentText;
//     res.redirect('/comments');
// });

// app.delete('/comments/:id', (req, res) => {
//     const { id } = req.params;
//     comments = comments.filter(c => c.id !== id);
//     res.redirect('/comments');
// });

// app.get('/tacos', (req, res) => {
//     res.send('GET /tacos response');
// });

// app.post('/tacos', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`${qty} ${meat} どうぞ。`);
// });

// app.listen(3000, () => {
//     console.log('ポート3000で待受中...');
// });
