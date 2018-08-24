import config from './FirebaseConfig'
import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/storage'
import Data from './observables/Data'

const fire = firebase.initializeApp(config)
const data = new Data()

let dataRef = fire.database().ref('/articles')

function loadData(){
  dataRef.on('value', snap => {
    data.getArticles(snap.val())
  })
}
export default loadData
