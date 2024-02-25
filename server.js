import path, { join } from "path";

import express from "express";

const app = express();

const port = 3000;

app.use(express.static(path.resolve(process.cwd(), "build")));

app.get("*", (req, res) => {
  const indexPath = join(path.resolve(process.cwd(), "build"), "index.html");
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
