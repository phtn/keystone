import { extendObservable } from 'mobx'

class Data {
  constructor(){
    extendObservable(this, {
      email: '',
      getEmailInput(email){
        this.email = email
      },
      emailSent: false,
      setEmailSentToTrue(){
        this.emailSent = !this.emailSent
      }
    })
  }
}
export default Data