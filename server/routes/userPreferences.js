const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Getting preferences for ', req.query)

    const queryText = ` SELECT "user".id, "health".name from "user"
                        JOIN "user_health" on "user".id = "user_health".user_id
                        JOIN "health" on "user_health".health_id = "health".id
                        WHERE "user".id = ${req.query.id}`
    pool.query(queryText)
    .then(result => {
        res.send(result.rows)
        console.log(result.rows)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;