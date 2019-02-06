const {
  database,
  firestore,
} = require('./admin')

const addMessage = (req, res) => {
  const original = req.query.text
  return database.ref('/messages').push({original: original}).then((snapshot) => {
    return res.redirect(303, snapshot.ref.toString())
  })
}

module.exports = addMessage
