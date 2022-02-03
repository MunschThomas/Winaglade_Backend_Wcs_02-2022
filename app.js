require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const example = require("./routes/example");

const port = process.env.PORT ?? 3000;

app.use(cors());

app.use("/", example);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
