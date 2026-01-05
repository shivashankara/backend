import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Application is working ");
});
app.listen(5000, () => {
  console.log("application run in 5000 port ");
});
