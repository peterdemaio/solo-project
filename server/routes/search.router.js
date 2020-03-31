const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    console.log('ready to search with', req.query);
    console.log(process.env)
    axios.get(`https://api.edamam.com/search?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&q=${req.query.q}${req.query.health}`)
    .then( response => {
        res.send(response.data)
    })
    .catch( (e) => {
        console.log(e)
    })
});

module.exports = router