const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected MongoDB Success!!");
  })
  .catch((err) => {
    console.log("Connected Error MongoDB!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["Fruits", "Vegetables", "Dairy"];

// products全部表示
app.get("/products", async (req, res) => {
  // mongooseの.findでproductの情報全部を取ってくる
  const products = await Product.find({});
  //   console.log(products);
  // {products}でproducts変数がejsで使えるようになる
  res.render("products/index", { products });
});

// 新しいproductを作るform
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

// それぞれのproduct表示
app.get("/products/:id", async (req, res) => {
  // 既存のdataからparamsを使って、idを取得
  const { id } = req.params;
  // MongoDBから指定したidのproductを取得
  const product = await Product.findById(id);
  console.log(product);
  res.render("products/show", { product });
});

// update product
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(3000, () => {
  console.log("Listening port 3000...");
});

// const express = require('express');
// const app = express();
// const path = require('path');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');

// const Product = require('./models/product');

// mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('MongoDBコネクションOK！！');
//     })
//     .catch(err => {
//         console.log('MongoDBコネクションエラー！！！');
//         console.log(err);
//     });

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

// const categories = ['果物', '野菜', '乳製品'];

// app.get('/products', async (req, res) => {
//     const { category } = req.query;
//     if (category) {
//         const products = await Product.find({ category });
//         res.render('products/index', { products, category });
//     } else {
//         const products = await Product.find({});
//         res.render('products/index', { products, category: '全' });
//     }
// });

// app.get('/products/new', (req, res) => {
//     res.render('products/new', { categories });
// });

// app.post('/products', async (req, res) => {
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     res.redirect(`/products/${newProduct._id}`);
// });

// app.get('/products/:id', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.render('products/show', { product });
// });

// app.get('/products/:id/edit', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.render('products/edit', { product, categories });
// });

// app.put('/products/:id', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
//     res.redirect(`/products/${product._id}`);
// });

// app.delete('/products/:id', async (req, res) => {
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     res.redirect('/products');
// });

// app.listen(3000, () => {
//     console.log('ポート3000でリクエスト待受中...');
// });
