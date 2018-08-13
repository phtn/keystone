import React from 'react'
import { observer } from 'mobx-react'
import Animate from 'react-move/Animate'
import { Segment } from 'semantic-ui-react'
import UI from '../observables/UI'
import NewsLetter from './NewsLetter';

const ui = new UI()

// Color.fromARGB(255, 255, 59, 48),
// Color.fromARGB(255, 255, 149, 0),
// Color.fromARGB(255, 255, 204, 0),
// Color.fromARGB(255, 76, 217, 100),
// Color.fromARGB(255, 90, 200, 250),
// Color.fromARGB(255, 0, 122, 255),
// Color.fromARGB(255, 88, 86, 214),
// Color.fromARGB(255, 255, 45, 85),

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
const HomePage = observer(
  class Container extends React.Component {
    
    componentDidMount(){
      ui.levitateHero()
    }
    render(){
      return (
        <div>

        
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
              <Segment onClick={p=> ui.toggleSidebar()} className='animated fadeIn' style={Object.assign({}, styles.hero, {boxShadow: `rgb(204,204,204) 0px ${y}px ${z}px`, height: h})}>
              </Segment>
            )}
            
            </Animate>
          </div>                
            
        
        
          <NewsLetter/>
        </div>
      )
    }
  }
)
export default HomePage