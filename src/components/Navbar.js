import React from 'react'
import { NavLink } from 'react-router-dom'
import Peach from '../assets/peach.svg'
import { Menu, Responsive } from 'semantic-ui-react'
import UI from '../observables/UI'
import { observer } from 'mobx-react';
const ui = new UI()

const styles = {
  items: {
    textTransform: 'uppercase',
    fontFamily: 'Abel, sans-serif',
    fontWeight: 'bolder',
    letterSpacing: 2
  },
  sidebar: {
    position: 'absolute',
    top: 45,
    
    height: 100,
    width: 150,
    backgroundColor: '#333',
    zIndex: 1
  }
}
const links = ['news', 'blog', 'products', 'about']

const Navbar = observer( class Container extends React.Component {
  componentDidMount(){
    window.addEventListener('resize', ()=> {
      ui.getWidth(window.innerWidth)
      ui.getHeight(window.innerHeight)
    })
  }
  componentWillUnmount(){
    window.removeEventListener('resize', ()=> {
      ui.getWidth(window.innerWidth)
      ui.getHeight(window.innerHeight)
    })
  }
  render(){
    return(
      <div>
        <Responsive as={Menu} minWidth={768} pointing secondary>
          <Menu.Item><img src={Peach} height={20} alt=''/></Menu.Item>
          <Menu.Item style={styles.items}><NavLink to='/'>keystone media</NavLink></Menu.Item>
          <Menu.Item position='right'></Menu.Item>
          {links.map(link=> (
            <Menu.Item key={links.indexOf(link)} active={ui.activeTab === link}  style={styles.items}><NavLink to={`/${link}`} onClick={()=> ui.setActiveTab(link)}>{link}</NavLink></Menu.Item>  
          ))}
        </Responsive>
        <Responsive as={Menu} maxWidth={767} pointing secondary>
          <Menu.Item><img src={Peach} height={20} alt=''/></Menu.Item>
          <Menu.Item position='right' style={styles.items} onClick={()=> ui.toggleSidebar()}>menu</Menu.Item>
        </Responsive>
        <div className={ui.sidebarVisible} style={Object.assign({}, styles.sidebar, {left: ui.width - 150, visibility: ui.sidebarInit})}></div>
      </div>
    )
  }
})
export default Navbar
