const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const res = require('express/lib/response')
const app = express()

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use(cors())

const db_manager = require('./persistence/dbmanager');

app.listen(8985, () => {
    console.log("Api Corriendo")
})

app.get('/product', (req, res) => {
    db_manager.product_read(req, res);
})

app.post('/product', (req, res) => {
    db_manager.product_create(req, res);
})

app.put('/product', (req, res) => {
    db_manager.product_update(req, res);
})

app.delete('/product', (req, res) => {
    db_manager.product_delete(req, res);
})
