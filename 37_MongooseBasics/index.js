const mongoose = require("mongoose");
// localhost:27017/のあとには接続先のデータベース
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("We are connected!!");
  })
  .catch((err) => {
    console.log("Connection Error!!");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});
// classを作った
const Movie = mongoose.model("Movie", movieSchema);
// classを使ってinstance化する
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

// Movie.insertMany([
//   { title: "Amadeus", year: 1986, score: 9.2, rating: "R" },
//   { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
//   { title: "Alian", year: 1979, score: 8.1, rating: "R" },
//   { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//   { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
//   { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
// ]).then((data) => {
//   console.log("Success!!");
//   console.log(data);
// });
