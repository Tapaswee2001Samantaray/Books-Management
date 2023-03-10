const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();
const multer = require('multer');

app.use(express.json());
app.use(multer().any());

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://Tapaswee2001Samantaray:jecky2001@cluster0.zinufff.mongodb.net/booksManagementGroup14Database",
    { useNewUrlParser: true }
)
    .then(() => console.log("mongoDB is connected."))
    .catch((err) => console.log(err));

app.use("/", route);

let port = 3000;
app.listen(port, function () {
    console.log(`Express app is running on port  ${port}`);
});