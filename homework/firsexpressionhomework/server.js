const express = require("express");

const app = express();

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}!`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
