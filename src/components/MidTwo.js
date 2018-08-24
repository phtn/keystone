import React from 'react'
import Badge from './Badge'
import Fade from 'react-reveal/Fade'
import { Grid } from 'semantic-ui-react'

const styles = {
  container: {
    height: 200,
    fontFamily: 'Cinzel, serif',
    fontSize: 24,
    fontWeight: 400,
    background: 'linear-gradient(to right, #00d2ff, #3a7bd5)',
    textAlign: 'center',
    borderRadius: 5,
    margin: 20
  },
  content: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  button: {
    fontFamily: 'Cinzel, serif',
    fontSize: 18,
    height: 50,
    padding: '0px 20px',
    borderRadius: 3,
    backgroundColor: '#eee',
    border: 0,
    cursor: 'pointer'
  }
}
export default props => (
  <div>
    <Badge name='mid bar two non-collapsible'/>
    <div style={styles.container}>
    <Fade bottom cascade>

      <Grid columns={3}>
          <Grid.Row stretched>
            <Grid.Column><Fade top cascade>test</Fade></Grid.Column>
            <Grid.Column>test</Grid.Column>
            <Grid.Column>test</Grid.Column>
          </Grid.Row>
        
      </Grid>
      </Fade>
    </div>
  </div>
)