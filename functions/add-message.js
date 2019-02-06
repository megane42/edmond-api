const {
  firestore,
} = require('./admin')

const addMessage = (req, res) => {
  const original = req.query.text || ""
  return firestore.collection('messages').add({original: original}).then(() => {
    return res.send('ok')
  })
}

module.exports = addMessage
