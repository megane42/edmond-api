// The file separation strategy is inspired by : https://bigcodenerd.org/split-cloud-functions-firebase/

const functions = require('firebase-functions')
const books     = require('./books')

module.exports = {
  'books' : functions.region('asia-northeast1').https.onRequest(books),
}
