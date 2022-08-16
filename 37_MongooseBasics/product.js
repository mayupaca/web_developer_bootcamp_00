const mongoose = require("mongoose");
// localhost:27017/のあとには接続先のデータベース
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
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

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Mountain bike",
  price: 598,
});

bike
  .save()
  .then((data) => {
    console.log("Success!!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error!!");
    console.log(err);
  });
