require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());

const glad = require("./routes/glad");
// const cotes = require("./routes/cotes");

// app.use("/api/cotes", cotes);
app.use("/api/glad", glad);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the main page");
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on http://localhost:${port}`);
  }
});
