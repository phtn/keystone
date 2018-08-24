import React from "react";
import { Menu, Input } from "semantic-ui-react";
import firebaseConfig from "../FirebaseConfig";
import firebase from "firebase/app";
import 'firebase/database'
import Data from "../observables/Data";
import { observer } from "mobx-react";
import Fade from 'react-reveal/Fade'
import Badge from './Badge'

const oData = new Data();

const styles = {
  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    height: 150,
    width: 310,
    margin: 20
  },
  title: {
    height: 50,
    backgroundColor: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#eee",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontFamily: "Varela Round, sans-serif",
    fontWeight: "bolder",
    fontSize: 12
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 310,
    border: "1px solid gray"
  },
  contentItem: {
    fontFamily: "Montserrat, sans-serif"
  }
};

const Firebase = firebase.initializeApp(firebaseConfig);

const sendEmail = (email, createdAt) => {
  let info = {
    email, createdAt
  }
  Firebase.database()
    .ref("/emails")
    .push(info);
  oData.setEmailSentToTrue()
};

const getDataFromFirebase = () => {
  const arr = []
  const dataRef = Firebase.database().ref('/articles')
  dataRef.on('value', snapshot => {
    // oData.getArticles(snapshot.val())
    // arr.push(snapshot.val())
    // oData.getArticles(arr)
    // console.log(oData.articles)
    // console.log(snapshot.val())
    let data = snapshot.val()
    for (let key in data){
      if (!data.hasOwnProperty(key)) continue;
      arr.push(data[key])
      oData.articles.push(data[key])
      // console.log(oData.articles)
      // console.log(data[key])
    }
    console.log(oData.articles[0].title)
  })
}

const isEmailSent = (sent) => {
  if(sent === false){
    return (
      <div style={styles.content}>
        <Menu.Item position="right">
          <Input
            style={styles.contentItem}
            type="email"
            onChange={e => oData.getEmailInput(e.target.value)}
            action={{
              type: "submit",
              content: "SUBMIT",
              color: "black",
              onClick: () => sendEmail(oData.email, Date())
            }}
            placeholder="Email Address..."
          />
        </Menu.Item>
      </div>
    )
  } else {
    return <div style={styles.content}><p className='animated zoomIn'>Thank You!</p></div>
  }
}

const NewsLetter = observer( class Container extends React.Component {
  componentWillMount(){
    getDataFromFirebase()
  }
  render(){
    
    return(
      <div>
      <Badge name='get latest updates'/>
      <div style={styles.centered}>
        <Fade bottom>
        <div style={styles.container}>
          <div style={styles.title}>newsletter</div>
            {isEmailSent(oData.emailSent)}
        </div>
        </Fade>
      </div>
      </div>
    )
  }
})
export default NewsLetter
