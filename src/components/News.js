import React from 'react'
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
    fontSize: 110,
    fontFamily: 'Varela Round, sans-serif',
    fontWeight: 'bolder',
    textTransform: 'uppercase',
    color: 'rgb(255, 45, 85)',
    letterSpacing: 10
  }
}
export default props => (
  <div className='animated zoomIn' style={styles.container}>News</div>
)