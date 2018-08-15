import React from 'react'
const styles = {
  container: {
    height: 100,
    paddingLeft: 20,
    backgroundColor: '#333'
  },
  title: {
    fontFamily: 'Cinzel, serif',
    fontSize: 36,
    letterSpacing: 2,
    color: '#eee',
    lineHeight: '100px'
  }
}
export default props => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Keystone Media
    </h1>
  </div>
)