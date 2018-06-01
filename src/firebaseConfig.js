import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: "AIzaSyCEvkGXsJjIwsl-04aA__oIgA0k0u7-vLo",
  authDomain: "vuegram-d47fa.firebaseapp.com",
  databaseURL: "https://vuegram-d47fa.firebaseio.com",
  projectId: "vuegram-d47fa",
  storageBucket: "vuegram-d47fa.appspot.com",
  messagingSenderId: "576467191465"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}