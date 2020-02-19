const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    console.log('ready to search with', req.query)
    axios.get(`https://api.edamam.com/search?app_id=3ebdd50e&app_key=87f9f71458891eac2d73c6ce7a07f4b4&q=${req.query.q}${req.query.health}`)
    //axios.get('https://api.edamam.com/search?app_id=3ebdd50e&app_key=87f9f71458891eac2d73c6ce7a07f4b4&q=soup&health=vegan')
    .then( response => {
        res.send(response.data)
    })
    .catch( (e) => {
        console.log(e)
    })
});

module.exports = router