import React from 'react'
import Badge from './Badge'
import Fade from 'react-reveal/Fade'

const styles = {
  container: {
    height: 200,
    fontFamily: 'Cinzel, serif',
    fontSize: 24,
    fontWeight: 400,
    background: 'linear-gradient(to right, #b3ffab, #12fff7)',
    textAlign: 'center',
    borderRadius: 5,
    margin: 20
  },
  content: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button: {
    fontFamily: 'Cinzel, serif',
    fontSize: 18,
    height: 50,
    padding: '0px 20px',
    borderRadius: 3,
    backgroundColor: '#eee',
    border: 0,
    cursor: 'pointer'
  }
}
export default props => (
  <Fade>
  <Badge name='Get in-touch'/>
  <div style={styles.container}>
    <div style={styles.content}>
    {props.title}
    </div>
    <button style={styles.button}>give us a call at 1-800-526-4141</button>
  </div>
  </Fade>
)