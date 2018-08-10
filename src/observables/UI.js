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
      
    })
  }
}
export default UI