const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let groceryList = req.body.list
    let id = req.body.id
    let sqlText = ``
    let promises = []
    for (let item of groceryList) {
        sqlText = `INSERT INTO "grocery_list" ("user_id", "item", "checked")
                VALUES ($1, $2, $3)`
        let promise = pool.query(sqlText, [id, item, false])
        promises.push(promise)
    }
    return Promise.all(promises)
        .then(() => {
            res.sendStatus(201)
        })
        .catch((err) => {
            res.sendStatus(500)
            console.log(err)
        })
})

router.get('/', (req, res) => {
    let id = req.query.id
    console.log('getting grocery list for id:', id)
    const queryText = `SELECT * FROM "grocery_list" WHERE user_id = $1;`;
    pool.query(queryText, [id])
        .then(result => { res.send(result.rows) })
        .catch((e) => {
            console.log('Error getting grocery list', e)
            res.sendStatus(500)
        })
})

router.put('/', (req, res) => {
    console.log('in router put route')
})

router.delete('/:id', (req, res) => {
    console.log('in router delete route with', req.params.id)
    let id = req.params.id
    let sqlText = 'DELETE FROM "grocery_list" WHERE id = $1'
    pool.query(sqlText, [id])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((e) => {
            res.sendStatus(500)
        })
})

module.exports = router;