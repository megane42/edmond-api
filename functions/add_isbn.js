const {
  firestore,
} = require('./admin')

const add_isbn = (req, res) => {
  const isbn = req.query.isbn
  return firestore.collection('books').add({
    isbn: isbn
  }).then(() => {
    return res.status(200).send('{"status":"ok"}')
  }).catch(() => {
    return res.status(500).send('{"status":"ng"}')
  })
}

module.exports = add_isbn
