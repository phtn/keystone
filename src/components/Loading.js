import React from 'react'
import { Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import Paragraph from '../assets/paragraph.png'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
export default props => {
  if(props.pastDelay){
    return (
      <div style={styles.container}>
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
        <Image src={Paragraph} />
      </Segment>
      </div>
    )
  } else {
    return null
  }
}