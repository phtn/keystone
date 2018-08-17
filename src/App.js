import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './components/Loading'
import Brand from './components/Brand'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import UI from './observables/UI'
import 'semantic-ui-css/semantic.min.css'
import './animated.css'
import { observer } from 'mobx-react';

const ui = new UI()

const HomePage = Loadable({
  loader: ()=> import('./components/HomePage'),
  delay: 200,
  loading: Loading
})
const Blog = Loadable({
  loader: ()=> import('./components/Blog'),
  delay: 200,
  loading: Loading
})
const News = Loadable({
  loader: ()=> import('./components/News'),
  delay: 200,
  loading: Loading
})
const Products = Loadable({
  loader: ()=> import('./components/Products'),
  delay: 200,
  loading: Loading
})
const About = Loadable({
  loader: ()=> import('./components/About'),
  delay: 200,
  loading: Loading
})

const App = observer(
  class App extends Component {
    componentDidMount(){
      window.addEventListener('resize', ()=> {
        ui.getWidth(window.innerWidth)
        ui.getHeight(window.innerHeight)
      })

      window.addEventListener('scroll', ()=> {
        if(window.scrollY >= 5){
          ui.closeSidebar()
          console.log(ui.sidebarVisible)
        }
      })

    }
    componentWillUnmount(){
      window.removeEventListener('resize', ()=> {
        ui.getWidth(window.innerWidth)
        ui.getHeight(window.innerHeight)
      })
      window.removeEventListener('scroll', ()=> {
        // ui.toggleSidebar()
      })
    }
    render() {
      return (
        <BrowserRouter>
          <div>
            <Brand title='keystone media'/>
            <Navbar/>
            <Switch >
              <Route exact path='/' render={()=> <HomePage sidebarVisibility={ui.sidebarVisible}/>}/>
              <Route path='/earth' render={()=> <Blog height={ui.height - 250}/>}/>
              <Route path='/news' render={()=> <News height={ui.height - 250}/>}/>
              <Route path='/products' render={()=> <Products/>}/>
              <Route path='/about' render={()=> <About height={ui.height - 250}/>}/>}/>
            </Switch>
            {/* <Footer/> */}
          </div>
        </BrowserRouter>
      );
    }
  }
)

export default App;
