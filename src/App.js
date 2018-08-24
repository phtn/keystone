import React, { Component } from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './components/Loading'
import Brand from './components/Brand'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import UI from './observables/UI'
import Data from './observables/Data'
import 'semantic-ui-css/semantic.min.css'
import './animated.css'
import './App.css'

import firebaseConfig from "./FirebaseConfig";
import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/storage'
import { observer } from 'mobx-react'

const fire = firebase.initializeApp(firebaseConfig)




const ui = new UI()
const oData = new Data()



const Admin = Loadable({
  loader: ()=> import('./admin/Admin'),
  delay: 200,
  loading: Loading
})

// const HomePage = Loadable({
//   loader: ()=> import('./components/HomePage'),
//   delay: 200,
//   loading: Loading
// })
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
const Article = Loadable({
  loader: ()=> import('./components/About'),
  delay: 200,
  loading: Loading
})



const App = observer(
  class App extends Component {
    componentWillMount(){
      // loadData()
    }
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
          
            <Brand title='keystone media'/>
            <Navbar/>
            <Switch >
              <Route exact path='/' render={()=> <HomePage fire={fire} data={oData} sidebarVisibility={ui.sidebarVisible}/>}/>
              <Route path='/health' render={()=> <Blog height={ui.height - 250}/>} width={ui.width}/>
              <Route path='/news' render={()=> <News height={ui.height - 250}/>}/>
              <Route path='/products' render={()=> <Products/>}/>
              <Route path='/about' render={()=> <About height={ui.height - 250}/>}/>}/>
              <Route path={`/${oData.article.pathname}`} render={()=> <Article title={oData.article.title} height={ui.height - 250}/>}/>}/>

              <Route exact path='/admin8080' render={()=> <Admin fire={fire}/>}/>
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      );
    }
  }
)

export default App;
