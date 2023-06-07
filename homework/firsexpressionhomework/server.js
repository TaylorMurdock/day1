const express = require("express");
const app = express();

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}!`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);

  const tipAmount = (total * tipPercentage) / 100;
  res.send(`your tip will be ${tipAmount.toString()} dollars`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
