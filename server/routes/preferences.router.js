const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('trying to get the preferences')
    const queryText = `SELECT * FROM health;`;
    pool.query(queryText)
    .then(result => {
        console.log(result.rows)
        res.send(result.rows);
    })
    .catch( (e) => {
        console.log('Error on query', e)
        res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let array = req.body
    let queryText = ''
    // Add post route here using join table for user and preferences
    for (let item of array) {
        queryText = `INSERT INTO "user_health" ("user_id", "health_id") VALUES (${req.user.id}, ${item})`
        console.log(queryText)
        pool.query(queryText)
        .then( () => {

        })
    }
});

module.exports = router;