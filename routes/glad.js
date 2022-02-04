const express = require("express");
const router = express.Router();
const connection = require("../helper/db.js");

router.get("/", (req, res) => {
let sql = "SELECT g.name_glad, g.image, g.imageSans, g.age, g.taille, g.VIT, g.ACC, g.MAN, g.ATT, g.DEF, g.AGI, a.name_arme, m.name_metier, v.name_ville, t.name_team FROM glad AS g JOIN arme AS a ON g.arme_id = a.id JOIN metier AS m ON g.metier_id = m.id JOIN ville AS v ON g.ville_id = v.id JOIN team AS t ON g.team_id = t.id;"
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



router.post("/add", (req, res) => {
    console.log("req BODY",req.body)
  
    const sql = "INSERT INTO glad (`name_glad`, `image`, `imageSans`, `age`, `taille`, `VIT`,`ACC`,`MAN`,`ATT`, `DEF`, `AGI`, ) VALUES (?,?,?,?,?)";
    const values = [
      req.body.week,
      req.body.year,
      req.body.id_users,
      req.body.url,
      req.body.description
    ]
    
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      return res.status(200).send(result);
    })
    console.log("POST '/articles/add'")
  })

module.exports = router;
