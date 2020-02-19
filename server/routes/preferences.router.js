const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id
    const queryText = `SELECT "user".id, "health".name, "user_health".health_id, "user_health".status from "user"
                        JOIN "user_health" on "user".id = "user_health".user_id
                        JOIN "health" on "user_health".health_id = "health".id
                        WHERE "user".id =  $1
                        ORDER BY "health".name ASC;`;
    pool.query(queryText, [id])
        .then(result => {
            res.send(result.rows);
        })
        .catch((e) => {
            console.log('Error on query', e)
            res.sendStatus(500)
        })
})

router.put('/', (req, res) => {
    food_id = req.body.food_id
    user_id = req.body.user_id
    const queryText = `UPDATE user_health SET status = NOT status WHERE user_id = $1 AND health_id = $2 RETURNING user_id;`
    pool.query(queryText, [user_id, food_id])
        .then(response => {
            console.log('updated the preference, sent back this user:', response.rows[0])
            res.send(response.rows[0])
        })
        .catch((e) => {
            res.sendStatus(500)
        })
})
module.exports = router;