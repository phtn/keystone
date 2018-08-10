import React from 'react'
import { NavLink } from 'react-router-dom'
import Banana from '../assets/banana.svg'
import { Menu } from 'semantic-ui-react'

const styles = {
  items: {
    textTransform: 'uppercase',
    fontFamily: 'Abel, sans-serif',
    fontWeight: 'bolder',
    letterSpacing: 2
  }
}
export default props => (
  <div>
    <Menu pointing secondary>
      <Menu.Item><img src={Banana} height={20} alt=''/></Menu.Item>
      <Menu.Item active position='right' style={styles.items}><NavLink to='/'>Home</NavLink></Menu.Item>
      <Menu.Item style={styles.items}><NavLink to='/blog'>Blog</NavLink></Menu.Item>
      <Menu.Item style={styles.items}><NavLink to='/news'>News</NavLink></Menu.Item>
    </Menu>
  </div>
)
