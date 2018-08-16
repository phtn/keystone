import React from 'react'
import { NavLink } from 'react-router-dom'
import Castle from '../assets/castle_black.svg'
import { Menu, Responsive, Input, Dropdown, Icon } from 'semantic-ui-react'
import UI from '../observables/UI'
import { observer } from 'mobx-react';
const ui = new UI()

const styles = {
  container: {
    backgroundColor: 'rgb(255, 204, 0)',
  },
  items: {
    textTransform: 'uppercase',
    fontFamily: 'Abel, sans-serif',
    fontWeight: 'bolder',
    letterSpacing: 2,
    color: '#222'
  },
  sidebar: {
    position: 'absolute',
    top: 145,
    width: 150,
    backgroundColor: '#333',
    zIndex: 1
  },
  links: {
    color: '#222'
  },
  mobileMenu: {
    width: 150
  },
  mobileLinks: {
    color: '#eee'
  }
}
const links = ['news', 'health', 'water', 'weather', 'about', ]

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
      <div style={styles.container}>
        <Responsive as={Menu} minWidth={768} pointing secondary>
          <Menu.Item active={ui.activeTab === 'home'} ><img src={Castle} height={20} alt=''/></Menu.Item>
          <Menu.Item style={styles.items} active={ui.activeTab === 'home'}><NavLink to='/' style={styles.links} onClick={()=> ui.setActiveTab('home')}>home</NavLink></Menu.Item>
          <Menu.Item position='right'></Menu.Item>
          {links.map(link=> (
            <Menu.Item key={links.indexOf(link)} active={ui.activeTab === link}  style={styles.items}><NavLink to={`/${link}`}  style={styles.links} onClick={()=> ui.setActiveTab(link)}>{link}</NavLink></Menu.Item>  
          ))}
        </Responsive>
        <Responsive as={Menu} maxWidth={767} pointing secondary>
          <Menu.Item><img src={Castle} height={20} alt=''/></Menu.Item>
          <Menu.Item style={styles.items}><NavLink to='/' style={styles.links} onClick={()=> ui.setActiveTab('home')}>home</NavLink></Menu.Item>
          <Menu.Item position='right' style={styles.items} onClick={()=> ui.toggleSidebar()} onBlur={()=> ui.toggleSidebar()} as='a'>menu</Menu.Item>
        </Responsive>
        <div className={ui.sidebarVisible} style={Object.assign({}, styles.sidebar, {left: ui.width - 150, visibility: ui.sidebarInit})}>
        <Menu
            inverted
            vertical
            width='thick'
          >
          {links.map(link=> (
            <Menu.Item key={links.indexOf(link)} active={ui.activeTab === link}  style={Object.assign({}, styles.items, styles.mobileMenu)}><NavLink to={`/${link}`}  style={styles.mobileLinks} onClick={()=> {
              ui.setActiveTab(link)
              ui.toggleSidebar()
            }}>{link}</NavLink></Menu.Item>  
          ))}
          </Menu>
        </div>
      </div>
    )
  }
})
export default Navbar
