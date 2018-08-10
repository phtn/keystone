import React from 'react'
const styles = {
  container: {
    // lineHeight: '50px',
    marginLeft: 10
  },
  brand: {
    fontFamily: 'Varela Round, sans-serif',
    fontSize: 20,
    // fontWeight: 700
    color: '#eee'
  }
}
export default props => (
  <div style={styles.container}>
    <h1 style={styles.brand}>
      Keystone Media
    </h1>
  </div>
)