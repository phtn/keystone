import React from 'react'
import { observer } from 'mobx-react'
import UI from '../observables/UI'
import Landing from './Landing'
import NewsLetter from './NewsLetter';
import MidOne from './MidOne';
import MidTwo from './MidTwo';



const ui = new UI()

const HomePage = observer(
  class Container extends React.Component {
    componentDidMount(){
      ui.levitateHero()
      window.addEventListener('scroll', ()=> {
        window.scrollY > 100 ? ui.setNavbarPadding(50) : ui.setNavbarPadding(0)
      })
    }
    render(){
      return (
        <div>
          <Landing paddingTop={ui.navbarPadding} fire={this.props.fire} data={this.props.data}/>
          <MidOne title='Do you need a Water Consulting Specialist?'/> 
          <NewsLetter fire={this.props.fire}/>
          <MidTwo/>
          {/* <HeroArticles/> */}
        </div>
      )
    }
  }
)
export default HomePage

// Color.fromARGB(255, 255, 59, 48),
// Color.fromARGB(255, 255, 149, 0),
// Color.fromARGB(255, 255, 204, 0),
// Color.fromARGB(255, 76, 217, 100),
// Color.fromARGB(255, 90, 200, 250),
// Color.fromARGB(255, 0, 122, 255),
// Color.fromARGB(255, 88, 86, 214),
// Color.fromARGB(255, 255, 45, 85),