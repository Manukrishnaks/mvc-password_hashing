const express = require("express");
const app = express();
const path = require("path");
const router = require("./router/router");




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(8000, () => {
  console.log("Server is running ");
});
