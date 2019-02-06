const {
  firestore,
} = require('./admin')

const addISBN = (req, res) => {
  const isbn = req.query.isbn
  return firestore.collection('books').add({isbn: isbn}).then(
    () => {
      return res.send('{"status":"ok"}')
    }
  )
}

module.exports = addISBN
