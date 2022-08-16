// seeds data = 初期データ
const mongoose = require("mongoose");
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

const seedProducts = [
  {
    name: "Eggplants",
    price: 0.98,
    category: "Vegetables",
  },
  {
    name: "Melon",
    price: 4.80,
    category: "Fruits",
  },
  {
    name: "No seeds Watermelon",
    price: 3.80,
    category: "Fruits",
  },
  {
    name: "Celery",
    price: 1.98,
    category: "Vegetables",
  },
  {
    name: "Milk",
    price: 2.98,
    category: "Dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

// const p = new Product({
//   name: "Grapefruit",
//   price: 1.98,
//   category: "Fruits",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const mongoose = require('mongoose');
// const Product = require('./models/product');

// mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('MongoDBコネクションOK！！');
//     })
//     .catch(err => {
//         console.log('MongoDBコネクションエラー！！！');
//         console.log(err);
//     });

// const p = new Product({
//     name: 'ルビーグレープフルーツ',
//     price: 198,
//     category: '果物'
// });
// p.save().then(p => {
//     console.log(p);
// }).catch(e => {
//     console.log(e);
// })

// const seedProducts = [
//     {
//         name: 'ナス',
//         price: 98,
//         category: '野菜'
//     },
//     {
//         name: 'カットメロン',
//         price: 480,
//         category: '果物'
//     },
//     {
//         name: '種無しスイカのカット',
//         price: 380,
//         category: '果物'
//     },
//     {
//         name: 'オーガニックセロリ',
//         price: 198,
//         category: '野菜'
//     },
//     {
//         name: 'コーヒー牛乳',
//         price: 298,
//         category: '乳製品'
//     },
// ];

// Product.insertMany(seedProducts)
//     .then(res => {
//         console.log(res);
//     }).catch(e => {
//         console.log(e);
//     });
