// The file separation strategy is inspired by : https://bigcodenerd.org/split-cloud-functions-firebase/

const functions  = require('firebase-functions')
const addMessage = require('./add-message')

module.exports = {
  'addMessage' : functions.https.onRequest(addMessage),
}
