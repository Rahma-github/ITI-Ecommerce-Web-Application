var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var AllProduct = require("./ProductController");

mongoose
  .connect(
    "mongodb+srv://mohamed443:XZQEzfd4ID7CD74S@cluster0.fi2xlys.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
///////////////////////////////////////////////
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
//////////////////////////////////////////////
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "Index.html");
});

app.get("/getProducts", function (reg, res) {
  Product.find().then((data) => {
    console.log(data);
    let elec = [];
    for (let i = 0; i < 5; i++) {
      elec[i] = data[i];
    }
    res.send(elec);
  });
});

app.get("/geElectronics", function (reg, res) {
  const query = { Category: "Electronics" };
  AllProduct.find(query)
    .limit(5)
    .then((data) => {
      res.send(data);
    });
});



app.get("/geClothes", function (reg, res) {
  const query = { Category: "clothes" };
  AllProduct.find(query)
    .limit(5)
    .then((data) => {
      res.send(data);
    });
});

app.get("/getFurniture", function (reg, res) {
  const query = { Category: "Furniture" };
  AllProduct.find(query)
    .limit(3)
    .then((data) => {
      res.send(data);
    });
});

app.get("/getAllElectronics", function (reg, res) {
  const query = { Category: "Electronics" };
  AllProduct.find(query).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.get("/geAllFurniture", function (reg, res) {
  const query = { Category: "Furniture" };
  AllProduct.find(query).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.get("/getAllClothes", function (reg, res) {
  const query = { Category: "clothes" };
  AllProduct.find(query).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.get("/geSingleProduct/:id", function (req, res) {
  let url = req.url;
  console.log(url);
  let id = url.split("/");
  console.log("this id", id[2]);
  const query = { _id: id[2] };
  AllProduct.findOne(query).then((data) => {
    console.log("this ID");
    console.log(data);
    res.send(data);
  });
});

// app.get("/add", function (req, res) {
//   res.sendFile(__dirname + "/" + "AddProduct.html");
// });

app.post("/insert", function (req, res) {
  let productToInserted = new Product({
    ProductID: req.body.ProductID,
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
    img: req.body.img,
  });

  productToInserted.save().then(() => {
    console.log("Inserted");
  });
});

app.listen(3500, function () {
  console.log("Example app listening...");
});
