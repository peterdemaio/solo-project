const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let source = req.body.recipe.source
    let user_id = req.body.user
    let label = req.body.recipe.label
    let url = req.body.recipe.url
    let image = req.body.recipe.image
    let ingredients = req.body.recipe.ingredientLines
    console.log('ready to save this recipe:', label, url, image, ingredients, user_id)
    let sqlText = `INSERT INTO "favorites" ("label", "url", "image", "ingredients", "user_id", "source")
                    VALUES ($1, $2, $3, $4, $5, $6);`
    pool.query(sqlText, [label, url, image, ingredients, user_id, source])
    .then(() => {res.sendStatus(200)})
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
});

router.get('/', (req, res) => {
    console.log('in favorites get route with:', req.query.id)
    let id = req.query.id
    let sqlText = `SELECT * FROM favorites WHERE "user_id" = $1 ORDER BY "id"`
    pool.query(sqlText, [id])
    .then((result) => {
        res.send(result.rows)
        console.log(result.rows)
    })
    .catch((e) =>{
        console.log(e)
        res.sendStatus(500)
    })
})

router.delete('/:food_id', (req, res) => {
    console.log('ready to delete book', req.params)
    let id = req.params.food_id
    let sqlText = `DELETE from "favorites" WHERE id = $1`
    pool.query(sqlText, [id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((e) => {
        console.log(e)
        res.sendStatus(500)
    })
})

router.put('/', (req, res) => {
    console.log('ready to update the note', req.body )
    let food_id = req.body.food_id
    let note = req.body.note
    let sqlText = `UPDATE "favorites" SET "notes" = $1 WHERE "id" = $2;`
    pool.query(sqlText, [note, food_id])
    .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error updating movie', err);
            res.sendStatus(500);
        })
})


module.exports = router;