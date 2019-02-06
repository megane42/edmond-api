const admin = require('firebase-admin')

admin.initializeApp()

const database  = admin.database()
const firestore = admin.firestore()

module.exports = {
  database,
  firestore,
}
