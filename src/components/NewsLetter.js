import React from "react";
import { Menu, Input } from "semantic-ui-react";
import fconfig from "../Firebase";
import firebase from "firebase/app";
import 'firebase/database'
import Data from "../observables/Data";
import { observer } from "mobx-react";

const oData = new Data();

const styles = {
  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    height: 150,
    width: 310
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

const Firebase = firebase.initializeApp(fconfig);

const sendEmail = email => {
  Firebase.database()
    .ref("/emails")
    .push(email);
  // console.log(email, "sent! ");
  oData.setEmailSentToTrue()
  // console.log(oData.emailSent)
};

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
              onClick: () => sendEmail(oData.email)
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
  render(){
    return(
      <div style={styles.centered}>
        <div style={styles.container}>
          <div style={styles.title}>newsletter</div>
            {isEmailSent(oData.emailSent)}
        </div>
      </div>
    )
  }
})
export default NewsLetter
