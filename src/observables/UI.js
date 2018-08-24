import { extendObservable } from 'mobx'

class UI {
  constructor(){
    extendObservable(this, {
      width: window.innerWidth,
      height: window.innerHeight,
      getWidth(width){
        this.width = width
      },
      getHeight(height){
        this.height = height
      },
      activeTab: window.location.pathname !== '/' ? window.location.pathname.replace(/\//g, '') : 'home',
      setActiveTab(name){
        this.activeTab = name
      },
      yHero: 0,
      zHero: 0,
      hHero: 450,
      levitateHero(){
        this.yHero = 1
        this.zHero = 2
        this.hHero = 500
      },
      sidebarVisible: '',
      sidebarInit: 'hidden',
      toggleSidebar(){
        this.sidebarInit = 'visible'
        this.sidebarVisible === '' ? this.sidebarVisible = 'animated slideInRight' : this.sidebarVisible === 'animated slideInRight' ? this.sidebarVisible = 'animated fadeOutRight' : this.sidebarVisible = 'animated slideInRight'
        // console.log(this.sidebarVisible)
      },
      closeSidebar(){
        this.sidebarVisible = 'animated fadeOutRight'
      },
      sticky: 'navbar',
      getNavbarYOffset(offset){
        offset === false ? this.sticky = 'navbar' : this.sticky = 'sticky navbar'
        console.log(this.sticky)
      },
      navbarPadding: 0,
      setNavbarPadding(padding){
        this.navbarPadding = padding
      }
    })
  }
}
export default UI