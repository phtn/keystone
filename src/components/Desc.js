import React from 'react'

const styles = {
  container: {
    padding: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textTransform: 'uppercase',
    fontFamily: 'Abel, sans-serif',
    fontWeight: 'bolder',
    letterSpacing: 2,
    color: '#eee',
    textAlign: 'center',
    borderRadius: 2,
    position: 'absolute',
    bottom: 35,
    left: 0,
    height: 100,
    width: '100%'
  },
  title: {

  }
}

export default props => (
  <div style={Object.assign({}, styles.container)}>
    <h1>{props.name}</h1>
  </div>
)
  
