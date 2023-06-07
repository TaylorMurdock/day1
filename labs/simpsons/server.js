const express = require("express");
const app = express();

app.get("/Homer", (req, res) => {
  res.send("Homer is working");
});

app.get("/Marge", (req, res) => {
  res.send("Marge is working");
});

app.get("/Bart", (req, res) => {
  res.send("Bart is working");
});

app.get("/Lisa", (req, res) => {
  res.send("Lisa is working");
});

app.get("/Maggie", (req, res) => {
  res.send("Maggie is working");
});

app.get("/SantasLittleHelper", (req, res) => {
  res.send("Santa's Littler Helper is working");
});

app.get("/KidsName", (req, res) => {
  res.send(`<html>
    <body>
    <h1>Sloane!</h1></body></html>`);
});

app.listen(3000, () => {
  console.log("I am working");
});
