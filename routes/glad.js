const express = require("express");
const router = express.Router();
const connection = require("../helper/db.js");

router.get("/", (req, res) => {
let sql = "SELECT g.name_glad, g.image, g.age, g.taille, g.VIT, g.ACC, g.MAN, g.ATT, g.DEF, g.AGI, a.name_arme, m.name_metier, v.name_ville, t.name_team FROM glad AS g JOIN arme AS a ON g.arme_id = a.id JOIN metier AS m ON g.metier_id = m.id JOIN ville AS v ON g.ville_id = v.id JOIN team AS t ON g.team_id = t.id;"
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

router.get('/all', (req,res) => {
  let sql = 'SELECT name_glad, image, age, taille, name_arme, name_metier, name_ville, name_team, name_charComp, note_charComp, name_combatComp, note_combatComp FROM glad JOIN arme ON glad.arme_id = arme.id JOIN metier ON glad.metier_id = metier.id JOIN ville ON glad.ville_id = ville.id JOIN team ON glad.team_id = team.id JOIN glad_charComp ON glad_charComp.glad_id = glad.id JOIN charComp ON glad_charComp.charComp_id = charComp.id JOIN glad_combatComp ON glad_combatComp.glad_id = glad.id JOIN combatComp ON glad_combatComp.combatComp_id = combatComp.id ORDER BY name_glad ;'

  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error TO check all glad");
    } else {
      res.status(200).json(result);
    }
  });
});


router.get('/test', (req,res) => {
  let sql = 'SELECT name_glad, name_charComp, note_charComp, name_combatComp, note_combatComp FROM glad JOIN glad_charComp ON glad_charComp.glad_id = glad.id JOIN charComp ON glad_charComp.charComp_id = charComp.id JOIN glad_combatComp ON glad_combatComp.glad_id = glad.id  JOIN combatComp ON glad_combatComp.combatComp_id = combatComp.id ORDER BY name_glad ;'

  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error TO check all glad");
    } else {
      res.status(200).json(result);
    }
  });
});

router.get('/test2', (req,res) => {
  let sql = 'SELECT name_glad, name_charComp, note_charComp FROM glad JOIN glad_charComp ON glad_charComp.glad_id = glad.id JOIN charComp ON glad_charComp.charComp_id = charComp.id;'

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
