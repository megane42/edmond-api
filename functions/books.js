const {
  firestore,
} = require('./admin')

const express = require('express');
const cors    = require('cors');
const isbn    = require('node-isbn');

// inits

const app = express();
app.use(cors({ origin: true }));

// actions

const add_book = (req, res) => {
  return isbn.resolve(
    req.params.isbn
  ).then((book) => {
    return firestore.collection('books').doc(req.params.isbn).set(book)
  }).then(() => {
    return res.status(200).send({status: "ok"})
  }).catch(() => {
    return res.status(500).send({status: "ng"})
  })
}

// routings

app.post('/:isbn', add_book)

module.exports = app
