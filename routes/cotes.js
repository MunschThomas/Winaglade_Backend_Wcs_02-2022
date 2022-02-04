const express = require("express");
const router = express.Router();
const connection = require("../helper/db.js");

router.get("/", (req, res) => {
let sql = "SELECT name_glad, name_epreuve, cote FROM glad.glad AS g JOIN glad_epreuve AS ge ON ge.glad_id = g.id JOIN epreuve AS e ON ge.epreuve_id = e.id;"

  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error TO check all cotes");
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;