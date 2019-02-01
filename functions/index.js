const functions = require('firebase-functions')

// Firebase Admin SDK を使うことで、管理者権限で Firebase の各機能を使うことができる。
// 認証は ADC というプロセスに則って実施される。Cloud Functions 内で叩く分には引数無しで initialize できる。
// see:
//   https://firebase.google.com/docs/admin/setup?hl=ja
//   https://cloud.google.com/docs/authentication/production?hl=ja
const admin = require('firebase-admin')
admin.initializeApp()

exports.addMessage = functions.https.onRequest((req, res) => {
  const original = req.query.text
  return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
    return res.redirect(303, snapshot.ref.toString())
  })
})
