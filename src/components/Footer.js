import React from 'react'
import { Menu } from 'semantic-ui-react'
import Badge from './Badge';

const styles = {
  container: {
    fontFamily: 'Cinzel, serif',
    height: 400,
    backgroundColor: '#333',
    marginTop: 20
  },
  copyright: {
    position: 'relative',
    bottom: 0,
    textAlign: 'center',
    color: '#0083b0'
  }
}

const Social = () => (
  <Menu stackable inverted>
    <Menu.Item>Get Connected</Menu.Item>
    <Menu.Item position='right'>Email</Menu.Item>
  </Menu>
)
const Copyright = () => (
  <div style={styles.copyright}>Keystone Media Group LLC &copy; 2018</div>
)
export default props => (
  <div>
  <Badge name='Investor Relations'/>
  <div style={styles.container}>
    <Social/>
    <Copyright/>
  </div>
  </div>
)