import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Paragraph from './assets/paragraph.png'
import Navbar from './components/Navbar'
import UI from './observables/UI'
import 'semantic-ui-css/semantic.min.css'

const ui = new UI()

const HomePage = Loadable({
  loader: ()=> import('./components/HomePage'),
  delay: 300,
  loading: ()=> <p>loading</p>
})
const Blog = Loadable({
  loader: ()=> import('./components/Blog'),
  delay: 2000,
  loading: ()=> <img src={Paragraph} alt=''/>
})
const News = Loadable({
  loader: ()=> import('./components/News'),
  delay: 300,
  loading: ()=> <p>loading</p>
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
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
