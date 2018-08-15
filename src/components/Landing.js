import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Sea from '../assets/images/sea.jpg'
const styles = {
  container: {
    margin: '20px 20px',
    height: 'auto',
  },
  title: {
    fontFamily: 'Abril Fatface, cursive',
    fontSize: 48,
    letterSpacing: 1,
    color: 'rgb(255, 204, 0)'
  },
  firstTileContainer: {
    backgroundImage: `url(${Sea})`,
    backgroundSize: 'cover',
    height: 480,
    width: '100%',
    borderRadius: 5
  },
  secondTileContainer: {
    backgroundImage: `url(${Sea})`,
    backgroundSize: 'cover',
    height: 220,
    width: '100%',
    borderRadius: 5
  },
  thirdTileContainer: {
    backgroundImage: `url(${Sea})`,
    backgroundSize: 'cover',
    height: 220,
    width: '100%',
    borderRadius: 5
  }
}
export default props => (
  <div style={styles.container}>
    <Grid columns={2}>
      <Grid.Row stretched>
        
        <Grid.Column width={10}>
          <div style={styles.firstTileContainer}>

          </div>
        </Grid.Column>
        
        <Grid.Column width={6} divided>
          <Grid.Row><div style={styles.secondTileContainer}></div></Grid.Row>
          <Grid.Row><div style={styles.thirdTileContainer}></div></Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)