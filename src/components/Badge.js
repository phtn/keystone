import React from 'react'

const styles = {
  container: {
    padding: 5,
    backgroundColor: 'rgb(255, 204, 0)',
    textTransform: 'uppercase',
    fontFamily: 'Abel, sans-serif',
    fontWeight: 'bolder',
    letterSpacing: 2,
    color: '#222',
    textAlign: 'center',
    borderRadius: 2
  }
}

export default props => (
  <div style={Object.assign({}, styles.container, {width: props.name.length * 15})}>
    {props.name}
  </div>
)
  
