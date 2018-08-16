import React from 'react'
import { Grid, Responsive } from 'semantic-ui-react'
import Sea from '../assets/images/sea.jpg'
import Drone from '../assets/images/drone.jpg'
import Burger from '../assets/images/burger.jpg'
import Badge from './Badge';
import Desc from './Desc';
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
    borderRadius:3,
    padding: 20
  },
  secondTileContainer: {
    backgroundImage: `url(${Drone})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 240,
    width: '100%',
    borderRadius: 3,
    marginBottom: 10,
    padding: 20
  },
  thirdTileContainer: {
    backgroundImage: `url(${Burger})`,
    backgroundSize: 'cover',
    height: 240,
    width: '100%',
    borderRadius: 3,
    padding: 20
  }
}
export default props => (
  <div style={styles.container}>
    <Responsive minWidth={768}>
    <Grid columns={2}>
      <Grid.Row stretched>
        <Grid.Column width={10}>
          <div style={styles.firstTileContainer}>
            <Badge name='water'/>
            <Desc name='What exactly is it?'/>
          </div>
        </Grid.Column>
        <Grid.Column width={6}>
          <Grid.Row>
            <div style={styles.secondTileContainer}><Badge name='tech'/></div>
          </Grid.Row>
          <Grid.Row><div style={styles.thirdTileContainer}><Badge name='food'/></div></Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Responsive>

    <Responsive maxWidth={767}>
    <Grid columns={2}>
      <Grid.Row stretched>
        <Grid.Column width={16}>
          <div style={Object.assign({}, styles.firstTileContainer, {marginBottom: 20})}>
            <Badge name='water'/>
            <Desc name='What exactly is it?'/>
          </div>
        </Grid.Column>
        <Grid.Column width={16}>
          <Grid.Row><div style={Object.assign({}, styles.secondTileContainer, {marginBottom: 20, height: 480})}><Badge name='tech'/></div></Grid.Row>
          <Grid.Row><div style={Object.assign({}, styles.thirdTileContainer, {marginBottom: 20, height: 480})}><Badge name='food'/></div></Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Responsive>
    
  </div>
)