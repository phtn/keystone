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
    color: 'rgb(88, 86, 214)',
    letterSpacing: 10
  }
}
export default props => (
  <div className='animated fadeIn' style={Object.assign({}, styles.container, {height: props.height})}>About</div>
)