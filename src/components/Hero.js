import React from 'react'
import Animate from 'react-move/Animate'
import { Segment } from 'semantic-ui-react'

const styles = {
  heroContainer: {
    margin: '20px 20px',
    height: '100%',
  },
  hero: {
    backgroundColor: 'rgba(90, 250, 250)',
    padding: 50,
    borderRadius: 0,
    border: '0px',
  },
  contentContainer: {
    borderRadius: 0,
    border: '0px',
    backgroundColor: 'transparent'
  }
}

export default props => (
  <div style={styles.heroContainer}>
    <Animate
      start={{
        y: ui.yHero,
        z: ui.zHero,
        h: ui.hHero
      }}
      update={{
        y: [ui.yHero],
        z: [ui.zHero],
        h: [ui.hHero],
        timing: { duration: 300}
      }}
    >
    {({y, z, h})=> (
      <Segment className='animated fadeIn' style={Object.assign({}, styles.hero, {boxShadow: `rgb(204,204,204) 0px ${y}px ${z}px`, height: h})}>
      </Segment>
    )}
    
    </Animate>
  </div> 
)