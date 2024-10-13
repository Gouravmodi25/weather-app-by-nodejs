const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = process.env.PORT || 5000;
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");
const partials_path = path.join(__dirname, "../template/partials");
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errMsg: "Oops! Page not Found",
  });
});
app.listen(PORT, () => {
  console.log("Server is Started");
});
