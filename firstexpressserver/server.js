// IMPORT YOUR DEPENDENCIES
const express = require("express"); // require returns the specified external dependency

// CREATE AN EXPRESS APPLICATION OBJECT
const app = express();

// ROUTES = ITEMS MENU, Possible requests your server can response to
// app.method("/url",(req, res) => {})
// req = request object (details about the request)
// res = response object (has functions for sending response)
app.get("/", (req, res) => {
  res.send("Hello World");
});
//?key=value&key=value&key=value
app.get("/bigcheese", (req, res) => {
  const cheese = req.query.cheese;
  const bread = req.query.bread;
  const vegetable = req.query.vegetable;
  res.send(`<h1>You are eating ${cheese}, ${bread} and ${vegetable}</h1>`);
});
// using URL PARAMS (:param)
app.get("/bread/:type", (req, res) => {
  console.log(req.params); // req.params = url params
  res.send(req.params);
});

app.get("/list/:id", (req, res) => {
  const arr = ["Alex", "Winston", "David", "Kyle"];
  const id = req.params.id;
  res.send(`<h1>${arr[id]}</h1>
        <h2>This person is a ${parseInt(id) % 2 === 0 ? "IL" : "IA"}</h2>
    `);
});
// TURN ON THE SERVER SO IT LISTEN FOR REQUEST
// TURN OFF THE SERVER WITH CTRL+C IN THE TERMINAL
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
