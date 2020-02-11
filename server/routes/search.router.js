const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('trying to search with ', req.params)
    // const queryText = `SELECT * FROM health;`;
    // pool.query(queryText)
    // .then(result => {
    //     console.log(result.rows)
    //     res.send(result.rows);
    // })
    // .catch( (e) => {
    //     console.log('Error on query', e)
    //     res.sendStatus(500)
    // })
});

module.exports = router