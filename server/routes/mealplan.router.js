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

module.exports = router;