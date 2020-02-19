const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let recipe_id = req.body.recipe.id
    let user_id = req.body.user
    let sqlText = `INSERT INTO "meal_plan" ("fav_id", "user_id")
                    VALUES ($1, $2)`
    pool.query(sqlText, [recipe_id, user_id])
    .then(() => {res.sendStatus(200)})
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.get('/', (req, res) => {
    let id = req.query.id
    let sqlText = `SELECT "meal_plan".id, "favorites".label, "favorites".url, "favorites".image, "favorites".ingredients, "favorites".source, "favorites".notes from "meal_plan" 
    JOIN "favorites" on "meal_plan".fav_id = "favorites".id
    WHERE "meal_plan".user_id = $1`;
    pool.query(sqlText, [id])
    .then((result) => {
        res.send(result.rows)
    })
    .catch((err) => {
        res.sendStatus(500)
        console.log(err)
    })
})

module.exports = router;