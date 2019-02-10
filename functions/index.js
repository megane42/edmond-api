// The file separation strategy is inspired by : https://bigcodenerd.org/split-cloud-functions-firebase/

const functions = require('firebase-functions')
const add_isbn  = require('./add_isbn')

module.exports = {
  'add_isbn' : functions.https.onRequest(add_isbn),
}
