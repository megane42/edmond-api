// The file separation strategy is inspired by : https://bigcodenerd.org/split-cloud-functions-firebase/

const functions = require('firebase-functions')
const addISBN   = require('./add-isbn')

module.exports = {
  'addISBN' : functions.https.onRequest(addISBN),
}
