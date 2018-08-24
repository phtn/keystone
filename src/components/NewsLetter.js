import React from "react";
import { Menu, Input } from "semantic-ui-react";
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








const NewsLetter = observer( class Container extends React.Component {
  componentWillMount(){
    // getDataFromFirebase()
  }
  sendEmail(email, createdAt) {
    let info = {
      email, createdAt
    }
    this.props.fire.database()
      .ref("/emails")
      .push(info);
    oData.setEmailSentToTrue()
  }
  isEmailSent (sent) {
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
                onClick: () => this.sendEmail(oData.email, Date())
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
  render(){
    
    return(
      <div>
      <Badge name='get latest updates'/>
      <div style={styles.centered}>
        <Fade bottom>
        <div style={styles.container}>
          <div style={styles.title}>newsletter</div>
            {this.isEmailSent(oData.emailSent)}
        </div>
        </Fade>
      </div>
      </div>
    )
  }
})
export default NewsLetter
