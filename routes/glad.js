const express = require("express");
const router = express.Router();
const connection = require("../helper/db.js");

router.get("/", (req, res) => {
let sql = "SELECT g.name_glad, g.image, g.age, g.taille,a.name_arme, m.name_metier, v.name_ville, t.name_ville FROM glad as g JOIN arme as a ON g.arme_id = a.id JOIN metier as m ON g.metier_id = m.id JOIN ville as v ON g.ville_id = v.id JOIN team as t ON g.team_id = t.id;"
//   let sql = "SELECT * FROM arme JOIN glad ON glad.arme_id = arme.id";
//   let sql= "SELECT * FROM glad "

  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error TO check all glad");
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
