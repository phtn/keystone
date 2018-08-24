import React from 'react'
const styles = {
  container: {
    height: 100,
    paddingLeft: 20,
    background: 'linear-gradient(to right, #333, #0083b0)'
  },
  title: {
    fontFamily: 'Cinzel, serif',
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: 2,
    color: '#eee',
    lineHeight: '100px',
    textShadow: '2px 1px rgba(0,0,0,0.7)'
  }
}
export default props => (
  <div style={styles.container}>
    <h1 style={styles.title} className='animated fadeIn'>
      {props.title}
    </h1>
  </div>
)