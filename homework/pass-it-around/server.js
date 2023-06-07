const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>'
  );
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

app.get("/:number_of_bottles", (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  let message = `${numberOfBottles} Bottles of beer on the wall.`;

  if (numberOfBottles > 0) {
    const nextUrl = `/${numberOfBottles - 1}`;
    message += `<br><a href="${nextUrl}">Take one down, pass it around</a>`;
  }

  message += `<br><a href="/">Start Over</a>`;
  res.send(`<h1>${message}</h1>`);
});
