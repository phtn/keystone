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
      activeTab: '',
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
        console.log(this.sidebarVisible)
      }
    })
  }
}
export default UI