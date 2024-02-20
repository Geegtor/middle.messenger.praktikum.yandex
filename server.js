import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('./build/'));

app.get("/", function (req, res) {
  res.send("hello sign-in");
});

app.get("/sign-up", function (req, res) {
  res.send("hello sign-up");
});

app.get("/settings", function (req, res) {
  res.send("hello settings");
});


app.get("/messanger", function (req, res) {
  res.send("hello messanger");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
