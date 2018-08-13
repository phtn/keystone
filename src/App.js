import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import UI from './observables/UI'
import 'semantic-ui-css/semantic.min.css'
import './animated.css'

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
class App extends Component {
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/' render={()=> <HomePage/>}/>
            <Route path='/blog' render={()=> <Blog/>}/>
            <Route path='/news' render={()=> <News/>}/>
            <Route path='/products' render={()=> <Products/>}/>
            <Route path='/about' render={()=> <About/>}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
